import { Typography } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <h2>Privacy Policy FAQ</h2>
      <Typography>
        Below, we answer some of the most frequently asked questions we get
        about privacy policies. Do I need a privacy policy? Yes, you most likely
        need a privacy policy, especially if your website, mobile app, or
        desktop app collects user information and falls under regional laws like
        the GDPR or CCPA. Even if you don’t fall under any legal jurisdictions,
        consumers today expect to see privacy policies and may only trust your
        business if one is posted. What laws require a privacy policy?
        Technically, no federal law in America requires a privacy policy besides
        COPPA, which is for businesses that target children under 13. But a
        privacy policy can help you meet the legal requirements of data privacy
        laws like the CCPA, GDPR, and PIPEDA. What should my privacy policy
        include? The exact details you should include in your privacy policy
        will depend on what kind of business you conduct and with whom. That
        said, most privacy policies include clauses about the information you
        collect from users, how and why you gather that data, how you use it,
        any third party you share it with, and what your users’ rights are over
        their data. Remember, cookies and other similar forms of data tracking
        are considered personal data and should also be outlined in your policy.
      </Typography>
    </div>
  );
};

export default PrivacyPolicy;
