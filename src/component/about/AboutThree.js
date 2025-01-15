import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

// const Datas = [
//     {
//         id: 1,
//         title: "Exceed clients’ and colleagues’ expectations",
//         para: "Ut id orci ultricies, gravida arcu ac, elementum eros. Curabitur tortor ipsum, imperdiet eget odio ac, faucibus ultricies nisl. Maecenas scelerisque dignissim elit."
//     },
//     {
//         id: 2,
//         title: "Take ownership and question the status quo in a constructive manner",
//         para: "Nulla facilisi. Vestibulum vel urna eget magna condimentum faucibus. Sed arcu mi, semper sed suscipit vel, rhoncus vel justo."
//     },
//     {
//         id: 3,
//         title: "Be brave, curious and experiment – learn from all successes and failures",
//         para: "Quisque aliquet quis est in faucibus. Aenean eget lorem ac risus placerat convallis eget a eros. Suspendisse dignissim ultrices tellus, id placerat mauris lacinia a."
//     },
//     {
//         id: 4,
//         title: "Act in a way that makes all of us proud",
//         para: "Proin dignissim facilisis tortor a mattis. Morbi non maximus nunc, ut mattis tellus. In hac habitasse platea dictumst. Mauris viverra enim tellus, vel ultrices dolor aliquam non."
//     },
//     {
//         id: 5,
//         title: "Build an inclusive, transparent and socially responsible culture",
//         para: "Maecenas eros sapien, egestas at elit nec, eleifend sagittis orci."
//     }
// ]

const Datas = [
  {
    id: 1,
    title: "Personalized, Tailored Solutions",
    para: "We understand that no two businesses are the same. That’s why we take the time to understand your unique challenges and goals, crafting cybersecurity strategies that align perfectly with your specific needs. From small businesses to medium enterprises, our solutions are as adaptable as they are effective.",
  },
  {
    id: 2,
    title: "Passionate and Knowledgeable Team",
    para: "At Aegis Secura, we may not boast certifications like CISSP or OSCP yet, but we make up for it with unparalleled passion and real-world expertise. Our team lives and breathes cybersecurity, bringing the latest knowledge and tools to every project to deliver exceptional results."
  },
  {
    id: 3,
    title: "Transparent Communication",
    para: "We believe that trust is built on honesty. With us, you’ll always know where you stand. We provide clear, jargon-free updates and actionable insights throughout our partnership, ensuring you’re informed and confident in every step of the process.",
  },
  {
    id: 4,
    title: "Cost-Effective for Small-Medium Businesses",
    para: "Unlike larger firms that often overlook smaller clients, we’re dedicated to providing top-notch cybersecurity services that fit your budget. Our streamlined approach allows us to offer high-value solutions without the high price tag, making us the perfect choice for businesses looking for effective yet affordable protection.",
  },
  {
    id: 5,
    title: "Proactive and Reliable Protection",
    para: "We don’t just react to threats; we work tirelessly to prevent them. Our hands-on, proactive approach ensures that your business is always a step ahead of cyber risks, safeguarding your operations, reputation, and customer trust.",
  },
];



const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle
                    subtitle="Our Values"
                    title="Why should you work with us?"
                    description="We are a growing agency in the ever evolving world of Cybersecurity. By choosing Aegis Secura, you’re partnering with a team that genuinely cares about your success. <b> Let’s secure your business, together."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;