export const TIMELINEFRONT = [
  {
    type: 'dev',
    title: 'Associate Software Engineer',
    place: 'Aspen Capital - New York, NY',
    date: 'Aug 2022 - Present',
    className:
      'absolute cursor-pointer left-[10%] top-[4%] sm:top-[5%] sm:left-[60%]',
  },
  {
    type: 'dev',
    title: 'Software Engineer I',
    place: 'LynxDx, Inc - Ann Arbor, MI',
    date: 'Feb 2022 - July 2022',
    className:
      'absolute cursor-pointer left-[10%] top-[14%] sm:top-[16%] sm:left-[22%]',
  },
  {
    type: 'school',
    title: 'Coding Bootcamp',
    place: 'App Academy - New York, NY',
    date: 'Nov 2021',
    className:
      'absolute cursor-pointer left-[10%] top-[24%] sm:top-[26%] sm:left-[60%]',
  },
  {
    type: 'school',
    title: 'MA Mathematics',
    place: 'Queens College - New York, NY',
    date: 'Sept 2021',
    className:
      'absolute cursor-pointer left-[10%] top-[34%] sm:top-[36%] sm:left-[22%]',
  },
  {
    type: 'work',
    title: 'Financial Data Analyst',
    place: 'Moody&apos;s Corporation - New York, NY',
    date: 'July 2018 - July 2021',
    className:
      'absolute cursor-pointer left-[10%] top-[44%] sm:top-[46%] sm:left-[60%]',
  },
  {
    type: 'work',
    title: 'Assurance Intern',
    place: 'PriceWaterhouseCoopers - New York, NY',
    date: 'Jan 2018 - Apr 2018',
    className:
      'absolute cursor-pointer left-[10%] top-[54%] sm:top-[56%] sm:left-[22%]',
  },
  {
    type: 'work',
    title: 'Math Adjunct Lecturer',
    place: 'CUNY - New York, NY',
    date: 'Aug 2016 - Dec 2017',
    info: 'Classes taught: Pre-calculus, Calculus',
    className:
      'absolute cursor-pointer left-[10%] top-[64%] sm:top-[66%] sm:left-[60%]',
  },
  {
    type: 'school',
    title: 'BA Mathematics',
    place: 'Queens College - New York, NY',
    date: 'June 2016',
    className:
      'absolute cursor-pointer left-[10%] top-[74%] sm:top-[76%] left-[10%] sm:left-[22%]',
  },
];

