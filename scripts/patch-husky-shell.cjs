const fs = require('node:fs');
const path = require('node:path');

const huskyDir = path.join(process.cwd(), '.husky', '_');

if (!fs.existsSync(huskyDir)) {
  process.exit(0);
}

for (const entry of fs.readdirSync(huskyDir)) {
  const filePath = path.join(huskyDir, entry);
  if (!fs.statSync(filePath).isFile()) {
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  if (content.startsWith('#!/usr/bin/env sh')) {
    content = content.replace('#!/usr/bin/env sh', '#!/bin/sh');
  }

  content = content.replace('. "$(dirname "$0")/h"', '. "${0%/*}/h"');
  content = content.replace('n=$(basename "$0")', 'n=${0##*/}');
  content = content.replace(
    's=$(dirname "$(dirname "$0")")/$n',
    'd=${0%/*}\ns=${d%/*}/$n',
  );
  content = content.replace('sh -e "$s" "$@"', '/bin/sh -e "$s" "$@"');

  fs.writeFileSync(filePath, content);
}
