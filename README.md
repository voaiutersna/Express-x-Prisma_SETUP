----------Server--------------
npm init -y
npm install express morgan body-parser cors nodemon

Package         	หน้าที่หลัก
express	        Framework สำหรับ routing/API	        หัวใจของ backend
morgan	        Log request ทุกครั้งที่ client ยิงเข้ามา	  ใช้ตอน debug
body-parser	    แปลงข้อมูลใน body ของ request เป็น JSON	ปัจจุบันแทนได้ด้วย express.json()
cors	        อนุญาตให้ frontend คนละโดเมนเข้าถึง	จำเป็นถ้าเชื่อมกับ Next.js
nodemon	        รีสตาร์ท server อัตโนมัติเมื่อแก้ไฟล์

----------Prisma--------------
npm install prisma
npx prisma init
npm install @prisma/client

Doc ใช้ในการสร้างและอัพเดตฐานข้อมูล
npx prisma migrate dev --name workshop1_init

//อัพเดต Prisma schema
npx prisma migrate dev

-----------Client-------------
npx create-next-app@latest foldername

npm install
npm run dev
npm install axios
pnpm i

-----------Database (in root project)-------------
npx neonctl@latest init


สำหรับคลิปนี้เราจะมาสอนการใช้ ExpressJS NodeJS ในการติดต่อกับฐานข้อมูล MySQL ทำ CRUD ด้วย Prisma และทดสอบ API ด้วย Postman กันครับ

CRUD คืออะไร? 
Create: สร้างข้อมูล
Read: อ่านข้อมูล
Update: อัปเดตข้อมูล
Delete: ลบข้อมูล