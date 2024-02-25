import mysql from "mysql2/promise";

interface QueryParams {
  query: string;
  values: string[];
}

export const query = async ({ query, values = [] }: QueryParams) => {
  const dbconnection = await mysql.createConnection({
    host: "h29.seohost.pl",
    port: 3306,
    database: "srv64660_interaction_base",
    user: "srv64660_interaction_base",
    password: "GkLPmjtN4uDc7qgcSRJp",
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error: any) {
    throw Error(error.message);
  }
};
