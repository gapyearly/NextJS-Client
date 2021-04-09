import React, { useState } from "react";
import Layout from "@components/Layouts/Layout";
import Link from "next/link";
import styles from "@components/MasonryGallery/PastExperienceCard.module.css";
import Pill from "@components/Buttons/Pill.js";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import PageTitle from "@components/PageTitle";

export default function FAQ() {
  return (
    <>
      <PageTitle>FAQs</PageTitle>
      <Layout>
        <h2>
          Have gap year questions? You're not alone! Check out these FAQs for
          answers.
        </h2>
        <h3>How much does taking a gap year cost?</h3>
        <p>
          Gap years come in a range of prices. While some structured programs
          are priced comparably to a semester or full year of college, a few of
          them offer scholarships, and there are also many more affordable
          independent options. Some of our{" "}
          <Link href="/mentorship">mentors</Link> worked for a portion of the
          year to save up for travel experiences, and many also utilized{" "}
          <a href="/funding">work exchanges</a>, such as WWOOF, HelpX, and
          Workaway, to travel cheaply. Some colleges even have dedicated gap
          year scholarships or offer fully-funded programs of their own. For
          more, check out this{" "}
          <a
            href="http://usatoday30.usatoday.com/news/education/2008-06-18-gap-year_N.htm"
            target="_blank"
          >
            US News article
          </a>{" "}
          on financing a gap year and the Gap Year Association’s{" "}
          <a
            href="https://www.gapyearassociation.org/financial-aid.php"
            target="_blank"
          >
            financial aid resources
          </a>
          .
        </p>
        <h3>Is taking a gap year safe?</h3>
        <p>
          If you do your homework, absolutely. Through strategies like sticking
          to reputable programs, finding trustworthy travel partners, and
          choosing destinations and activities carefully, it’s easy to reduce
          safety risks. If you’re traveling alone, vigilance and research can go
          a long way. While there is an inherent risk involved in any type of
          travel (or life, really), the world is often not as dangerous as the
          news would have us think.
        </p>
        <p>
          For specific advice about traveling alone as a woman, check out some
          of our reflections from{" "}
          <Link href="/girls-who-gap">Girls Who Gap</Link>.
        </p>
        <h3>What can I do during a gap year if I can’t travel?</h3>
        <p>
          Travel is a major element of many gappers’ gap year experiences and
          one that can be life-changing, but it’s not the only option––there are
          many other fulfilling and affordable ways to spend a gap year. Local
          work or volunteering, career exploration programs or internships,
          online learning, local outdoor adventures, and personal creative
          projects are just a few examples of ways that some of our mentors
          spent their gap years.
        </p>
        <h3>
          Will taking a gap year affect my academic performance in college?
        </h3>
        <p>
          Yes, probably––but in a good way! According to the Gap Year
          Association, 90% of gap year students return to school within a year,
          and statistics from Middlebury College and UNC show that {""}
          <a href="https://www.gapyearassociation.org/data-benefits.php">
            gap year students outperform their peers in terms of GPA
          </a>
          . Many students feel burnt out by the end of high school, and a gap
          year is the perfect time to refresh and find new passions that allow
          you to enter college with an even greater interest in learning. Often,
          gappers find that their gap years make them appreciate school even
          more.
        </p>
        <h3>Should I apply to colleges during a gap year or beforehand?</h3>
        <p>
          If you know heading into your last year of high school that you’d like
          to take a gap year, it’s probably a good idea to apply to college
          before taking it––if you’re accepted, many schools will agree to defer
          your acceptance by a year or semester, allowing you to take your gap
          year without having to be concerned about figuring out where you’re
          headed after it’s over. It’s also generally easier to apply to college
          when you have peers, teachers, and school counselors there to support
          you in the process.
        </p>{" "}
        <p>
          {" "}
          That said, it’s certainly possible to apply to colleges (or grad
          school) while on a gap year, and several of our mentors did so. What
          you choose will depend on your readiness to commit to a particular
          institution or course of study and the deferral policies of the
          schools you’re interested in attending.
        </p>
        <h3></h3>
        <p></p>
      </Layout>
    </>
  );
}
