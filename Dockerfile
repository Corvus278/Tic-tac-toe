FROM node:16.14.2 as dependencies
WORKDIR /tic-tac-toe
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16.14.2 as builder
WORKDIR /tic-tac-toe
COPY . .
COPY --from=dependencies /tic-tac-toe/node_modules ./node_modules
RUN yarn build

FROM node:16.14.2 as runner
WORKDIR /tic-tac-toe
ENV NODE_ENV production

COPY --from=builder /tic-tac-toe/public ./public
COPY --from=builder /tic-tac-toe/package.json ./package.json
COPY --from=builder /tic-tac-toe/.next ./.next
COPY --from=builder /tic-tac-toe/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]