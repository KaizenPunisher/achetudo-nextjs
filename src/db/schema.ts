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
  tipo: text("tipo").notNull(),
  documento: text("documento").notNull(),
  slug: text("slug").unique(),
  descricao: text("descricao").notNull(),
  abertura_horario: text("abertura_horario"),
  fechamento_horario: text("fechamento_horario"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  remId: uuid("rem_id").references(() => remsTable.id),
  usuarioId: uuid("usuario_id")
    .notNull()
    .references(() => userTable.id),
});
export const empresasTableRelations = relations(empresasTable, ({ one }) => ({
  usuarioId: one(userTable, {
    fields: [empresasTable.usuarioId],
    references: [userTable.id],
  }),
  remId: one(remsTable, {
    fields: [empresasTable.remId],
    references: [remsTable.id],
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
    .references(() => categoriasTable.id),
  empresaId: uuid("empresa_id")
    .notNull()
    .references(() => empresasTable.id),
  remId: uuid("rem_id")
    .notNull()
    .references(() => remsTable.id),
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
  remId: one(remsTable, {
    fields: [anunciosTable.remId],
    references: [remsTable.id],
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

export const arksTable = pgTable("arks", {
  id: uuid("id").defaultRandom().primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  empresaId: uuid("empresa_id")
    .notNull()
    .references(() => empresasTable.id),
  remId: uuid("rem_id")
    .notNull()
    .references(() => remsTable.id),
});
export const arksTableRelations = relations(arksTable, ({ one }) => ({
  empresa: one(empresasTable, {
    fields: [arksTable.empresaId],
    references: [empresasTable.id],
  }),
  rems: one(remsTable, {
    fields: [arksTable.remId],
    references: [remsTable.id],
  }),
}));

export const trsTable = pgTable("trs", {
  id: uuid("id").defaultRandom().primaryKey(),
  ve: timestamp("ve").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
  empresaId: uuid("empresa_id")
    .notNull()
    .references(() => empresasTable.id),
  remId: uuid("rem_id")
    .notNull()
    .references(() => remsTable.id),
});
export const trsTableRelations = relations(trsTable, ({ one }) => ({
  empresa: one(empresasTable, {
    fields: [trsTable.empresaId],
    references: [empresasTable.id],
  }),
  remId: one(remsTable, {
    fields: [trsTable.remId],
    references: [remsTable.id],
  }),
}));

export const remsTable = pgTable("rems", {
  id: uuid("id").defaultRandom().primaryKey(),
  o: text("o").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date()),
});
export const remsTableRelations = relations(remsTable, ({ many }) => ({
  empresas: many(empresasTable),
  anuncios: many(anunciosTable),
  arks: many(arksTable),
  trs: many(trsTable),
}));