export const TIMELINEMODAL = [
  {
    id: 0,
    type: 'dev',
    title: 'Associate Software Engineer',
    company: 'Aspen Capital',
    place: 'New York, N.Y.',
    date: 'August 2022 - Present',
    bullets: [
      'At Aspen Capital, I assisted to build, and currently help maintain, and write tests for a user-facing app, an internal app, and the automated phone system. Additonally, I make improvements, and take part in a rotational on call for our microservices that maintain the nightly statement process, which assesses each loan for late fees or the creation of the monthly statements',
      'The user-facing app, or Borrower Portal (BP), for Gregory Funding, which is the mortgage servicing arm of Aspen Capital, allows borrowers to make payments, set up autopay, upload/download documents, view loan information/payment history, and update personal information, all while receiving email notifications. As of March 2024, the BP has 19,000+ active users, and averages 11,000+ payments for $20M+ in payment revenue per month',
      'The internal app is the Aspen Suite (AS), or the Admin Portal. Business analysts, product managers, developers, and other internal stakeholders can use the app to view relevant information about borrowers and loans. The app is the main resource for the Gregory Funding Call Center agents to assist, and perform actions on behalf of, the borrowers',
      'Many borrowers prefer to make payments over the phone, not through the BP, resulting in call wait times of over an hour. I helped design, develop, and deploy an automated phone system using the Twilio API, where borrowers can use the Interactive Voice Response (IVR) system to make payments, save bank accounts for future use, and setup/update/delete autopay. This greatly decreased pressure on the call center, reducing call wait times by one hour. As of March 2024, Twilio payments average about 3,000+ per month resulting in $5M+ in revenue',
      'I was the lead on the project to migrate the process for updating our on-prem & cloud databases with payment information, from Chase, to AWS. I replaced the previous process which consisted of stored long SQL procedures. I made use of S3 buckets, Lambdas, and SQS in AWS for the new process. Resulting in better logging, error handling, and process efficiency',
      'I collaborate daily with stakeholders/teams in various parts of the business to understand needs, and create realistic plans to complete goals. I also participate in software design/architecture discussions, review pull requests for my peers and provide feedback to improve code quality',
    ],
    pics: [
      {
        id: 0,
        path: '/acPics/bp/dashboard.png',
        alt: 'Dashboard',
        tab: 'Dashboard',
        description:
          'Borrowers can view the relevant information pertaining to their loan',
      },
      {
        id: 1,
        path: '/acPics/bp/campaign-modal-paperless.png',
        alt: 'paperless-campaign',
        tab: 'Paperless Campaign Modal',
        description:
          'If a borrower had not enabled paperless upon registration then a modal would appear for the first few times after they logged in promtping them to opt for paperless. Paperless conversion went from 20% to 49%',
      },
      {
        id: 2,
        path: '/acPics/bp/campaign-modal-autopay.png',
        alt: 'Campaign Autopay',
        tab: 'Autopay Campaign Modal',
        description:
          'Similarly, if a borrower has not set up autopay yet, a modal would pop up upon logging in prompting them to set it up. Autopay increased significantly by 80%',
      },
      {
        id: 3,
        path: '/acPics/bp/account-profile.png',
        alt: 'Account Profile',
        tab: 'Account Profile',
        description:
          'Borrowers can confirm their information is correct, make updates, and select preferences. Before navigating away, the borrower will be asked if they want keep unsaved changes',
      },
      {
        id: 4,
        path: '/acPics/bp/statements.png',
        alt: 'Statements & Documents',
        tab: 'Statements & Documents',
        description:
          'One place for borrowers to upload/download important statements/documents related to their loan',
      },
      {
        id: 5,
        path: '/acPics/bp/one-time-payment.png',
        alt: 'One time payment',
        tab: 'Payments',
        description:
          'Borrowers can schedule one-time payments, if they have linked a bank account first',
      },
      {
        id: 6,
        path: '/acPics/bp/payment-confirmation-modal.png',
        alt: 'Payment confirmation modal',
        tab: 'Payment Confirmation Modal',
        description:
          'Borrowers can confirm all the information is correct before initiating a payment',
      },
      {
        id: 7,
        path: '/acPics/bp/payment-history.png',
        alt: 'Payment history',
        tab: 'Payment History',
        description:
          'Borrowers can see all their payments in one place, with relevant information for each payment, and there is a sorting feature as well',
      },
      {
        id: 8,
        path: '/acPics/bp/payment-history-item.png',
        alt: 'Payment history item',
        tab: 'Payment Information Modal',
        description:
          'Borrowers can click into each payment to get more information',
      },
      {
        id: 9,
        path: '/acPics/bp/add-bank-account.png',
        alt: 'Add bank account',
        tab: 'Adding a Bank Account',
        description:
          'Borrowers can link accounts manually through micro-deposits, which takes a few business days. Or they can go through the Plaid flow to link their accounts faster',
      },
      {
        id: 10,
        path: '/acPics/bp/plaid-gregory.png',
        alt: 'Plaid Gregory',
        tab: 'Plaid Flow',
        description: 'The Plaid flow to link a bank account',
      },
      {
        id: 11,
        path: '/acPics/bp/autopay-modal.png',
        alt: 'Autopay Modal BP',
        tab: 'Autopay Modal',
        description:
          'Borrowers can set up/update autopay for any day of the month, and delete autopay. Certain loans are eligible for autopay, only these loans will have access to the form. Also, if the last day of the month ends before their chosen day to pay, the payment will be initiated on the last day of the month',
      },
      {
        id: 12,
        path: '/acPics/as/as-home.png',
        alt: 'Aspen Suite Home',
        tab: 'Aspen Suite Home',
        description:
          'This is the Aspen Suite landing page. The search can find loans by entering in loan ids, loan numbers, property addresses, or borrower last names',
      },
      {
        id: 13,
        path: '/acPics/as/apps.png',
        alt: 'Aspen Suite Home',
        tab: 'Aspen Suite Home',
        description:
          'These are the apps within the Admin Portal, allowing admins to view important information about the business in one place',
      },
      {
        id: 14,
        path: '/acPics/as/autopay-buttons.png',
        alt: 'Autopay Set Up',
        tab: 'Autopay Set Up',
        description:
          'I was the lead engineer for implementing Autopay set up/update/deletion in Aspen Suite for various eligible loan types, including writing the tests. This required logic on the Frontend & Backend (Java, Spring Boot)',
      },
      {
        id: 15,
        path: '/acPics/as/autopay-modal.png',
        alt: 'Autopay Modal AS',
        tab: 'Autopay Modal',
        description:
          'This is the Autopay modal created with Mantine. The modal inputs change as the status of the loan changes',
      },
    ],
  },
  {
    id: 1,
    type: 'dev',
    title: 'Software Engineer I',
    company: 'LynxDx, Inc.',
    place: 'New York, N.Y.',
    date: 'February 2022 - July 2022',
    bullets: [
      'Helped rebuild the Laboratory Information Management System in 3 months from the ground up, resulting in improved performance, scalability, and user experience',
      'Redesigned all database tables and set up new associations for increased efficiency and performance of database querying',
      'Added backend and frontend tests allowing the team to confirm new code hasn’t affected previous working code',
    ],
  },
  {
    id: 2,
    type: 'school',
    title: 'Software Engineering Bootcamp',
    company: 'App Academy',
    place: 'New York, N.Y.',
    date: 'November 2021',
    classesTaken:
      'Rigourous bootcamp with 1000-hour curriculum and < 3% acceptance rate. Curriculum included Ruby on Rails, JavaScript, React, PostgreSQL, MongoDB, Data Structures & Algorithms, pair programming, and the completion of two solo projects and one group project',
  },
  {
    id: 3,
    type: 'school',
    title: 'Master of Arts in Mathematics',
    company: 'City University of New York at Queens College',
    place: 'New York, N.Y.',
    date: 'September 2021',
    classesTaken:
      'Topology, Abstract Algebra, Theory of the Integral, Complex Analysis, Real Analysis I & II, Numerical Analysis I & II, Number Theory',
  },
  {
    id: 4,
    icon: '',
    type: 'work',
    title: 'Financial Data Analyst',
    company: "Moody's Corporation",
    place: 'New York, N.Y.',
    date: 'July 2018 - July 2021',
    bullets: [
      'Ensured accuracy, consistency, and analytical value of a portfolio of 300+ public and private business entities',
      'Liaised with senior analysts to resolve queries about financial data used in the ratings process',
      'Managed and supported an offshore team, that performed data entry, by analyzing their work, making corrections, and providing feedback',
      'Trained new hires on portfolio management, accounting standards used in the ratings process, and Moody’s based software',
    ],
  },
  {
    id: 5,
    type: 'work',
    title: 'Assurance Intern',
    company: 'PriceWaterhouseCoopers LLP',
    place: 'New York, N.Y.',
    date: 'January 2018 - April 2018',
    bullets: [
      'I had the great opportunity of interning at a Big 4 Accounting Firm during their busy season. I was part of the team in the Alternative Investments division of PwC that was auditing the Financial Statements of a Hedge Fund in NYC. ',
    ],
  },
  {
    id: 6,
    type: 'work',
    title: 'Mathematics Adjunct Lecturer',
    company: 'City University of New York',
    place: 'New York, N.Y.',
    date: 'August 2016 - December 2017',
    bullets: [
      'Taught undergraduate courses, with about 35 students per class, at two CUNY campuses, Queens College & NYC College of Tecnology, in elementary algebra, college algebra & trigonometry, pre-calculus, and calculus',
      'Created course syllabi and lectures in alignment with CUNY standards to ensure that students were able to perform their best on all departmental exams',
      'Designed and went over homework problems of varying difficulty to reinforce concepts learned in class',
      'Held office hours twice a week to address student concerns and develop study action plans to facilitate a better understanding of difficult concepts',
    ],
  },
  {
    id: 7,
    type: 'school',
    title: 'Bachelor of Arts in Mathematics with Honors',
    company: 'City University of New York at Queens College',
    place: 'New York, N.Y.',
    date: 'June 2016',
    classesTaken:
      'Differential Calculus, Integral Calculus, Multivariable Calculus, Advanced Calculus, Linear Algebra I & II, Differential Equations, Probability & Statistics, Newtonian Physics I & II',
  },
];
