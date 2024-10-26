## TODOS
1. Send the user a verification email, make them verify email before signing them up
 - Add a new field in the DB called verify, and only if user is verified should they be ablt to login
2. Let user reset their password through email
3. Solana reconcilliation side quest - If the users solana txn fails/takes a long time/is submitted to the blockchain, but your node goes down. What happens then? how can u prevent sending them money twice when the worker comes back up
4. Use react-flow for the UI, make it prettier
 - If you are using react-flow, can you create parallel actions.


primary backedn:
docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword postgres
npx prisma migrate dev
docker exec -it d69b3e384e10 /bin/bash
psql -U postgres
\dt;
npm run dev
move seed.ts to src

frontend:
npm run dev

hooks: .env
go to primary backend npx prisma migrate dev
npx prisma generate
create topic in kafka
docker exec -it b77adc0519fb  /bin/bash
cd /opt/kafka/bin$ 
./kafka-topics.sh --create --topic zap-events-2 --bootstrap-server localhost:9092


1912fc0b6b73c18c36edaa455670a520686e5545ed3c325539adfb70f43e912d 