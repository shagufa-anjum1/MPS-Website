import React, { useEffect } from 'react';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Card from '@components/Card/Card';
import Loading from '@components/Loading/Loading';
import { useApi } from '@hooks/useApi';
import careerService from '@/hooks/services/career.service';
import { JobPosting } from '../../types/index';
import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

/**
 * Careers Page Component
 */
const Careers: React.FC = () => {
  const { data: jobs, loading, error, execute } = useApi<JobPosting[]>();

  useEffect(() => {
    // Fetch jobs from API
    execute(() => careerService.getAllJobs()).catch(() => {
      // Fallback to mock data if API fails
      console.log('Using fallback data');
    });
  }, [execute]);

  // Fallback mock data
  const mockJobs: JobPosting[] = [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      description:
        'We are looking for an experienced Full Stack Developer to join our engineering team.',
      requirements: [
        'Strong proficiency in React, TypeScript, and Node.js',
        'Experience with cloud platforms (AWS/Azure)',
        'Excellent problem-solving skills',
        'Strong communication and teamwork abilities',
      ],
      postedDate: '2026-01-15',
    },
    {
      id: '2',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our design team to create beautiful and intuitive user experiences.',
      requirements: [
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Strong portfolio showcasing UI/UX work',
        'Understanding of design systems',
        'Experience with user research and testing',
      ],
      postedDate: '2026-01-20',
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Help us build and maintain scalable infrastructure and deployment pipelines.',
      requirements: [
        'Experience with Kubernetes and Docker',
        'Strong knowledge of CI/CD tools',
        'Cloud platform expertise (AWS/GCP/Azure)',
        'Infrastructure as Code (Terraform/CloudFormation)',
      ],
      postedDate: '2026-01-25',
    },
    {
      id: '4',
      title: 'Product Manager',
      department: 'Product',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and execution for our enterprise solutions.',
      requirements: [
        'Proven track record in product management',
        'Strong analytical and strategic thinking',
        'Excellent stakeholder management',
        'Experience with agile methodologies',
      ],
      postedDate: '2026-01-28',
    },
  ];

  const displayJobs = jobs || mockJobs;

  if (loading) {
    return <Loading fullScreen />;
  }

  return (
    <div>
      {/* Hero Section */}
      <Section background="primary">
        <Container>
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Build your career with us and work on innovative projects that make a difference
            </p>
          </div>
        </Container>
      </Section>

      {/* Why Join Us Section */}
      <Section background="white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a dynamic work environment where innovation thrives and careers flourish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Growth Opportunities',
                description: 'Continuous learning and career advancement programs',
              },
              {
                title: 'Work-Life Balance',
                description: 'Flexible schedules and remote work options',
              },
              {
                title: 'Competitive Benefits',
                description: 'Comprehensive health, retirement, and wellness benefits',
              },
            ].map((benefit, index) => (
              <Card key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Job Listings Section */}
      <Section background="gray">
        <Container>
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">
              Explore current opportunities and find your perfect role
            </p>
          </div>

          {error && (
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-8">
              <p>Unable to load jobs from API. Showing sample data.</p>
            </div>
          )}

          <div className="space-y-6">
            {displayJobs.map((job) => (
              <Card key={job.id} hover>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-grow mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-3">
                      <div className="flex items-center">
                        <FaBriefcase className="mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-2" />
                        {job.type} • {job.experience}
                      </div>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                  <div className="lg:ml-6">
                    <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors whitespace-nowrap">
                      Apply Now
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Careers;
