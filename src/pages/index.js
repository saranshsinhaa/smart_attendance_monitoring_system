import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from 'components/shared/navbar';
import Student from 'components/student/student';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Student
        name="Sarthak Sachdeva"
        email="ss9661@srmist.edu.in"
        status="Absent"
        regNo="RA2111003011824"
        details="CS BTech 3 Sem Sec M2 2022 23"
        facultyName="Dr.P.Sarvanan"
        facultyEmail="abs@gmail.com"
      />

      <Student
        name="Sarthak Sachdeva"
        email="ss9661@srmist.edu.in"
        status="Present"
        regNo="RA2111003011824"
        details="CS BTech 3 Sem Sec M2 2022 23"
        facultyName="Dr.P.Sarvanan"
        facultyEmail="abs@gmail.com"
      />

      <Student
        name="Sarthak Sachdeva"
        email="ss9661@srmist.edu.in"
        status="Absent"
        regNo="RA2111003011824"
        details="CS BTech 3 Sem Sec M2 2022 23"
        facultyName="Dr.P.Sarvanan"
        facultyEmail="abs@gmail.com"
      />
    </>
  );
}
