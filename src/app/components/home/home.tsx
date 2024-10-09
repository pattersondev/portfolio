"use client";
import React from "react";
import styles from "./Home.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import purpl from "../../assets/purpl.jpeg";
import happify from "../../assets/happify.png";
import stripe from "../../assets/stripe.webp";
import voynich from "../../assets/voynich.png";

export default function HomePage() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.header}>Hey, I'm Sam</h1>
        <h3>Software Engineer | Entrepreneur | Sports Enthusiast</h3>
        <div className={styles.description}>
          <span>
            I live in Arlington, VA and have a passion for all things software
            engineering. I attended
            <span className={styles.keywords}> James Madison University </span>
            where I studied{" "}
            <span className={styles.keywords}>Computer Science</span> and since
            then have been working as a software engineer in the government
            contracting space.
          </span>
          <span>
            In my free time I love learning new technologies, playing
            basketball, going golfing and spending time with my friends and
            family.
          </span>
          <span>
            If I can be helpful or you'd like to chat please reach out! <br />
            <span className={styles.keywords}>pattersonrsam@gmail.com</span>
          </span>
        </div>
      </div>
      <div className={styles.recentProjectsContainer}>
        <h2 style={{ paddingBottom: "2rem" }}>Recent Projects</h2>
        <div className={styles.projects}>
          <Card sx={{ width: 350, height: 350 }}>
            <CardMedia
              sx={{ height: 175 }}
              image={purpl.src}
              title="Purpl"
            ></CardMedia>
            <CardContent>
              <h3>Purpl</h3>
              <p>SaaS Sneaker Bot</p>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() =>
                  window.open("https://github.com/pattersondev/Sneaker-Related")
                }
              >
                See the code
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 350, height: 350 }}>
            <CardMedia
              sx={{ height: 175 }}
              image={stripe.src}
              title="Stripe"
            ></CardMedia>
            <CardContent>
              <h3>Stripe</h3>
              <p>Stripe E-Commerce Site</p>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() =>
                  window.open("https://github.com/pattersondev/StripeProject")
                }
              >
                See the code
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ width: 350, height: 350 }}>
            <CardMedia
              sx={{ height: 175 }}
              image={voynich.src}
              title="Voynich"
            ></CardMedia>
            <CardContent>
              <h3>Voynich</h3>
              <p>Secure Ephemeral Messaging</p>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() =>
                  window.open("https://github.com/pattersondev/voynich-client")
                }
              >
                See the code
              </Button>
              <Button
                size="small"
                variant="contained"
                style={{ backgroundColor: "black", color: "white" }}
                onClick={() => window.open("https://voynich.chat")}
              >
                Try it!
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}
