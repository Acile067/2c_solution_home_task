import { GraphQLError } from "graphql";

export const resolvers = {
  Query: {
    users: async (parent, args, context) => {
      const { filter } = args;

      if (filter) {
        return await context.db.user.findMany({
          where: {
            OR: [
              { name: { contains: filter } },
              { email: { contains: filter } },
            ],
          },
        });
      }

      return await context.db.user.findMany();
    },
  },

  Mutation: {
    addUser: async (parent, args, context) => {
      const { name, email } = args;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new GraphQLError("Invalid email format", {
          extensions: { code: "BAD_USER_INPUT" },
        });
      }

      const existingUser = await context.db.user.findUnique({
        where: { email: email },
      });

      if (existingUser) {
        throw new GraphQLError("A user with this email already exists", {
          extensions: { code: "USER_ALREADY_EXISTS" },
        });
      }

      return await context.db.user.create({
        data: {
          name: name,
          email: email,
        },
      });
    },

    deleteUser: async (parent, args, context) => {
      const userId = parseInt(args.id);

      const user = await context.db.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new GraphQLError("User not found", {
          extensions: { code: "NOT_FOUND" },
        });
      }

      return await context.db.user.delete({
        where: { id: userId },
      });
    },
  },
};
