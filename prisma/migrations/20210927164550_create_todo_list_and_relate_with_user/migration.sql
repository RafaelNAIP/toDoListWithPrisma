-- CreateTable
CREATE TABLE "ToDo" (
    "id" TEXT NOT NULL,
    "toDoName" TEXT NOT NULL,
    "timeSpentOnToDo" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ToDo" ADD CONSTRAINT "ToDo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
