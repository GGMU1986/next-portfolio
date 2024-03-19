export const TIMELINEFRONT = [
  {
    type: 'dev',
    title: 'Associate Software Engineer',
    place: 'Aspen Capital - New York, NY',
    date: 'Aug 2022 - Present',
    info: '',
    className:
      'absolute top-[4%] sm:top-[5%] left-[10%] sm:left-[60%] cursor-pointer',
  },
  {
    type: 'dev',
    title: 'Software Engineer I',
    place: 'LynxDx, Inc - Ann Arbor, MI',
    date: 'Feb 2022 - July 2022',
    info: '',
    className:
      'top-[12%] absolute sm:top-[13%] left-[10%] sm:left-[22%] z-[10] cursor-pointer',
  },
  {
    type: 'school',
    title: 'Coding Bootcamp',
    place: 'App Academy - New York, NY',
    date: 'Nov 2021',
    info: '',
    className:
      'top-[20%] sm:top-[21%] absolute left-[10%] sm:left-[60%] z-[10] cursor-pointer',
  },
  {
    type: 'school',
    title: 'MA Mathematics',
    place: 'Queens College - New York, NY',
    date: 'Sept 2021',
    info: '',
    className:
      'top-[28%] sm:top-[29%] absolute left-[10%] sm:left-[22%] z-[10] cursor-pointer',
  },
  {
    type: 'work',
    title: 'Financial Data Analyst',
    place: 'Moody&apos;s Corporation - New York, NY',
    date: 'July 2018 - July 2021',
    info: '',
    className:
      'top-[36%] sm:top-[37%] absolute left-[10%] sm:left-[60%] z-[10] cursor-pointer',
  },
  {
    type: 'work',
    title: 'Assurance Intern',
    place: 'PriceWaterhouseCoopers - New York, NY',
    date: 'Jan 2018 - Apr 2018',
    info: '',
    className:
      'top-[44%] sm:top-[45%] absolute left-[10%] sm:left-[22%] z-[10] cursor-pointer',
  },
  {
    type: 'work',
    title: 'Math Adjunct Lecturer',
    place: 'CUNY - New York, NY',
    date: 'Aug 2016 - Dec 2017',
    info: 'Classes taught: Pre-calculus, Calculus',
    className:
      'top-[52%] sm:top-[53%] absolute left-[10%] sm:left-[60%] z-[10] cursor-pointer',
  },
  {
    type: 'school',
    title: 'BA Mathematics',
    place: 'Queens College - New York, NY',
    date: 'June 2016',
    info: '',
    className:
      'top-[60%] sm:top-[61%] relative left-[10%] sm:left-[22%] z-[10] cursor-pointer',
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
      'Significantly enhanced automated phone payment system, including testing and error logging, to allow for saving bank accounts, and setting up/updating autopay, so borrowers never miss a payment. Increased business monthly revenue by $1-2M',
      'Migrated process for updating databases with payment information from Chase to AWS. Replaced process of stored long SQL procedures, resulting in better logging, error handling, and process efficiency. Added email/slack notifications for borrowers/internal team',
      "Collaborated with teams across the business to understand needs, provide value, and create realistic plans to complete goals. Participated in software design/architecture discussions. Reviewed team members' pull requests and provided feedback to improve code quality",
      'Added a backend feature that sent two email reminders to borrowers that manually linked bank accounts in user-facing app, through micro-deposits, to complete the process of linking their bank account',
    ],
    pics: [
      {
        id: 0,
        path: '/acPics/dashboard.png',
        alt: 'Dashboard',
        description:
          'The Borrower Portal Dashboard tab, where borrowers can view the relevant information pertaining to their loan',
      },
      {
        id: 1,
        path: '/acPics/account-profile.png',
        alt: 'Account Profile',
        description:
          'The Account Profile tab, where borrowers can confirm their information is correct and make updates. Before navigating away, the borrower will be asked if they want keep unsaved changes',
      },
      {
        id: 2,
        path: '/acPics/one-time-payment.png',
        alt: 'One time payment',
        description:
          'The Payments tab, where borrowers can schedule one-time payments, assuming they have linked a bank account, manually or through plaid, on the portal',
      },
      {
        id: 3,
        path: '/acPics/payment-confirmation-modal.png',
        alt: 'Payment confirmation modal',
        description:
          'The Payment Confirmation Modal, where borrowers can confirm all the information is correct before initiating a payment',
      },
      {
        id: 4,
        path: '/acPics/payment-history.png',
        alt: 'Payment history',
        description:
          'The Payment History tab, where borrowers can see all their payments in one place, with relevant information for each payment, and there is a sorting feature as well',
      },
      {
        id: 5,
        path: '/acPics/add-bank-account.png',
        alt: 'Add bank account',
        description:
          'Adding a bank account to the portal, borrowers can link accounts manually through micro-deposits, this option takes a few business days. Or they can go through the plaid flow to link their account faster',
      },
      {
        id: 6,
        path: '/acPics/plaid-gregory.png',
        alt: 'Plaid Gregory',
        description: 'The Plaid flow to link a bank account',
      },
      {
        id: 7,
        path: '/acPics/autopay-modal.png',
        alt: 'Autopay Modal',
        description:
          'The Autopay form modal, where borrowers can set up autopay for any day of the month. Only certain loans are eligible for Autopay, only these loans will have access to the form. Also, if the last day of the month ends before their chosen day to pay, the payment will be initiated on the last day of the month',
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
      'Topology, Abstract Algebra, Theory of the Integral, Complex Analysis, Real Analysis, Numerical Analysis I & II, Number Theory',
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
    bullets: ['', '', '', ''],
  },
  {
    id: 6,
    type: 'work',
    title: 'Mathematics Adjunct Lecturer',
    company: 'City University of New York',
    place: 'New York, N.Y.',
    date: 'August 2016 - December 2017',
    bullets: [
      'Taught undergraduate classes (approx. 35 students) in elementary algebra, college algebra & trigonometry, pre-calculus, and calculus',
      'Created course syllabi and lectures in alignment with CUNY standards to ensure students perform their best on departmental exams',
      'Designed homework problems of varying difficulty to reinforce concepts learned in class',
      'Held office hours to address students’ concerns and develop study action plans to facilitate a better understanding of difficult concepts',
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
