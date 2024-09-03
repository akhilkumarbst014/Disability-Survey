import React,{useEffect} from 'react';
import './FAQ.css';

const FAQ = () => {

    // Scroll to the start of the page when the component is mounted
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);


    return (
        <>
            <div className="faq-container custom-faq-container">
                <h3 className="faq-title custom-faq-title fw-bold">Frequently Asked Questions</h3>
                <div className="faq-accordion custom-faq-accordion" id="faqAccordion">
                    <div className="faq-item custom-faq-item">
                        <div className="faq-header custom-faq-header" id="headingOne">
                            <button
                                className="faq-button custom-faq-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                <i className="faq-icon custom-faq-icon fas fa-question-circle"></i>
                                <span className="faq-text">How will the results of this survey directly impact services and policies for persons with disabilities?</span>
                                <i className="faq-dropdown-icon custom-faq-dropdown-icon fas fa-chevron-down"></i>
                            </button>

                        </div>
                        <div
                            id="collapseOne"
                            className="faq-collapse custom-faq-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="faq-body custom-faq-body">
                                The results of this survey will provide valuable insights into the specific needs and challenges faced by persons with disabilities. This data will be used to inform policymakers, service providers, and advocacy groups, helping them to design and implement more effective programs, services, and policies. By identifying gaps in current support systems and understanding the lived experiences of individuals, we aim to promote inclusivity and accessibility in all areas of life, including education, employment, healthcare, and public services.                            </div>
                        </div>
                    </div>
                    <div className="faq-item custom-faq-item">
                        <div className="faq-header custom-faq-header" id="headingTwo">
                            <button
                                className="faq-button custom-faq-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <i className="faq-icon custom-faq-icon fas fa-question-circle"></i>
                                <span className="faq-text"> What if I need assistance while completing the survey?</span>
                                <i className="faq-dropdown-icon custom-faq-dropdown-icon fas fa-chevron-down"></i>
                            </button>
                        </div>
                        <div
                            id="collapseTwo"
                            className="faq-collapse custom-faq-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="faq-body custom-faq-body">
                                If you need help while completing the survey, please reach out to our support team. We offer various types of assistance, such as someone to guide you through the survey questions or to help you understand certain sections. We are committed to ensuring that everyone can complete the survey comfortably.
                            </div>
                        </div>
                    </div>
                    <div className="faq-item custom-faq-item">
                        <div className="faq-header custom-faq-header" id="headingThree">
                            <button
                                className="faq-button custom-faq-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                <i className="faq-icon custom-faq-icon fas fa-question-circle"></i>
                                <span className="faq-text">What improvements would you like to see in services for persons with disabilities?</span>
                                <i className="faq-dropdown-icon custom-faq-dropdown-icon fas fa-chevron-down"></i>
                            </button>
                        </div>
                        <div
                            id="collapseThree"
                            className="faq-collapse custom-faq-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="faq-body custom-faq-body">
                                I would like to see improvements in several areas. First, I believe there should be greater investment in accessible infrastructure, such as more ramps, elevators, and accessible public transportation. Second, I would like to see more comprehensive healthcare services that are tailored to the needs of individuals with disabilities, including easier access to specialists and adaptive equipment. Education and employment opportunities should be more inclusive, with better support for students and workers with disabilities. Lastly, I would like to see increased public awareness and training programs to reduce stigma and discrimination, ensuring that all individuals, regardless of their abilities, are treated with respect and dignity.                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mt-10'>
                <div className="awareness-and-advocacy">
                    <h3 className="section-title">Awareness and Advocacy</h3>

                    <div className="awareness-item custom-card">
                        <h4 className="item-title"><i class=" fas fa-solid fa-hand-point-right"></i> What is the definition of differently abled or persons with disabilities (PWD)?</h4>
                        <p className="item-content">According to the Rights of Persons with Disabilities Act 2016, a person with a disability is defined as someone who has long-term physical, mental, intellectual, or sensory impairment, which, in interaction with various barriers, may hinder their full and effective participation in society on an equal basis with others.</p>
                    </div>

                    <div className="awareness-item custom-card">
                        <h4 className="item-title"><i class=" fas fa-solid fa-hand-point-right"></i> What are the various types of disabilities recognized under international and local laws?</h4>
                        <p className="item-content">The Rights of Persons with Disabilities Act 2016 covers 21 disabilities:</p>
                        <ul className="custom-list">
                            <li><i className="fas fa-check"></i> Blindness</li>
                            <li><i className="fas fa-check"></i> Low Vision</li>
                            <li><i className="fas fa-check"></i> Leprosy Cured Persons</li>
                            <li><i className="fas fa-check"></i> Hearing Impairment (Deaf and Hard of Hearing)</li>
                            <li><i className="fas fa-check"></i> Locomotor Disability</li>
                            <li><i className="fas fa-check"></i> Intellectual Disability</li>
                            <li><i className="fas fa-check"></i> Autism Spectrum Disorder</li>
                            <li><i className="fas fa-check"></i> Dwarfism</li>
                            <li><i className="fas fa-check"></i> Mental Illness</li>
                            <li><i className="fas fa-check"></i> Muscular Dystrophy</li>
                            <li><i className="fas fa-check"></i> Chronic Neurological Conditions</li>
                            <li><i className="fas fa-check"></i> Cerebral Palsy</li>
                            <li><i className="fas fa-check"></i> Speech and Language Disability</li>
                            <li><i className="fas fa-check"></i> Multiple Disabilities (more than one of the above specified disabilities)</li>
                            {/* Add the rest of the list items here */}
                        </ul>
                    </div>

                    <div className="awareness-item custom-card">
                        <h4 className="item-title"><i class=" fas fa-solid fa-hand-point-right"></i> What are some common misconceptions and stereotypes about persons with disabilities?</h4>
                        <p className="item-content">Common misconceptions and stereotypes include:</p>
                        <ul className="custom-list">
                            <li><i class="fa-solid fa-caret-right"></i><strong>Helplessness:</strong> Assuming that persons with disabilities are entirely dependent on others and incapable of leading independent lives. In reality, many individuals with disabilities are capable of being self-reliant and contributing members of society.</li>
                            <li><i class="fa-solid fa-caret-right"></i><strong>Pity: </strong> Feeling sorry for people with disabilities and treating them as objects of sympathy rather than as individuals with their own strengths and aspirations.</li>
                            <li><i class="fa-solid fa-caret-right"></i><strong>Burden: </strong> Viewing persons with disabilities as burdens on their families or society, rather than recognizing their potential contributions.</li>
                            <li><i class="fa-solid fa-caret-right"></i><strong>Lack of Abilities: </strong>  Assuming that people with disabilities are unable to achieve success or be productive in various fields, overlooking their unique skills and talents.</li>
                            <li><i class="fa-solid fa-caret-right"></i><strong>Uniformity: </strong> Treating all individuals with a particular disability as a homogenous group, disregarding their individual differences and capabilities.</li>
                            <li><i class="fa-solid fa-caret-right"></i><strong>Faking Disability: </strong> Suspecting that some individuals might be pretending or exaggerating their disabilities to receive benefits or advantages.</li>
                            <li><i class="fa-solid fa-caret-right"></i><strong>Inability to Contribute: </strong> Assuming that persons with disabilities cannot make meaningful contributions to the workforce or society, leading to employment discrimination.</li>
                        </ul>
                    </div>

                    <div className="awareness-item custom-card">
                        <h4 className="item-title"><i class=" fas fa-solid fa-hand-point-right"></i> How can I educate myself and others about the challenges faced by differently abled individuals?</h4>
                        <p className="item-content">Educating yourself and others about the challenges faced by differently abled individuals is a crucial step towards fostering a more inclusive and empathetic society. It is an ongoing process. Here are some effective ways to do so:</p>
                        <ul className="custom-list">
                            <li><i class="fa-solid fa-caret-right"></i><i style={{ color: '#6a3602 ', fontWeight: '600' }}>Read books and articles:</i>Seek out books, articles, and research papers that address disability rights, experiences of differently abled individuals, and the challenges they face. This will provide you with valuable insights and diverse perspectives.</li>
                            <li><i class="fa-solid fa-caret-right"></i><i style={{ color: '#6a3602 ', fontWeight: '600' }}>Follow disability advocacy organizations:</i>Follow and support disability advocacy organizations and groups. They often share educational resources, stories, and information about the challenges faced by differently abled individuals.</li>
                            <li><i class="fa-solid fa-caret-right"></i><i style={{ color: '#6a3602 ', fontWeight: '600' }}>Watch documentaries and films:</i>There are numerous documentaries and films that shed light on the lives and struggles of persons with disabilities. They can be powerful tools for raising awareness and fostering empathy.</li>
                            <li><i class="fa-solid fa-caret-right"></i><i style={{ color: '#6a3602 ', fontWeight: '600' }}>Attend workshops and webinars:</i>Look for workshops, webinars, and seminars related to disability rights and inclusion. These events offer opportunities to learn from experts and engage in discussions with others interested in the subject.</li>
                            <li><i class="fa-solid fa-caret-right"></i><i style={{ color: '#6a3602 ', fontWeight: '600' }}>Use inclusive language:</i>Be mindful of your language and avoid using derogatory terms or offensive language when referring to individuals with disabilities. Use person-first language that emphasizes the person, not their disability.</li>
                            <li><i class="fa-solid fa-caret-right"></i><i style={{ color: '#6a3602 ', fontWeight: '600' }}>Volunteer with disability organizations:</i>Consider volunteering with organizations that work for the welfare and empowerment of persons with disabilities. This hands-on experience will deepen your understanding of their challenges.</li>
                            <li><i class="fa-solid fa-caret-right"></i><i style={{ color: '#6a3602 ', fontWeight: '600' }}>Participate in disability awareness events:</i>Attend and support disability awareness events, such as Disability Awareness Month or International Day of Persons with Disabilities, to show your solidarity and learn more..</li>
                            <li><i class="fa-solid fa-caret-right"></i><i style={{ color: '#6a3602 ', fontWeight: '600' }}>Support inclusive policies:</i> Advocate for the implementation of inclusive policies that promote the rights and welfare of persons with disabilities at local, national, and global levels.</li>
                            <li><i class="fa-solid fa-caret-right"></i><i style={{ color: '#6a3602 ', fontWeight: '600' }}>Share information on social media:</i>Use your social media platforms to share educational content about disability rights and the challenges faced by differently abled individuals. This can help raise awareness among your friends and followers.</li>
                        </ul>
                    </div>

                    <div className="awareness-item custom-card">
                        <h4 className="item-title"><i class=" fas fa-solid fa-hand-point-right"></i> Is participation in the survey mandatory?</h4>
                        <p className="item-content">
                            Participation in the survey is entirely voluntary. You are not required to complete it, and there are no penalties for choosing not to participate. If you decide to take part, you can skip any questions that you are uncomfortable with or withdraw from the survey at any time without any consequences. Your choice to participate or not will not affect any services or support you receive. We encourage participation to help us gather valuable insights, but it is completely your decision.</p>
                    </div>

                    <div className="awareness-item custom-card">
                        <h4 className="item-title"><i class=" fas fa-solid fa-hand-point-right"></i> Can I participate if I have multiple disabilities?</h4>
                        <p className="item-content">Yes, you can definitely participate if you have multiple disabilities, and your input is particularly valuable. The survey is designed to capture the experiences of individuals with varying and multiple disabilities. When you have more than one disability, it often means you face unique challenges that may not be fully understood if only single disabilities are considered. The survey allows you to provide detailed information about each of your disabilities, helping us to understand the complexities of living with multiple conditions. This information is crucial in developing services, support systems, and policies that are more inclusive and tailored to the diverse needs of people with multiple disabilities. Your participation helps ensure that all aspects of your experience are recognized and addressed.</p>
                    </div>

                    <div className="awareness-item custom-card">
                        <h4 className="item-title"><i class=" fas fa-solid fa-hand-point-right"></i> What are the rights of persons with disabilities towards employment and accessibility?</h4>
                        <p className="item-content">In India, under the Rights of Persons with Disabilities Act, 2016 (RPWD Act), the following key provisions are protected:</p>
                        <ul className="custom-list">
                            <li>
                                <i class="fa-solid fa-caret-right"></i>
                                <strong>Employment Opportunities:</strong> A minimum of 4% of government jobs are reserved for persons with benchmark disabilities. This ensures that individuals with disabilities have access to job opportunities in various sectors, helping to reduce unemployment and promote financial independence.
                            </li>
                            <li>
                                <i class="fa-solid fa-caret-right"></i>
                                <strong>Non-Discrimination in Employment:</strong> The Act prohibits discrimination in hiring, promotion, and working conditions. Employers must ensure that persons with disabilities are treated fairly and have the same opportunities for advancement as others.
                            </li>

                            <li>
                                <i class="fa-solid fa-caret-right"></i>
                                <strong>Accessibility in the Workplace:</strong> Employers must ensure workplaces are accessible, including ramps, elevators, and accessible toilets. This commitment to accessibility promotes an inclusive environment where all employees can participate fully in the workplace.
                            </li>
                            <li>
                                <i class="fa-solid fa-caret-right"></i>
                                <strong>Accessibility in Public Spaces:</strong> All public buildings, transportation, and services must be made accessible within a specified timeframe. This includes making public transit, parks, and government offices accessible to persons with disabilities, ensuring equal access to public services and amenities.
                            </li>
                            <li>
                                <i class="fa-solid fa-caret-right"></i>
                                <strong>Grievance Redressal:</strong> Persons with disabilities have the right to file complaints against discrimination or rights violations. Effective grievance redressal mechanisms are in place to ensure that their rights are protected and that any issues are addressed promptly and fairly.
                            </li>
                        </ul>

                    </div>
                    <div className="awareness-item custom-card">
                        <h4 className="item-title"><i class=" fas fa-solid fa-hand-point-right"></i>What accommodations are available for completing the survey? give this answer in 50 word?</h4>
                        <p className="item-content">
                            We offer various accommodations to ensure the survey is accessible to all. The survey is available in multiple formats, including online, paper, large print, and audio versions. If you require specific assistance, such as help with reading or filling out the survey, please contact us for support.
                        </p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default FAQ;
