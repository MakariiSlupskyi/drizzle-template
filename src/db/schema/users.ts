import { DefaultViewBuilderCore, integer, pgTable, varchar } from "drizzle-orm/pg-core";

const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({length: 255}).notNull(),
  age: integer().notNull(),
  emai: varchar({ length: 255}).notNull().unique(),
});

export default usersTable;