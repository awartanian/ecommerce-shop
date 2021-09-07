import React, { useEffect } from "react";
import "./TermsAndPrivacy.scss";
import { motion } from "framer-motion";

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="Terms-wrapper"
    >
      <h2>Terms of Service</h2>
      <span>Last updated: 2021-06-27 18:18:48</span>
      <p>
        Please read this Terms of Service ("Terms," "Terms of Service")
        carefully before using the OUR LINK Website operated by ARHERA Company,
        a Corporation formed in Hamburg, Germany ("us," "we," "our") as this
        Terms of Service contains important information regarding limitations of
        our liability. Your access to and use of this Website is conditional
        upon your acceptance of and compliance with these Terms. These Terms
        apply to everyone, including but not limited to visitors, users and
        others, who wish to access and use the Website.
      </p>
      <p>
        By accessing or using the Website, you agree to be bound by these Terms.
        If you disagree with any part of the Terms, then you do not have our
        permission to access or use the Website.
      </p>
      <h2>Purchases</h2>
      <p>
        To effectuate a purchase, you will be asked to supply your credit card
        number, expiration date, CCV, billing address, and shipping address.
      </p>
      <p>
        All payments shall be processed immediately through a third party
        service. We are not responsible for the retention or safety of your
        billing information that is collected by the third party service.
      </p>
      <p>
        You hereby represent and warrant that: (i) you have the legal right to
        use any payment method(s) in connection with any purchase; and that (ii)
        the information you supply to us is true, correct and complete.
      </p>
      <p>
        We reserve the right to refuse or cancel your order at any time for
        reasons including, but not limited to: product or service availability,
        error(s) in your order, or for any other reason.
      </p>
      <p>
        We have the right to refuse or cancel your order if fraud or an
        unauthorized or illegal transaction is suspected. If fraud or an
        unauthorized or illegal transaction is suspected, we have the right to
        contact law enforcement to report the above actions and to provide your
        information.
      </p>
      <h2>Returns</h2>
      <p>
        Should you have received a defective article, we apologise for the
        inconvenience caused! Please create a complaint in your account under
        ‘Orders & Returns’ using the complaint form. Alternatively, you can
        contact us via the contact form down below. Please include your order as
        well as the respective article number and briefly describe to us the
        reason for your complaint.
      </p>
      <h2>Prohibited uses</h2>
      <p>
        You agree that you will use this Website in accordance with all
        applicable laws, rules, regulations and these Terms at all times. The
        following is a non-exhaustive list of prohibited uses of this Website.
        You agree that you will not perform any of the following prohibited uses
      </p>
      <ol>
        <li>
          Impersonating or attempting to impersonate The Lorem Ipsum Company or
          its employees, representatives, subsidiaries or divisions;
        </li>
        <li>
          Misrepresenting your identity or affiliation with any person or
          entity;
        </li>
        <li>
          Sending or attempting to send any advertising or promotional material,
          including but not limited to spam, junk mail, chain mail or any
          similar material;
        </li>
        <li>
          Engaging in any conduct that restricts or inhibits any person’s use or
          enjoyment of the Website, or which, as determined in our sole
          discretion, may harm us or the users of this Website or expose us or
          other users to liability;
        </li>
        <li>
          Using the Website in any manner that could disable, overburden, damage
          or impair the Website or interfere with another party’s use of the
          Website;
        </li>
        <li>
          Using any robot, spider or other similar automatic technology, process
          or means to access or use the Website for any purpose, including
          monitoring or copying any of the material on this Website;
        </li>
        <li>
          Using any manual process or means to monitor or copy any of the
          material on this Website or for any other unauthorized purpose;
        </li>
        <li>
          Using any device, software, means or routine that interferes with the
          proper working of the Website, including but not limited to viruses,
          trojan horses, worms, logic bombs or other such materials;
        </li>
        <li>
          Attempting to gain unauthorized access to, interfering with, damaging
          or disrupting any parts of the Website, the server(s) on which the
          Website is stored, or any server, computer or database connected to
          the Website;
        </li>
        <li>
          Attempting to attack or attacking the Website via a denial-of-service
          attack or a distributed denial-of-service attack;
        </li>
        <li>
          Otherwise attempting to interfere with the proper working of the
          Website;
        </li>
        <li>
          Using the Website in any way that violates any applicable federal,
          state or local laws, rules or regulations.
        </li>
      </ol>
      <h2>DAMAGES AND LIMITATION OF LIABILITY</h2>
      <p>
        IN NO EVENT SHALL THE LOREM IPSUM COMPANY BE LIABLE FOR ANY DIRECT,
        INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING
        OUT OF, RELATING TO OR IN ANY WAY CONNECTED WITH YOUR ACCESS TO, DISPLAY
        OF OR USE OF THIS WEBSITE OR WITH THE DELAY OR INABILITY TO ACCESS,
        DISPLAY OR USE THIS WEBSITE, INCLUDING BUT NOT LIMITED TO YOUR RELIANCE
        UPON OPINIONS OR INFORMATION APPEARING ON THIS WEBSITE; ANY COMPUTER
        VIRUSES, INFORMATION, SOFTWARE, LINKED WEBSITES OPERATED BY THIRD
        PARTIES, PRODUCTS OR SERVICES OBTAINED THROUGH THIS WEBSITE, WHETHER
        BASED ON A THEORY OF NEGLIGENCE, CONTRACT, TORT, STRICT LIABILITY,
        CONSUMER PROTECTION STATUTES OR OTHERWISE, EVEN IF THE LOREM IPSUM
        COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        THIS LIMITATION OF LIABILITY REFLECTS THE ALLOCATION OF RISK BETWEEN YOU
        AND US. THE LIMITATIONS SPECIFIED IN THIS SECTION WILL SURVIVE AND APPLY
        EVEN IF ANY LIMITED REMEDY SPECIFIED IN THESE TERMS OF USE IS FOUND TO
        HAVE FAILED OF ITS ESSENTIAL PURPOSE. THE LIMITATIONS OF LIABILITY
        PROVIDED IN THESE TERMS OF USE INURE TO THE BENEFIT OF THE LOREM IPSUM
        COMPANY.
      </p>
      <h2>Links to Third-Party Sites</h2>
      <p>
        This Website may contain hyperlinks to websites operated by parties
        other than us. We provide such hyperlinks for your reference only. We do
        not control such websites and are not responsible for their contents or
        the privacy or other practices of such websites. Further, it is up to
        you to take precautions to ensure that whatever links you select or
        software you download (whether from this Website or other websites) is
        free of such items as viruses, worms, trojan horses, defects and other
        items of a destructive nature. Our inclusion of hyperlinks to such
        websites does not imply any endorsement of the material on such websites
        or any association with their operators.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        All contents of this Website are ©2021 The Lorem Ipsum Company. All
        rights reserved. Website, and all content and other materials on this
        Website, including, without limitation, all logos, designs, text,
        graphics, pictures, information, data, software, sound files, other
        files and the selection and arrangement thereof (collectively, " Content
        ") are the proprietary property of The Lorem Ipsum Company and are
        either registered trademarks or trademarks of The Lorem Ipsum Company in
        the U.S. and/or other countries. Other logos and product and company
        names mentioned herein may be the trademarks of their respective owners.
        We are not responsible for content on websites operated by parties other
        than us.
      </p>
      <p>
        If you are aware of an infringement of our intellectual property, please
        let us know by contacting us at info@theloremipsumco.com.
      </p>
      <p>
        We respect the intellectual property rights of others. It is our policy
        to respond to any claim that Content posted on the Website infringes on
        the copyright or other intellectual property rights of any person or
        entity.
      </p>
      <p>
        If you are a copyright owner, or authorized on behalf of one, and you
        believe that the copyrighted work has been copied in a way that
        constitutes copyright infringement, please submit your claim via email
        to info@theloremipsumco.com, with the subject line: “Copyright
        Infringement” and include in your claim a detailed description of the
        alleged infringement as detailed below, under “DMCA Notice and Procedure
        for Copyright Infringement Claims”.
      </p>
      <p>
        You may be held accountable for damages (including costs and attorneys’
        fees) for any misrepresentation or bad-faith claims on the infringement
        of any Content found on and/or through the Website on your copyright.
      </p>
    </motion.div>
  );
}

export default TermsAndConditions;
