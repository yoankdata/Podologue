import { Microscope, Footprints, Activity, Baby, ShieldCheck, Ruler } from 'lucide-react'

export const SOINS = [
    {
        slug: 'pedicurie',
        title: 'Soins de Pédicurie',
        shortDescription: 'Traitement des affections de la peau et des ongles.',
        fullDescription: 'Le soin de pédicurie vise à traiter les affections de la peau et des ongles du pied. Il s\'agit d\'un acte médical réalisé dans des conditions d\'hygiène strictes (instruments stérilisés).',
        icon: Microscope,
        details: [
            'Hyperkératoses : Durillons, cors, callosités.',
            'Affections unguéales : Ongles incarnés, mycoses, hématomes sous-unguéaux.',
            'Dermatologie : Verrues plantaires, phlyctènes (ampoules).',
            'Hydratation : Soin des crevasses talonnières.'
        ],
        faq: 'Le soin se déroule au cabinet, dans un fauteuil médical adapté. La séance dure environ 30 à 45 minutes.'
    },
    {
        slug: 'podologie',
        title: 'Podologie & Semelles',
        shortDescription: 'Bilan clinique et conception d\'orthèses sur-mesure.',
        fullDescription: 'La podologie s\'intéresse à la structure et au fonctionnement du pied. À la suite d\'un examen clinique complet, des semelles orthopédiques (orthèses plantaires) peuvent être réalisées sur-mesure pour corriger, compenser ou soulager les troubles statiques et dynamiques.',
        icon: Footprints,
        details: [
            'Analyse Statique : Étude des appuis en charge.',
            'Analyse Dynamique : Observation de la marche et du déroulé du pas.',
            'Prise d\'empreintes : Moulage pour une adaptation parfaite.',
            'Types de semelles : Thermoformées (confort) ou Classiques (finesse).'
        ],
        faq: 'Un bilan complet est nécessaire avant toute réalisation de semelles. Pensez à apporter vos chaussures du quotidien et de sport.'
    },
    {
        slug: 'sport',
        title: 'Podologie du Sport',
        shortDescription: 'Prévention et traitement des blessures du sportif.',
        fullDescription: 'Le pied est l\'outil principal du sportif. Une douleur ou un déséquilibre peut entraîner des blessures en chaîne. La consultation vise à optimiser la foulée et prévenir les pathologies.',
        icon: Activity,
        details: [
            'Syndrome de l\'essuie-glace (TFL).',
            'Périostites tibiales.',
            'Tendinopathies achiléennes.',
            'Aponévrosites plantaires.'
        ],
        faq: 'Apportez vos chaussures de sport (running, crampons, etc.) pour une analyse spécifique de l\'usure.'
    },
    {
        slug: 'posturologie',
        title: 'Posturologie',
        shortDescription: 'Bilan postural global pour l\'équilibre du corps.',
        fullDescription: 'La posturologie étudie les mécanismes de gestion de l\'équilibre. Le pied est un capteur essentiel de la posture. Un déséquilibre podal peut retentir sur l\'ensemble du squelette.',
        icon: Ruler,
        details: [
            'Reprogrammation de l\'entrée podale.',
            'Soulagement des douleurs chroniques (dos, cervicales).',
            'Amélioration de la stabilité et de l\'ancrage.'
        ],
        faq: 'Le bilan postural dure environ 45 minutes et inclut des tests cliniques spécifiques.'
    },
    {
        slug: 'enfant',
        title: 'Podologie de l\'Enfant',
        shortDescription: 'Suivi de la croissance et des troubles de la marche.',
        fullDescription: 'La croissance du pied de l\'enfant demande une surveillance adaptée. Il est important de distinguer les variations physiologiques normales des troubles nécessitant une correction.',
        icon: Baby,
        details: [
            'Pied plat valgus sévère.',
            'Troubles de la marche (chutes fréquentes).',
            'Usure asymétrique des chaussures.',
            'Douleurs à l\'activité (maladie de Sever).'
        ],
        faq: 'Une consultation est conseillée dès l\'âge de 4-5 ans si vous observez une démarche particulière ou une usure anormale.'
    },
    {
        slug: 'diabetique',
        title: 'Pied Diabétique (POD)',
        shortDescription: 'Soins de prévention et de gradation pour diabétiques.',
        fullDescription: 'Le diabète nécessite une vigilance accrue. La neuropathie et l\'artériopathie peuvent diminuer la sensibilité et la cicatrisation. Le cabinet assure le suivi préventif.',
        icon: ShieldCheck,
        details: [
            'Soins de gradation (grade 0 à 3).',
            'Éducation thérapeutique et conseils de chaussage.',
            'Vérification de la sensibilité (monofilament).'
        ],
        faq: 'Sur prescription médicale, les soins de prévention pour les grades 2 et 3 sont pris en charge à 100% (POD).'
    },
    {
        slug: 'appareillages',
        title: 'Appareillages (Orthoplasties)',
        shortDescription: 'Petits appareillages pour protéger ou corriger les orteils.',
        fullDescription: 'Les orthoplasties sont des orthèses d\'orteils réalisées sur mesure en silicone. Elles permettent de protéger une zone de frottement ou de corriger une déformation.',
        icon: Microscope, // Re-using microscope or generic icon, could swap for specialized one
        details: [
            'Orthoplasties protectrices (cors, oeils de perdrix).',
            'Orthoplasties correctrices (griffes d\'orteils).',
            'Orthonyxies (correction de la courbure de l\'ongle).'
        ],
        faq: 'Les appareillages sont amovibles, lavables et durables dans le temps.'
    }
]
