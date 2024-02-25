import mysql from "mysql2/promise";

interface QueryParams {
  query: string;
  values: string[];
}

export const query = async ({ query, values = [] }: QueryParams) => {
  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST ?? "",
    port: Number(process.env.DB_PORT) ?? 0,
    database: process.env.DB_DATABASE ?? "",
    user: process.env.DB_USER ?? "",
    password: process.env.DB_PASSWORD ?? "",
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error: any) {
    throw Error(error.message);
  }
};
