import { TestimonialsType } from "@/utils/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const testimonials: TestimonialsType[] = [
    {
      id: 1,
      img: "gen-kelsang-leksang.png",
      imgAlt:
        "A headshot of a young Buddhist female monk wearing yellow and red robes against a dark red background",
      description:
        "We are very happy with the website. It is very beautiful and meets our stated requirements well. He is extremely meticulous and very keen to provide a high quality of work. He is very responsive to requests and demonstrated a high degree of flexibility. He has a very good eye for design. I would recommend Aman highly.",
      name: "Gen Kelsang Leksang",
      title: "Client at Kadampa Meditation Centre Birmingham",
    },
    {
      id: 2,
      img: "gen-kelsang-lhasang.png",
      imgAlt:
        "A headshot of a young Buddhist female monk wearing yellow and red robes against a white background",
      description: `I have always found him to deeply care about every project he has been working on. He researches it thoroughly and tries to always do the best possible job having really thought through his course of action. Aman is a really kind, sincere and very respectful person; a pleasure to work with. I wouldn't hesitate to recommend him.`,
      name: "Gen Kelsang Lhasang",
      title:
        "Education Programme Co-ordinator at Kadampa Meditation Centre Birmingham",
    },
    {
      id: 3,
      img: "roland-jones.png",
      imgAlt:
        "A headshot of an older gentleman wearing wearing a white shirt and black jumper against a light blue background",
      description:
        "Aman did a wonderful job in designing the new website for KMC Birmingham. From producing prototypes to final implementation and post live support, Aman was involved in all aspects of the life cycle. Aman was a delight to work with, happy to take on board suggestions and committed to building a quality product. Highly recommend him.",
      name: "Roland Jones",
      title:
        "Education Programme Co-ordinator at Kadampa Meditation Centre Swansea",
    },
  ];

  return NextResponse.json({ testimonials }, { status: 200 });
}
