import { relations } from "drizzle-orm";

import {
  uuid,
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
} from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified")
    .$defaultFn(() => false)
    .notNull(),
  image: text("image"),
  createdAt: timestamp("created_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
  updatedAt: timestamp("updated_at")
    .$defaultFn(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const sessionTable = pgTable("session", {
  id: uuid("id").defaultRandom().primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: uuid("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
});

export const accountTable = pgTable("account", {
  id: uuid("id").defaultRandom().primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => userTable.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verificationTable = pgTable("verification", {
  id: uuid("id").defaultRandom().primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
  updatedAt: timestamp("updated_at").$defaultFn(
    () => /* @__PURE__ */ new Date(),
  ),
});

export const empresasTable = pgTable("empresas", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  cpf: text("cpf"),
  cnpj: text("cnpj"),
  tipo: text("tipo").notNull(),
  slug: text("slug").unique(),
  descricao: text("descricao").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  admId: uuid("adm_id").references(() => admTable.id),
  usuarioId: uuid("usuario_id")
    .notNull()
    .references(() => userTable.id),
});
export const empresasTableRelations = relations(empresasTable, ({ one }) => ({
  usuarioId: one(userTable, {
    fields: [empresasTable.usuarioId],
    references: [userTable.id],
  }),
  admId: one(admTable, {
    fields: [empresasTable.admId],
    references: [admTable.id],
  }),
}));

export const anunciosTable = pgTable("anuncios", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  tipo: text("tipo").notNull(),
  imagem1: text("imagem1").notNull(),
  precoEmCentavos: integer("preco_em_centavos"),
  descricao: text("descricao").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  categoriaId: uuid("categoria_id")
    .notNull()
    .references(() => categoriasTable.id, { onDelete: "set null" }),
  empresaId: uuid("empresa_id")
    .notNull()
    .references(() => empresasTable.id, { onDelete: "cascade" }),
  admId: uuid("adm_id")
    .notNull()
    .references(() => admTable.id, { onDelete: "cascade" }),
});
export const anunciosTableRelations = relations(anunciosTable, ({ one }) => ({
  categoriaId: one(categoriasTable, {
    fields: [anunciosTable.categoriaId],
    references: [categoriasTable.id],
  }),
  empresaId: one(empresasTable, {
    fields: [anunciosTable.empresaId],
    references: [empresasTable.id],
  }),
  admId: one(admTable, {
    fields: [anunciosTable.admId],
    references: [admTable.id],
  }),
}));

export const enderecosTable = pgTable("enderecos", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  empresaId: uuid("empresa_id")
    .notNull()
    .references(() => empresasTable.id, { onDelete: "cascade" }),
});
export const enderecosTableRelations = relations(enderecosTable, ({ one }) => ({
  empresaId: one(empresasTable, {
    fields: [enderecosTable.empresaId],
    references: [empresasTable.id],
  }),
}));

export const telefonesTable = pgTable("telefones", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  empresaId: uuid("empresa_id")
    .notNull()
    .references(() => empresasTable.id, { onDelete: "cascade" }),
});
export const telefonesTableRelations = relations(telefonesTable, ({ one }) => ({
  empresaId: one(empresasTable, {
    fields: [telefonesTable.empresaId],
    references: [empresasTable.id],
  }),
}));

export const categoriasTable = pgTable("categorias", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});
export const categoriaTableRelations = relations(
  categoriasTable,
  ({ many }) => ({
    anuncios: many(anunciosTable),
  }),
);

export const admTable = pgTable("administradores", {
  id: uuid("id").defaultRandom().primaryKey(),
  nome: text("nome").notNull(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});
export const admTableRelations = relations(admTable, ({ many }) => ({
  empresas: many(empresasTable),
}));
