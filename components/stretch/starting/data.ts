import { RepetitionType, StretchExercise } from "@/models/stretch";

const generateDefaultRepetitions = () => {
    return [
        { type: RepetitionType.Bump, count: 10, text: 'Small gentle bumping movements into the stretch' },
        { type: RepetitionType.Hold, count: 10, text: 'Hold the stretch' },
        { type: RepetitionType.Bump, count: 10, text: 'Small gentle bumping movements into the stretch' },
        { type: RepetitionType.Hold, count: 20, text: 'Hold the stretch' },
        { type: RepetitionType.Bump, count: 10, text: 'Small gentle bumping movements into the stretch' },
        { type: RepetitionType.Hold, count: 30, text: 'Hold the stretch' },
    ];
}

const stretchExercises: StretchExercise[] = [
    { 
        id: 'shoulder-backbend',
        name: 'Shoulder Backbend',
        steps: [
            'Stand with your feet hip-width apart and your arms at your sides.',
            'Roll your shoulders back and down, squeezing your shoulder blades together.',
            'Interlace your fingers behind your back, with your palms facing inward.',
            'Slowly lift your arms up and away from your body, keeping your shoulders relaxed and your chest open.',
        ],
        repetitions: generateDefaultRepetitions(),
    },
    {
        id: 'spine-backbend',
        name: 'Spine Backbend',
        steps: [
            'Stand with your feet hip-width apart and your arms at your sides.',
            'Place your fingertips on you shoulder blades, with your elbows pointing forward.',
            'Lean back slightly while keeping your head neutral.',
        ],
        repetitions: generateDefaultRepetitions(),
    },
    {
        id: 'rear-hand-clasp',
        name: 'Rear Hand Clasp',
        steps: [
            'Grab a towel, short, or belt with one of your hands.',
            'Bring your hand behind your back/head.',
            'With the other hand, grab the other end as high as you can.',
            'Gently pull with the hand behind your back/head.',
            'Switch hands and repeat.',
        ],
        repetitions: generateDefaultRepetitions(),
    },
    {
        id: 'lying-cross',
        name: 'Lying Cross',
        steps: [
            'Start by lying on your stomach.',
            'Cross one arm under your body and reach as far as you can with the palm facing up.',
            'Place the other arm on the ground, palm down, and straighten it.',
            'Rest your forehead on the ground.',
        ],
        repetitions: [
            { type: RepetitionType.Hold, count: 30, text: 'Hold the stretch' },
        ],
    },
    {
        id: 'wrist-biceps-stretch',
        name: 'Wrist-Biceps Stretch',
        steps: [
            'Stand sideways to a wall.',
            'Place your arm straight on the wall with your palm facing the wall.',
            'While keeping your arm straight, rotate your upper body away from the wall.',
        ],
        repetitions: generateDefaultRepetitions(),
    },
    {
        id: 'one-leg-pike',
        name: 'One Leg Pike',
        steps: [
            'Place a chair in front of you.',
            'Stand on one leg and place the other leg on the chair.',
            'Bend forward at the hips while keeping your back, arms, and leg straight.',
            'Repeat on the other leg.',
        ],
        repetitions: generateDefaultRepetitions(),
    },
    {
        id: 'kneeling-lunge',
        name: 'Kneeling Lunge',
        steps: [
            'Put one knee on the ground and the other foot in front of you.',
            'Move the leg in front of you forward slowly as far as you can.',
            'Keep your back straight and upright.',
            'Repeat on the other leg.',
        ],
        repetitions: generateDefaultRepetitions(),
    },
    {
        id: 'pancake',
        name: 'Pancake',
        steps: [
            'Sit on the floor with your legs spread wide.',
            'Keep your back straight and your chest open.',
            'Lean forward as far as you can while keeping your back straight.',
        ],
        repetitions: generateDefaultRepetitions(),
    },
    {
        id: 'butterfly',
        name: 'Butterfly',
        steps: [
            'Sit on the floor with the soles of your feet together.',
            'Hold your feet with your hands.',
            'Move your knees to the ground as far as you can.',
            'If you can reach the ground with your knees, allow your body to lean forward.',
        ],
        repetitions: generateDefaultRepetitions(),
    },
    {
        id: 'calf-stretch',
        name: 'Calf Stretch',
        steps: [
            'Place a chair in front of you backwise.',
            'Hold the chair with both hands at the backrest.',
            'Place one foot back and try to keep the heel on the ground as far as you can.',
            'Repeat on the other leg.',
        ],
        repetitions: generateDefaultRepetitions(),
    }
];

export default stretchExercises;