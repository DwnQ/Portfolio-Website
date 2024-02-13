import Layout from "@/components/Layout";
import Link from "next/link";

const Index = ({}) => (
  <Layout title="About Me – Darwin Qiu">
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white pb-5">
        About Me
      </h1>
      <div className="mb-8">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I am a computer science student currently studying at the TU Vienna.
          Through my CS studies I have aquired a strong foundation in math and
          problem-solving skills as well as expended my knowledge in algorithms,
          data structures and computer networks.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I am highly motivated and dedicated to my studies, and am always
          seeking new challenges and opportunities to learn and grow in my
          field. I am excited about the many career opportunities available to
          me as a computer science student and am confident that with hard work
          and dedication, I can make a meaningful impact in the field.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Thank you for checking out my website. I hope you find my resume and
          portfolio informative and that it gives you a sense of my skills and
          abilities. If you have any questions or would like to discuss
          potential job opportunities, please do not hesitate to contact me.
        </p>
      </div>
    </div>
  </Layout>
);

export default Index;
