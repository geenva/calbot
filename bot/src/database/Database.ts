import { PrismaClient } from "@prisma/client";

export default class Database {
  new() {
    return new PrismaClient();
  }
}
