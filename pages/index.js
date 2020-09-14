// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Card from "../components/card";
export default function Home() {
  return (
    <>
      <section className="header-section">
        <img src="images/cover.png" />
        <div className="overlay">
          <div className="container">
            <h1>First Blog.</h1>
            <p>Made by Zeyad Tareq</p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="grid-view">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </section>
    </>
  );
}
