import {
  FiShield,
  FiTarget,
  FiServer,
  FiCheckCircle,
  FiAlertCircle,
  FiCloud,
} from 'react-icons/fi';

const services = [
  {
  title: 'Vulnerability Assessments',
  slug: 'vulnerability-assessments',
  description: 'Identify and prioritize security flaws in your network, systems, and applications.',
  icon: <FiShield size={24} className="text-green-600" />,
  price: '$499',
  features: [
    'Surface & deep vulnerability scanning',
    'Risk scoring and prioritization',
    'PDF report within 5 business days'
  ]
},
  {
    title: 'Penetration Testing',
    slug: 'penetration-testing',
    description: 'Simulated cyberattacks to test your defenses and report actionable weaknesses.',
    icon: <FiTarget size={24} className="text-green-600" />,
  },
  {
    title: 'Managed IT Security',
    slug: 'managed-it-security',
    description: '24/7 monitoring, patching, and threat prevention tailored for growing businesses.',
    icon: <FiServer size={24} className="text-green-600" />,
  },
  {
    title: 'Compliance Consulting',
    slug: 'compliance-consulting',
    description: 'Prepare and align with NIST, ISO27001, SOC 2, HIPAA, and GDPR standards.',
    icon: <FiCheckCircle size={24} className="text-green-600" />,
  },
  {
    title: 'Incident Response',
    slug: 'incident-response',
    description: 'Immediate support to identify, contain, and recover from cybersecurity incidents.',
    icon: <FiAlertCircle size={24} className="text-green-600" />,
  },
  {
    title: 'Cloud Security',
    slug: 'cloud-security',
    description: 'Protect your AWS, Azure, and Google Cloud infrastructure from advanced threats.',
    icon: <FiCloud size={24} className="text-green-600" />,
  },
];

export default services;
