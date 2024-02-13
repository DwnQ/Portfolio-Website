import Campfire from "../Campfire";

export default function index() {
  return (
    <div>
      <h2 className="text-gray-600 dark:text-white mb-4 text-2xl font-semibold">
        Welcome to my Website ,
      </h2>
      <p className="text-gray-600 break-words dark:text-gray-400 mb-4">
        Greetings Traveler! I'm Darwin Qiu, a passionate computer science
        enthusiast currently navigating the fascinating realm of TU Vienna.
        Amidst my CS journey, I've not only honed my mathematical prowess and
        problem-solving skills but also delved into the intricate realms of
        algorithms, data structures, and computer networks.
      </p>
      <p className="text-gray-600 break-words dark:text-gray-400 mb-4">
        Fueled by boundless motivation, I approach my studies with unwavering
        dedication. Ever-eager for fresh challenges, I continually seek new
        opportunities to expand my knowledge and evolve within my field. The
        myriad career possibilities in computer science excite me, and I am
        confident that, armed with diligence and passion, I can carve a
        meaningful impact in this dynamic domain.
      </p>
      <Campfire />
    </div>
  );
}
