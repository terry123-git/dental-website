import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Dental Technology: AI and Digital Imaging',
    excerpt: 'Discover how artificial intelligence and advanced digital imaging are revolutionizing dental diagnostics and treatment planning.',
    content: `
      The dental industry is experiencing a technological revolution. With the advent of artificial intelligence and advanced digital imaging techniques, dentists can now provide more accurate diagnoses and create more effective treatment plans than ever before.

      ## AI in Dental Diagnostics

      Artificial intelligence is transforming how dentists detect and diagnose oral health issues. AI-powered software can analyze dental X-rays and identify potential problems with remarkable accuracy, often catching issues that might be missed by the human eye.

      ## Digital Imaging Advancements

      Modern dental practices are increasingly adopting 3D imaging technologies like CBCT (Cone Beam Computed Tomography) scanners. These devices provide detailed, three-dimensional views of teeth, bones, and soft tissues, enabling more precise treatment planning.

      ## Benefits for Patients

      - Earlier detection of dental issues
      - More accurate diagnoses
      - Less invasive treatments
      - Better treatment outcomes
      - Improved patient understanding

      The integration of AI and digital imaging in dentistry isn't just about using new technology – it's about providing better care and more predictable results for patients.
    `,
    author: 'Dr. Sarah Johnson',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80',
    categories: ['Technology', 'Innovation']
  },
  {
    id: 2,
    title: 'Understanding Modern Orthodontic Options',
    excerpt: 'Explore the latest developments in orthodontic treatment, from invisible aligners to advanced braces technology.',
    content: `
      Modern orthodontics offers more options than ever for achieving a perfect smile. From traditional braces to invisible aligners, patients can choose from various treatment methods based on their specific needs and lifestyle preferences.

      ## Clear Aligners

      Clear aligners have revolutionized orthodontic treatment, offering a nearly invisible way to straighten teeth. These removable trays gradually shift teeth into their desired positions while allowing patients to maintain their normal oral hygiene routines.

      ## Modern Braces

      Today's braces are more comfortable and effective than ever before. Options include:
      - Traditional metal braces
      - Ceramic braces
      - Lingual braces
      - Self-ligating braces

      ## Choosing the Right Option

      The best orthodontic treatment depends on various factors:
      - Severity of misalignment
      - Patient age
      - Lifestyle considerations
      - Budget constraints

      Consulting with an orthodontist can help determine the most suitable treatment plan for your specific case.
    `,
    author: 'Dr. Michael Chen',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80',
    categories: ['Orthodontics', 'Treatment']
  },
  {
    id: 3,
    title: 'Sustainable Practices in Modern Dentistry',
    excerpt: 'Learn how dental practices are adopting eco-friendly initiatives while maintaining high standards of care.',
    content: `
      Environmental consciousness is becoming increasingly important in dentistry. Modern dental practices are finding innovative ways to reduce their environmental impact while maintaining the highest standards of patient care.

      ## Eco-Friendly Initiatives

      Many dental offices are implementing sustainable practices such as:
      - Digital record-keeping
      - Biodegradable products
      - Water conservation
      - Energy-efficient equipment
      - Proper waste management

      ## Benefits of Green Dentistry

      Sustainable dental practices offer numerous advantages:
      - Reduced environmental impact
      - Cost savings
      - Improved public health
      - Enhanced patient experience

      ## Future Developments

      The future of eco-friendly dentistry looks promising, with ongoing research into:
      - Biodegradable materials
      - Energy-efficient equipment
      - Waste reduction techniques
      - Sustainable sterilization methods

      By adopting sustainable practices, dental offices can contribute to environmental conservation while providing excellent patient care.
    `,
    author: 'Dr. Emily Rodriguez',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80',
    categories: ['Eco-Dentistry', 'Innovation']
  }
];

export const getFeaturedPost = (): BlogPost => blogPosts[0];

export const getRecentPosts = (): BlogPost[] => 
  blogPosts.slice(0, 6);