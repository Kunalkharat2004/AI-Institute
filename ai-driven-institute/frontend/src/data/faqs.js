const faqs = [
    {
        question: "What are the minimum faculty qualifications required for an engineering institution?",
        answer: "Faculty must possess a postgraduate degree in the relevant field and meet the qualifications specified in AICTE norms."
      },
    {
      question: "Can a new institute apply for UG and PG courses in Engineering and Technology?",
      answer: "New institutes can apply only for UG courses. PG courses can be started only after the completion of the first batch of the relevant UG course."
    },
    {
      question: "What is the land requirement for establishing a new engineering college?",
      answer: "The land requirement depends on FSI/FAR as applicable in rural/urban/mega/metro cities."
    },
    {
      question: "Is AICTE approval discontinued for pharmacy and architecture programs?",
      answer: "Yes, AICTE has discontinued granting approval for pharmacy and architecture programs as per Supreme Court directives."
    },
    {
      question: "Can new institutes apply for multiple programs/levels?",
      answer: "Yes, new institutes can apply for one or more programs/levels."
    },
    {
      question: "How many core branches should a new institute in Engineering and Technology opt for?",
      answer: "A minimum of three core branches and one emerging area course must be opted for."
    },
    {
      question: "What is the procedure for existing institutions applying for Extension of Approval (EoA)?",
      answer: "They must update faculty, infrastructure, and other details before submitting the application."
    },
    {
      question: "Can a private institute use the words 'National' or 'Indian' in its name?",
      answer: "No, private institutes cannot use such words in their name as per the APH guidelines."
    },
    {
      question: "Can existing institutions increase intake without NBA/NAAC accreditation?",
      answer: "Yes, but they need to meet infrastructure and faculty requirements specified in the APH."
    },
    {
      question: "Is it mandatory to appoint faculty and a principal for new institutions at the time of application?",
      answer: "Yes, it is mandatory to appoint them before the commencement of the course."
    },
    {
      question: "What is the maximum allowed intake for new institutions?",
      answer: "New institutions can apply for up to six divisions with a maximum intake of 360 seats."
    },
    {
      question: "Can AICTE approval be obtained for MCA/MBA courses in Arts, Science, and Commerce colleges?",
      answer: "Yes, AICTE approval can be obtained for these courses under specific norms."
    },
    {
      question: "Is it necessary for institutions to apply for compliance if deficiencies are found during scrutiny?",
      answer: "Yes, institutions can submit compliance for deficiencies found during scrutiny."
    },
    {
      question: "What is the TER (Technical Education Regulatory Fee) for obtaining AICTE approval for new courses?",
      answer: "The TER charges vary depending on the program and intake size as specified in the APH."
    },
    {
      question: "Can existing institutions merge courses under the same major discipline?",
      answer: "Yes, merging is permitted, and the intake will be the sum of the individual courses' intakes."
    },
    {
      question: "Can institutions convert UG courses into diploma courses?",
      answer: "Yes, but PG courses must be closed simultaneously."
    },
    {
      question: "Is there a limit to increasing intake or adding new courses for existing institutions?",
      answer: "No, there is no limit as long as infrastructure and faculty requirements are met."
    },
    {
      question: "Can institutions use surplus land for other educational purposes?",
      answer: "Yes, with proper approval, surplus land can be used for other educational institutions."
    },
    {
      question: "Can institutes start courses in regional languages?",
      answer: "Yes, institutions can offer additional divisions in regional languages with AICTE approval."
    },
    {
      question: "What is the process for applying for new courses not listed in the APH nomenclature?",
      answer: "Institutions must submit the syllabus and curriculum for approval to AICTE before November 30th."
    },
    {
      question: "Can a new institution start with multiple programs, such as engineering and management?",
      answer: "Yes, a new institution can apply for multiple programs with corresponding security deposits."
    },
    {
      question: "Is it mandatory to have separate buildings for MBA and MCA courses?",
      answer: "No, separate buildings are not required, but other infrastructure and faculty requirements must be fulfilled."
    },
    {
      question: "Can institutions apply for courses in collaboration with industries?",
      answer: "Yes, PG courses in collaboration with industries, especially in emerging areas, are permitted."
    },
    {
      question: "Are faculty recruited on a contractual basis considered for the faculty-student ratio?",
      answer: "Yes, if they have taught full-time for two consecutive semesters in the preceding academic year."
    },
    {
      question: "What is the faculty-student ratio for institutions offering PG courses?",
      answer: "The ratio is specified in Annexure-5 of the APH 2024-27."
    },
    {
      question: "Can institutions offer online courses in addition to regular courses?",
      answer: "Yes, but they must fulfill specific infrastructure requirements mentioned in Chapter-V of the APH."
    },
    {
      question: "Can institutions merge UG and PG courses?",
      answer: "No, merging is allowed only within the same level."
    },
    {
      question: "What is the eligibility for offering ODL/OL (Online Distance Learning) courses?",
      answer: "Institutions must fulfill the criteria specified in Chapter-V of the APH 2024-27."
    },
    {
      question: "Can institutions apply for additional courses in emerging areas without NBA accreditation?",
      answer: "Yes, but they must meet other conditions mentioned in the APH."
    },
    {
      question: "What is the process for obtaining AICTE approval for standalone institutions?",
      answer: "Institutions must apply as per Chapter-I of the APH 2024-27."
    },
    {
        question: "Can institutes offer diploma and postgraduate programs simultaneously?",
        answer: "Yes, institutions can offer both diploma and postgraduate programs if they meet AICTE's minimum requirements for both levels."
      },
      {
        question: "What is the duration of approval granted by AICTE?",
        answer: "Approval is granted for one academic year and must be renewed annually through the Extension of Approval (EoA) process."
      },
      {
        question: "Can institutions increase intake for existing programs mid-session?",
        answer: "No, intake increase can only be applied for during the annual approval cycle and not mid-session."
      },
      {
        question: "Are there any incentives for institutions achieving high student placements?",
        answer: "AICTE offers recognitions and awards for institutions with exemplary student placement records, but no financial incentives are provided."
      },
      {
        question: "What are the norms for setting up an institute in a leased building?",
        answer: "Institutions can operate in leased buildings only if the lease period covers the entire program duration and meets AICTE's requirements."
      },
      {
        question: "Can institutions apply for a change in site location after receiving AICTE approval?",
        answer: "Yes, but institutions must submit a fresh application with justification and meet all the requirements for the new site location."
      },
      {
        question: "Are minority institutions exempt from certain AICTE requirements?",
        answer: "Yes, minority institutions may receive exemptions in specific areas as per legal provisions, but they must comply with core norms."
      },
      {
        question: "Can institutions change their name after AICTE approval?",
        answer: "Yes, institutions can apply for a name change, but it requires approval from AICTE and justification for the change."
      },
      {
        question: "What is the eligibility to apply for the National Institutional Ranking Framework (NIRF)?",
        answer: "Institutions must meet AICTE approval requirements and fulfill the NIRF ranking criteria to be eligible for participation."
      },
      {
        question: "How can institutions ensure compliance with faculty-student ratio norms?",
        answer: "Institutions must recruit adequate faculty as per the AICTE-specified ratio of 1:20 for undergraduate engineering programs."
      },
  ];
  export default faqs;