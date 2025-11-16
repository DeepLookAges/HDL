
import { Product, ProductCategory, Order, User } from './types';

export const MOCK_PRODUCTS: Product[] = [
    {
        id: '1',
        name: 'قالب سوشيال ميديا عصري',
        price: 150,
        category: ProductCategory.TEMPLATE,
        images: ['https://picsum.photos/seed/social-template/800/600', 'https://picsum.photos/seed/social-template-2/800/600', 'https://picsum.photos/seed/social-template-3/800/600'],
        description: 'مجموعة قوالب احترافية لمنصات التواصل الاجتماعي، مصممة بشكل جذاب لزيادة تفاعل جمهورك. قابلة للتعديل بالكامل على برامج التصميم.',
        features: ['Editable', 'High Quality', 'Ready to Use', 'Instant Delivery', 'Lifetime Access'],
        usageInfo: 'مثالية للمدونين، المسوقين، وأصحاب المشاريع الصغيرة. استخدمها لإعلاناتك، منشوراتك اليومية، أو قصص الإنستغرام.',
        targetAudience: 'المسوقون الرقميون، صناع المحتوى، أصحاب الأعمال.',
        bestseller: true,
    },
    {
        id: '2',
        name: 'كورس تصميم الجرافيك للمبتدئين',
        price: 500,
        category: ProductCategory.COURSE,
        images: ['https://picsum.photos/seed/design-course/800/600', 'https://picsum.photos/seed/design-course-2/800/600'],
        description: 'تعلم أساسيات تصميم الجرافيك من الصفر. يغطي الكورس مبادئ التصميم، استخدام الألوان، والعمل على أشهر برامج التصميم.',
        features: ['Video Lessons', 'PDF Resources', 'Practical Assignments', 'Certificate of Completion', 'Lifetime Access'],
        demo_video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
        usageInfo: 'ابدأ رحلتك في عالم التصميم واكتسب المهارات اللازمة لإنشاء تصميمات بصرية مذهلة.',
        targetAudience: 'الطلاب، المبتدئون في مجال التصميم، أي شخص يرغب في تعلم مهارة جديدة.',
    },
    {
        id: '3',
        name: 'مقطع موسيقى تصويرية حماسي',
        price: 75,
        category: ProductCategory.AUDIO,
        images: ['https://picsum.photos/seed/epic-music/800/600'],
        description: 'موسيقى ملحمية بدون حقوق ملكية، مثالية لمقاطع الفيديو الترويجية، مقدمات اليوتيوب، والإعلانات.',
        features: ['Royalty-Free', 'High Quality MP3', 'WAV file included', 'Instant Delivery'],
        demo_audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Placeholder audio
        usageInfo: 'أضف لمسة احترافية وحماسية لمشاريع الفيديو الخاصة بك.',
        targetAudience: 'صناع الأفلام، اليوتيوبرز، محرري الفيديو.',
    },
    {
        id: '4',
        name: 'تصميم هوية بصرية كاملة',
        price: 2500,
        category: ProductCategory.DESIGN,
        images: ['https://picsum.photos/seed/branding/800/600', 'https://picsum.photos/seed/branding-2/800/600'],
        description: 'خدمة تصميم هوية بصرية متكاملة لعلامتك التجارية تشمل الشعار، الألوان، الخطوط، وتطبيقات الهوية.',
        features: ['Custom Logo Design', 'Color Palette', 'Typography Selection', 'Brand Guidelines'],
        usageInfo: 'أسس لعلامة تجارية قوية لا تُنسى بهوية بصرية احترافية تعبر عن قيمك.',
        targetAudience: 'الشركات الناشئة، رواد الأعمال، الشركات التي تحتاج لتجديد هويتها.',
        bestseller: true,
    },
     {
        id: '5',
        name: 'مجموعة مؤثرات فيديو سينمائية',
        price: 200,
        category: ProductCategory.VIDEO,
        images: ['https://picsum.photos/seed/vfx-pack/800/600'],
        description: 'حزمة مؤثرات فيديو احترافية (VFX) تضيف لمسة سينمائية لمقاطعك. تتضمن انتقالات، تدرجات لونية، ومؤثرات بصرية.',
        features: ['4K Resolution', 'Drag and Drop', 'Compatible with Premiere Pro & Final Cut', 'Instant Delivery'],
        demo_video: 'https://www.youtube.com/embed/aqz-KE-bpKQ', // Placeholder video
        usageInfo: 'ارتقِ بمستوى مونتاج الفيديو الخاص بك وأبهر مشاهديك بمؤثرات عالية الجودة.',
        targetAudience: 'محرري الفيديو، صناع المحتوى على يوتيوب، المخرجون.',
    },
    {
        id: '6',
        name: 'قالب عرض تقديمي احترافي',
        price: 120,
        category: ProductCategory.TEMPLATE,
        images: ['https://picsum.photos/seed/presentation/800/600'],
        description: 'قالب بوربوينت وجوجل سلايدز بتصميم أنيق واحترافي. أكثر من 50 شريحة فريدة قابلة للتعديل بسهولة.',
        features: ['50+ Unique Slides', 'Editable Charts & Graphs', '16:9 Aspect Ratio', 'Modern Design'],
        usageInfo: 'مثالي لعروض الشركات، المشاريع الطلابية، والاجتماعات الهامة.',
        targetAudience: 'مديرو المشاريع، الطلاب، رواد الأعمال.',
    },
    {
        id: '7',
        name: 'كورس المونتاج السينمائي',
        price: 650,
        category: ProductCategory.COURSE,
        images: ['https://picsum.photos/seed/editing-course/800/600'],
        description: 'تعلم تقنيات المونتاج السينمائي على برنامج Adobe Premiere Pro. من الأساسيات إلى التقنيات المتقدمة.',
        features: ['20+ Hours of Content', 'Project Files Included', 'Expert Instructor', 'Lifetime Access'],
        demo_video: 'https://www.youtube.com/embed/YqO_a_a2zI8', // Placeholder video
        usageInfo: 'حول لقطاتك العادية إلى قصة بصرية مؤثرة واحترافية.',
        targetAudience: 'هواة صناعة الأفلام، محررو الفيديو الطموحون.',
        bestseller: true,
    },
    {
        id: '8',
        name: 'تصميم غلاف كتاب',
        price: 400,
        category: ProductCategory.DESIGN,
        images: ['https://picsum.photos/seed/book-cover/800/600'],
        description: 'خدمة تصميم غلاف كتاب احترافي وجذاب يجذب القراء. تصميم مخصص حسب نوع الكتاب ومحتواه.',
        features: ['Custom Artwork', 'Unlimited Revisions', 'Print-Ready Files', '3D Mockup'],
        usageInfo: 'اجعل كتابك يبرز على الأرفف الرقمية والمادية بغلاف لا يُقاوم.',
        targetAudience: 'المؤلفون، دور النشر.',
    }
];

