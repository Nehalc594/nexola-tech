import {
  FiShield,
  FiTarget,
  FiServer,
  FiCheckCircle,
  FiAlertCircle,
  FiCloud,
} from 'react-icons/fi';

const serviceData = [
  {
    title: 'Vulnerability Assessments',
    slug: 'vulnerability-assessments',
    description: 'We scan your systems to uncover critical vulnerabilities before attackers do. Our detailed reports help you prioritize and fix issues fast.',
    image: '/images/services/vulnerability.png',
    icon: FiShield,
  },
  {
    title: 'Penetration Testing',
    slug: 'penetration-testing',
    description: 'We simulate real-world attacks to find weak spots in your applications, APIs, and infrastructure. Includes exploit evidence and remediation steps.',
    image: '/images/services/penetration.png',
    icon: FiTarget,
  },
  {
    title: 'Managed IT Security',
    slug: 'managed-it-security',
    description: 'End-to-end support with 24/7 monitoring, patch management, antivirus, and response — all managed by our expert security team.',
    image: '/images/services/managed-security.png',
    icon: FiServer,
  },
  {
    title: 'Compliance Consulting',
    slug: 'compliance-consulting',
    description: 'We help you prepare for audits, close gaps, and align with NIST, ISO27001, SOC 2, HIPAA, and GDPR without the stress.',
    image: '/images/services/compliance.png',
    icon: FiCheckCircle,
  },
  {
    title: 'Incident Response',
    slug: 'incident-response',
    description: 'Our experts respond rapidly to security breaches, isolate threats, and help your business recover securely with full forensics.',
    image: '/images/services/incident-response.png',
    icon: FiAlertCircle,
  },
  {
    title: 'Cloud Security',
    slug: 'cloud-security',
    description: 'Secure your cloud with identity hardening, segmentation, logging, and detection for AWS, Azure, or Google Cloud.',
    image: '/images/services/cloud-security.png',
    icon: FiCloud,
  },
];

export default serviceData;