export const MOCK_ORDERS: Order[] = [
    { id: 'ORD-001', userId: 'USR-001', userName: 'أحمد محمود', items: [MOCK_PRODUCTS[0] as any], total: 150, paymentMethod: 'فودافون كاش', status: 'Completed', date: '2024-05-20' },
    { id: 'ORD-002', userId: 'USR-002', userName: 'فاطمة علي', items: [MOCK_PRODUCTS[1] as any, MOCK_PRODUCTS[2] as any], total: 575, paymentMethod: 'فوري', status: 'Completed', date: '2024-05-19' },
    { id: 'ORD-003', userId: 'USR-001', userName: 'أحمد محمود', items: [MOCK_PRODUCTS[4] as any], total: 200, paymentMethod: 'أورانج كاش', status: 'Pending', date: '2024-05-21' },
    { id: 'ORD-004', userId: 'USR-003', userName: 'سارة إبراهيم', items: [MOCK_PRODUCTS[6] as any], total: 650, paymentMethod: 'فودافون كاش', status: 'Completed', date: '2024-05-18' },
];

export const MOCK_USERS: User[] = [
    { id: 'USR-001', name: 'أحمد محمود', email: 'ahmed@example.com', role: 'Customer', phone: '01012345678', createdAt: '2024-01-15' },
    { id: 'USR-002', name: 'فاطمة علي', email: 'fatma@example.com', role: 'Customer', phone: '01112345678', createdAt: '2024-02-10' },
    { id: 'USR-003', name: 'سارة إبراهيم', email: 'sara@example.com', role: 'Customer', phone: '01212345678', createdAt: '2024-03-05' },
    { id: 'USR-100', name: 'حمزة هلال', email: 'admin@hdl.com', role: 'Admin', phone: '01065129523', createdAt: '2023-12-01' },
];

export const WHATSAPP_NUMBER = '201065129523';
