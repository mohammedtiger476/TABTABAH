// --- إدارة التنقل بين أقسام الصفحة ---
const btns = document.querySelectorAll(".home .btns button");
const sec = document.querySelectorAll(".sec");

btns.forEach((e, i) => {
  e.addEventListener("click", () => {
    sec.forEach((el) => {
      el.setAttribute("hidden", "true");
    });
    const homeElem = document.querySelector(".home");
    if (homeElem) homeElem.setAttribute("hidden", "true");
    if (sec[i]) sec[i].removeAttribute("hidden");
  });
});

// --- قائمة الاقتباسات ---
let qots = [
  [
    "قال النبي - صلى الله عليه وسلم - : يقول الله تعالى : ( أنا عند ظن عبدي بي ، وأنا معه إذا ذكرني ، فإن ذكرني في نفسه ذكرته في نفسي ، وإن ذكرني في ملإ ذكرته في ملإ خير منهم ، وإن تقرب إلي بشبر تقربت إليه ذراعا ، وإن تقرب إلي ذراعا تقربت إليه باعا ، وإن أتاني يمشي أتيته هرولة )",
    "{ وإذا سألك عبادي عني فإني قريب أجيب دعوة الداع إذا دعان فليستجيبوا لي وليؤمنوا بي لعلهم يرشدون }",
    "وأخبر النبي - صلى الله عليه وسلم - أن ( أقرب ما يكون العبد من ربه وهو ساجد فأكثروا الدعاء )",
    "من صَبَرَ ظَفَرْ , اصبري 🤍",
    "لَا تَدۡرِی لَعَلَّ ٱللَّهَ یُحۡدِثُ بَعۡدَ ذَٰلِكَ أَمۡرًا",
    "{ وَٱلَّذِینَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ لَا نُكَلِّفُ نَفۡسًا إِلَّا وُسۡعَهَاۤ أُو۟لَـٰۤىِٕكَ أَصۡحَـٰبُ ٱلۡجَنَّةِۖ هُمۡ فِیهَا خَـٰلِدُونَ }",
    "{ سَابِقُوۤا۟ إِلَىٰ مَغۡفِرَةٍ مِّن رَّبِّكُمۡ وَجَنَّةٍ عَرۡضُهَا كَعَرۡضِ ٱلسَّمَاۤءِ وَٱلۡأَرۡضِ أُعِدَّتۡ لِلَّذِینَ ءَامَنُوا۟ بِٱللَّهِ وَرُسُلِهِۦۚ ذَٰلِكَ فَضۡلُ ٱللَّهِ یُؤۡتِیهِ مَن یَشَاۤءُۚ وَٱللَّهُ ذُو ٱلۡفَضۡلِ ٱلۡعَظِیمِ }",
    "{ وَجَزَىٰهُم بِمَا صَبَرُوا۟ جَنَّةً وَحَرِیرًا }",
    "{ وَٱسۡتَعِینُوا۟ بِٱالصَّبۡرِ وَٱالصَّلَوٰةِۚ وَإِنَّهَا لَكَبِيرَةٌ إِلَّا عَلَى ٱلۡخَـٰشِعِينَ }",
    "{ إِلَّا ٱلَّذِینَ صَبَرُوا۟ وَعَمِلُوا۟ ٱلصَّـٰلِحَـٰتِ أُو۟لَـٰۤىِٕكَ لَهُم مَّغۡفِرَةٌ وَأَجۡرٌ كَبِیرٌ }",
    "{ وَٱصۡبِرۡ فَإِنَّ ٱللَّهَ لَا یُضِیعُ أَجۡرَ ٱلۡمُحۡسِنِینَ }",
    "{ مَا عِندَكُمۡ یَنفَدُ وَمَا عِندَ ٱللَّهِ بَاقٍۗ وَلَنَجۡزِیَنَّ ٱلَّذِینَ صَبَرُوۤا۟ أَجۡرَهُم بِأَحۡسَنِ مَا كَانُوا۟ یَعۡمَلُونَ }",
    "{ فَٱصۡبِرۡ عَلَىٰ مَا یَقُولُونَ وَسَبِّحۡ بِحَمۡدِ رَبِّكَ قَبۡلَ طُلُوعِ ٱلشَّمۡسِ وَقَبۡلَ غُرُوبِهَاۖ وَمِنۡ ءَانَاۤىِٕ ٱلَّیۡلِ فَسَبِّحۡ وَأَطۡرَافَ ٱلنَّهَارِ لَعَلَّكَ تَرۡضَىٰ }",
    "{ وَلَمَن صَبَرَ وَغَفَرَ إِنَّ ذَٰلِكَ لَمِنۡ عَزۡمِ ٱلۡأُمُورِ }",
    "{ فَٱصۡبِرۡ عَلَىٰ مَا یَقُولُونَ وَسَبِّحۡ بِحَمۡدِ رَبِّكَ قَبۡلَ طُلُوعِ ٱلشَّمۡسِ وَقَبۡلَ ٱلۡغُرُوبِ }",
    "{ وَجَزَىٰهُم بِمَا صَبَرُوا۟ جَنَّةً وَحَرِیرًا }",
    "يقول النبي صلى الله عليه وسلم: ما يصيب المسلم من نصب، ولا وصب، ولا هم، ولا حزن، ولا أذى، ولا غم حتى الشوكة يشاكها، إلا كفر الله بها من خطاياه",
    "وعن النبي صلى الله عليه وسلم قال: عجبا لأمر المؤمن، إن أمره كله خير، وليس ذاك لأحد إلا للمؤمن، إن أصابته سراء شكر فكان خيرا له، وإن أصابته ضراء صبر، فكان خيرا له",
    "قال عليه أفضل الصلاة والسلام : لا يتمنى أحدكم الموت لضر أصابه، إما محسنا فلعله أن يزداد خيرا، وإما مسيئا فلعله أن يستعتب",
    "{ وَلَسَوۡفَ یُعۡطِیكَ رَبُّكَ فَتَرۡضَىٰۤ }"
  ],
  [
    "سَيَهْبِطُ غِيَاثُ الرَّحْمَنِ عَلَى صَدْرِكَ، فَيَطْرُدُ ضِيقًا أَعْجَزَ الخَلْقَ عَنْ مُدَاوَاتِهِ",
    "سَيَأْتِيكَ غِيَاثُ اللَّطِيفِ فِي مِيقَاتِهِ المَكْتُوبِ، لِيَنْتَشِلَكَ مِنْ غَيَاهِبِ الحُزْنِ الطَّوِيلِ",
    "سَتُمِيطُ بَشَائِرُ الغَدِ لِثَامَ الأَسَى عَنْ قَلْبِكَ، حِينَمَا يَتَنَزَّلُ غِيَاثُ المَوْلَى لِيَجْبُرَكَ",
    "سَوْفَ يَنْهَمِرُ غِيَاثُ الكَرِيمِ عَلَى أَيَّامِكَ، فَتُورِقُ رُوحُكَ بَعْدَ قَحْطٍ وَذُبُولٍ",
    "سَيَسْقِي غِيَاثُ الغَيْبِ تِلْكَ النَّدَبَاتِ الخَفِيَّةَ، حَتَّى تَسْتَحِيلَ رِضًا وَأَمَانًا وَسَكِينَةً",
    "سَتَرَى كَيْفَ يَجُورُ غِيَاثُ اللَّهِ عَلَى ظُلْمَةِ كَرْبِكَ، لِيَقْلِبَ لَيْلَكَ النَّاحِبَ فَرَحًا مُبِينًا",
    "لَنْ يَذْهَبَ نِدَاؤُكَ: \"يَا غِيَاثَ المُسْتَغِيثِينَ\" سُدًى، بَلْ سَتَعْقِبُهُ دَهْشَةُ جَبْرٍ تَفُوقُ الوَصْفَ",
    "سَيَفْتَحُ الرَّبُّ أَبْوَابَ سَمَائِهِ لِدُعَائِكَ، وَيَسُوقُ إِلَى خَاطِرِكَ المَكْسُورِ غِيَاثًا يُنْسِيكَ مَا فَاتَ"
  ]
];

let tiger = qots[0].concat(qots[1], [
  "وَلَيَغْلِبَنَّ لُطْفُهُ خَوْفِي",
  "وَلَيَقْهَرَنَّ نَدَاهُ جَفَافِي",
  "وَلَيَمْحُوَنَّ نُورُهُ ظُلْمَتِي",
  "وَلَيَشْفِيَنَّ بَلْسَمُهُ جُرْحِي",
  "وَلَيَكْسِرَنَّ صَبْرِي قُيُودِي",
  "وَلَيَهْزِمَنَّ عَبِيرُهُ بَأْسِي",
  "وَلَيُذِيبَنَّ دِفْؤُهُ جَلِيدِي",
  "وَلَيَفْجُرَنَّ يُسْرُهُ عُسْرِي",
  "وَلَيَطْرُدَنَّ فَجْرُهُ لَيْلِي",
  "وَلَيَغْمُرَنَّ فَرَجُهُ ضِيقِي",
  "كُلَّمَا اشْتَدَّتِ الظُّلْمَةُ، أَشْرَقَ نُورُ الأَمَلِ",
  "كُلَّمَا أُغْلِقَ بَابٌ، فَتَحَ اللَّطِيفُ أَبْوَابًا",
  "كُلَّمَا ضَاقَتِ الأَرْضُ، اتَّسَعَتِ السَّمَاءُ دُعَاءً",
  "مَا أَجْمَلَ الفَجْرَ بَعْدَ لَيْلٍ طَوِيلٍ",
  "مَا أَعْذَبَ الفَرَجَ بَعْدَ صَبْرٍ جَمِيلٍ",
  "مَا أَحْلَى الِابْتِسَامَةَ بَعْدَ دَمْعَةٍ عَابِرَةٍ",
  "لَنْ يَغْلِبَ عُسْرٌ يُسْرَيْنِ، وَفِي الغَيْبِ خَبَايَا جَمِيلَةٌ",
  "لَنْ تَذْبُلَ رُوحٌ يَسْقِيهَا التَّفَاؤُلُ، وَفِي القَلْبِ نَبْضُ يَقِينٍ",
  "لَنْ يَدُومَ الجَفَافُ، وَفِي السَّحَابِ مَطَرٌ قَادِمٌ",
  "سَيَتَبَسَّمُ الزَّمَانُ لِي، بَعْدَ دَهْرٍ مِنَ النَّحِيبِ",
  "سَتُمْطِرُ سَمَائِي فَرَحًا، بَعْدَ عُمُرٍ مِنَ الِانْتِظَارِ",
  "سَيَسْتَيْقِظُ قَلْبِي عَلَى بِشَارَةٍ، بَعْدَ لَيَالٍ مِنَ السُّهَادِ",
  "سَوْفَ تَشْرَبُ رُوحِي غَيْثَ السُّرُورِ، لِتُزْهِرَ بَعْدَ ذُبُولٍ طَوِيلٍ",
  "سَيَنْفُضُ القَلْبُ غُبَارَ الأَسَى، لِيَرْقُصَ عَلَى أَنْغَامِ الحَيَاةِ",
  "سَتَنْقَشِعُ غُيُومُ الكَآبَةِ، لِتُشْرِقَ شَمْسُ البَهْجَةِ فِي صَدْرِي",
  "لَنْ يَذْهَبَ طُولُ البُكَاءِ سُدًى، بَلْ سَيَكُونُ مُمَهِّدًا لِعَهْدِ الِابْتِسَامِ",
  "لَنْ يَدُومَ عُمْقُ الجُرْحِ، بَلْ سَيَتَدَفَّقُ طُمَأْنِينَةً وَسَلَامًا",
  "سَتَتَحَوَّلُ خَيْبَاتُ المَاضِي كُلُّهَا، لِتُصْبِحَ مِفْتَاحًا لِمَسَرَّاتِ الآتِي",
  "سَيَكُونُ العِوَضُ جَسِيمًا، بِحَجْمِ الصَّبْرِ الطَّوِيلِ",
  "سَيَأْتِي الجَبْرُ مُدَوِّيًا، لِيَمْحُوَ أَنِين السِّنِينَ",
  "سَيَفُوقُ العَطَاءُ القَادِمُ، كُلَّ دَمْعَةٍ سَقَطَتْ فِي الخَفَاءِ",
  "سَتَمْسَحُ يَدُ العِوَضِ الجَمِيلِ، كُلَّ نَدْبَةٍ تَرَكَهَا الخِذْلَانُ",
  "سَيَحْضُنُ الفَرَجُ القَادِمُ رُوحِي، حَتَّى تَنْسَى أَيَّامَ الشَّتَاتِ",
  "سَتُدَاوِي بَشَائِرُ الغَدِ، كُلَّ كَسْرٍ عَمِيقٍ فِي الوِجْدَانِ",
  "سَيُبَدِّلُ اللَّطِيفُ حِرْمَانَ المَاضِي، بِأَفْرَاحٍ لَا تَنْتَهِي",
  "سَتَتَحَوَّلُ غُصَّةُ الصَّدْرِ، إِلَى سَجْدَةِ شُكْرٍ بَاكِيَةٍ",
  "سَيُزْهِرُ الخَرِيفُ الَّذِي هَصَرَ قَلْبِي, لِيُصْبِحَ رَبِيعًا دَائِمًا",
  "سَيَكُونُ العِوَضُ هُوَ تِلْكَ الطُّمَأْنِينَةَ الَّتِي تَجْعَلُكَ تَنْظُرُ لِمَاضِيكَ الشَّاقِّ وتَبْتَسِمُ",
  "سَيَأْتِي العِوَضُ كَإِجَابَةٍ صَامِتَةٍ عَنْ كُلِّ \"لِمَاذَا\" مَزَّقَتْ صَدْرَكَ فِي اللَّيَالِي المُظْلِمَةِ",
  "سَتَكْتَشِفُ أَنَّ العِوَضَ الحَقِيقِيَّ هُوَ اتِّسَاعُ قَلْبِكَ، الَّذِي مَا كَانَ لِيَتَّسِعَ لَوْلَا عُمْقُ الوجَعِ",
  "سَتَرْتَفِعُ بِنَاءَاتُ رُوحِكَ العَالِيَةِ، مُسْتَنِدَةً عَلَى الحِجَارَةِ الَّتِي تَعَثَّرْتَ بِهَا أَمْسِ",
  "سَتَجْمَعُ يَدُ اللَّطِيفِ شَتَاتَ نَفْسِكَ، لِتُعِيدَ صِيَاغَتَكَ بِشَكْلٍ أَبْهَى وَأَقْوَى",
  "لَنْ تُغَادِرَ هَذِهِ الحَيَاةَ، حَتَّى تَرَى كَيْفَ نَبَتَتْ أَزْهَارُ الرِّضَا فِي المَوَاضِعِ الَّتِي نَزَفْتَ فِيهَا",
  "سَيُعِيدُ الوجُودُ تَرْتِيبَ نَفْسِهِ لِأَجْلِكَ، لِيَسُوقَ إِلَيْكَ دَهْشَةً تَنْسَى مَعَهَا كُلَّ خَسَارَةٍ",
  "سَتَفْهَمُ غَدًا أَنَّ اللَّهَ لَمْ يَحْرِمْكَ لِيُعَذِّبَكَ، بَلْ لِيُفَرِّغَ يَدَيْكَ لِعَطَاءٍ أَعْظَمَ لَمْ تَكُنْ لِتَحْتَمِلَهُ",
  "سَيَتَجَلَّى اسْمُهُ \"الجَبَّارُ\" فِي قَلْبِكَ، فَيُلْحِمُ كُسُورًا ظَنَنْتَهَا لَا تَلْتَئِمُ",
  "سَيُفَاجِئُكَ \"الوَهَّابُ\" بِعَطَاءٍ يَنْتَزِعُكَ مِنْ ذَاكِرَةِ الحِرْمَانِ، كَأَنَّكَ لَمْ تَحْزَنْ قَطُّ",
  "سَتَرَى كَيْفَ كَانَ \"اللَّطِيفُ\" يَغْزِلُ لَكَ ثَوْبَ الفَرَجِ، مِنْ خُيُوطِ المِحْنَةِ الَّتِي أَبْكَتْكَ",
  "لَنْ يَطُولَ سُجُودُكَ البَاكِي، بَلْ سَتَعْقِبُهُ سَجْدَةُ شُكْرٍ تَفِيضُ لَهَا العُيُونُ فَرَحًا",
  "سَيَكُونُ غَيْثُ الغَيْبِ أَغْزَرَ مِنْ كُلِّ دَمْعَةٍ حَبَسْتَهَا عَنِ الخَلْقِ، وَبَثِثْتَهَا إِلَى الخَالِقِ",  "سَتَبْرَأُ كُلُّ جِرَاحِ الرُّوحِ، حِينَمَا يَأْذَنُ اللَّهُ لِأَمْرِهِ \"كُنْ\" أَنْ يَحْتَضِنَ شَتَاتَكَ",
  "سَيُعْطِيكَ رَبُّكَ فِي قَابِلِ الأَيَّامِ عَطَاءً، لَا تَمْلِكُ مَعَهُ إِلَّا أَنْ تَرْضَى وتَعْجَبَ",
  "سَتَعْلَمُ غَدًا أَنَّ هَذَا الضِّيقَ المُرَّ، مَا كَانَ إِلَّا مَخَاضًا لِمِيلَادِ نِعْمَةٍ تَسُرُّ النَّاظِرِينَ",
  "سَيَمْسَحُ اللَّهُ عَلَى خَاطِرِكَ المَكْسُورِ، بِيُسْرٍ يَنْسِخُ مَرَارَةَ العُسْرِ مِنْ وِجْدَانِكَ كُلِّيَّةً",
  "سَيَكْشِفُ اللَّهُ لَكَ حِكْمَةَ المَنْعِ، فَتَخِرُّ سَاجِدًا بَاكِيًا تَبْتَهِلُ شُكْرًا عَلَى مَا ظَنَنْتَهُ حِرْمَانًا",
  "سَيُرِيكَ اللَّهُ كَيْفَ نَجَّاكَ بِتِلْكَ الغُصَّةِ مِنْ هَلَاكٍ مُحَقَّقٍ، لِيَسُوقَكَ إِلَى بَرِّ الأَمَانِ",
  "سَتَبْكِي غَدًا مِنْ دَهْشَةِ الجَبْرِ، كَمَا بَكَيْتَ أَمْسِ مِنْ وَجَعِ الكَسْرِ، وَاللَّهُ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
  "مَا أَطَالَ اللَّهُ عَلَيْكَي لَيْلَ الِانْتِظَارِ، إِلَّا لِيُعَظِّمَ لَكِ الأَجْرَ، وَيُفَاجِئَكِ بِفَجْرٍ لَا يَغِيبُ",
  "سَتَعْلَمُ أَنَّ الخَوِيقَ الَّذِي تَرَكَهُ الحُزْنُ فِي صَدْرِكَ، كَانَ مَسَاحَةً يَحْفِرُهَا القَدَرُ لِتَتَّسِعَ لِعَظِيمِ العَطَاءِ",
  "سَيُجْبِي اللَّهُ صَبْرَكَ هَذَا تَمْكِينًا وَفَرَجًا، كَمَا جَبَى صَبْرَ يُوسُفَ بَعْدَ ظُلْمَةِ الجُبِّ وَأَلَمِ السِّجْنِ",
  "سَتَهُبُّ نَسَائِمُ الرَّحْمَةِ عَلَى جِهَاتِكَ الأَرْبَعِ، فَتُطْفِئُ حَرِيقًا أَوْقَدَهُ الخِذْلَانُ فِي حَنَايَاكَ",
  "سَيَمْلَأُ السَّلَامُ الرَّبَّانِيُّ زَوَايَا نَفْسِكَ، حَتَّى تَصِيرَ المِحَنُ المَاضِيَةُ كَأَنَّهَا حُلُمٌ عَابِرٌ فِي لَيْلَةٍ شَاتِيَةٍ",
  "سَتُشْرِقُ أَنْوَارُ الرِّضَا فِي عَيْنَيْكَ، حِينَمَا تَرَى كَيْفَ رَتَّبَ اللَّهُ أَمَانِيَّكَ الَّتِي ظَنَنْتَهَا قَدْ ضَاعَتْ",
  "سَيَنْتَشِلُكَ اللَّطِيفُ مِنْ قَاعِ المَضِيقِ، لِيَضَعَكَ عَلَى قِمَمِ الفَرَحِ الَّتِي لَمْ تَحْلُمْ بِهَا قَطُّ",
  "سَتَتَهَادَى بَشَائِرُ الرَّحْمَنِ إِلَى صَدْرِكَ، فَتَغْسِلُ مَوَاضِعَ الضَّيْمِ وَتَمْحُو أَثَرَ العَنَاءِ",
  "سَيَأْتِيكَ الغَوْثُ الرَّبَّانِيُّ فِي لَحْظَةٍ ظَنَنْتَ فِيهَا أَنَّ المَنَافِذَ كُلَّهَا قَدْ أُغْلِقَتْ",
  "سَتَسْتَحْيِي مِنْ حُزْنِكَ المَاضِي، حِينَمَا تَرَى كَيْفَ سَاقَ اللَّهُ لَكَ الأَمَانِيَ مُسَوَّمَةً خَاضِعَةً",
  "سَتَعْجَبُ كَيْفَ ضَاقَ صَدْرُكَ يَوْمًا، وَأَنْتَ تَتَقَلَّبُ فِي نَعِيمِ العِوَضِ الَّذِي خَبَّأَهُ اللَّهُ لَكَ",
  "سَيُغْرِقُكَ السَّتَّارُ بِفَضْلِهِ، حَتَّى تَظُنَّ أَنَّكَ لَمْ تَذُقْ فِي هَذِهِ الدُّنْيَا مُرًّا أَبَدًا",
  "لِكُلِّ غُصَّةٍ فِي الصَّدْرِ مِيقَاتٌ تَنْتَهِي فِيهِ، لِيَحُلَّ مَحَلَّهَا رَيْحَانُ الطُّمَأْنِينَةِ وَالسَّلَامِ",
  "سَيَسُوقُ اللَّهُ إِلَيْكَ دَهْشَةً تَقْطَعُ حَبْلَ الظُّنُونِ، وَتُعْلِنُ نِهَايَةَ عَهْدِ الِانْكِسَارِ"
]);

qots.push(tiger);

const btn_sec = document.querySelectorAll(".btn_sec");
const save_content = document.getElementById("save_content");

// --- نظام الـ 24 ساعة ---
const twentyFourHours = 24 * 60 * 60 * 1000;

btn_sec.forEach((e, i) => {
  e.addEventListener("click", () => {
    const lastClickTime = localStorage.getItem("clickTime");
    const now = new Date().getTime();

    if (lastClickTime && (now - lastClickTime < twentyFourHours)) {
      const alertBox = document.getElementById("box_heart");
      if (alertBox) {
        alertBox.style.opacity = "1";
        setTimeout(() => {
          alertBox.style.opacity = "0";
        }, 3000);
      }
      return;
    }

    let rand = Math.floor(Math.random() * qots[i].length);
    sec.forEach((el) => {
      el.setAttribute("hidden", "true");
    });
    
    const saveElem = document.getElementById("save");
    if (saveElem) saveElem.removeAttribute("hidden");
    if (save_content) save_content.innerHTML = qots[i][rand];
    
    localStorage.setItem("clickTime", now);
    localStorage.setItem("qo", qots[i][rand]);
  });
});

if (localStorage.getItem("qo")) {
  if (save_content) save_content.innerHTML = localStorage.getItem("qo");
}

const next = document.getElementById("next");
const castum_content = document.getElementById("castum_content");
const castum = document.getElementById("castum");

if (next) {
  next.addEventListener("click", () => {
    if (next.parentElement && next.parentElement.parentElement && next.parentElement.parentElement.parentElement) {
      next.parentElement.parentElement.parentElement.setAttribute("hidden", "true");
    }
    if (castum) castum.removeAttribute("hidden");
    if (castum_content && save_content) castum_content.innerHTML = save_content.innerHTML;
  });
}

if (localStorage.getItem("qo") && castum_content) {
  castum_content.innerHTML = localStorage.getItem("qo");
}

const closeBtn = document.getElementById("close");
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    const itemsElem = document.getElementById("items");
    if (itemsElem) itemsElem.style.display = "none";
  });
}

// --- ثيم النهار والليل (Dark / Light Mode) ---
const btn_mode = document.getElementById("btn_mode");
const back_mode = document.getElementById("back_mode");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
let check = true;

if (btn_mode) {
  btn_mode.addEventListener("click", () => {
    if (check) {
      if (back_mode) back_mode.style.translate = "40px 0";
      if (sun) sun.style.color = "#e5f1fb";
      if (moon) moon.style.color = "#2f4e6b";
      document.body.style.color = "#e5f1fb";
      
      document.querySelectorAll(".btns button").forEach((e) => {
        e.style.background = "#2f4e6b";
        e.style.color = "white";
      });

      const footer = document.querySelector("footer");
      const mainImg = document.querySelector(".main-img");
      const homeSec = document.querySelector(".home");
      const shSec = document.querySelector(".SH-A");
      const castumSec = document.getElementById("castum");
      const imgBox = document.getElementById("image");

      if (footer) footer.style.background = "#2f4e6b";
      if (mainImg) mainImg.style.background = "#2f4e6b";
      if (homeSec) homeSec.style.backgroundImage = 'url("../assets/images/Gemini_Generated_Image_ounp8sounp8sounp.jfif")';
      if (shSec) shSec.style.backgroundImage = 'url("../assets/images/Gemini_Generated_Image_ounp8sounp8sounp.jfif")';
      if (castumSec) castumSec.style.background = "#2f4e6b";
      if (imgBox) imgBox.style.boxShadow = "0 3px 5px #99a8b654, 0 0 10px #a4b3c254 inset";

      check = false;
    } else {
      if (back_mode) back_mode.style.translate = "0 0";
      if (sun) sun.style.color = "#2f4e6b";
      if (moon) moon.style.color = "#e5f1fb";
      document.body.style.color = "#2f4e6b";

      document.querySelectorAll(".btns button").forEach((e) => {
        e.style.background = "#e5f1fb56";
        e.style.color = "#2f4e6b";
      });

      const footer = document.querySelector("footer");
      const mainImg = document.querySelector(".main-img");
      const homeSec = document.querySelector(".home");
      const shSec = document.querySelector(".SH-A");
      const castumSec = document.getElementById("castum");
      const imgBox = document.getElementById("image");

      if (footer) footer.style.background = "#e5f1fb7d";
      if (mainImg) mainImg.style.background = "#e5f1fb7d";
      if (homeSec) homeSec.style.backgroundImage = 'url("../assets/images/SH_A\\ (2).jpg")';
      if (shSec) shSec.style.backgroundImage = 'url("../assets/images/SH_A\\ (2).jpg")';
      if (castumSec) castumSec.style.background = "#e5f1fb";
      if (imgBox) imgBox.style.boxShadow = "0 3px 5px #2f4e6b54, 0 0 5px black inset";

      check = true;
    }
  });
}

// --- أدوات التخصيص لتعديل النص واسم الزاوية معاً ---
// تحديد اسم الزاوية أينما كان
const cornerNameDisplay = document.querySelector("#image span, #image .corner-name, #corner-name-display");

// أزرار التخصيص
const boldBtn = document.getElementById("bold-btn") || document.querySelectorAll(".castums button")[2];
const italicBtn = document.getElementById("italic-btn") || document.querySelectorAll(".castums button")[3];

// 1. جعل الخط عريض (Bold) للنصين
let check_B = true;
if (boldBtn) {
  boldBtn.addEventListener("click", () => {
    if (check_B) {
      if (castum_content) castum_content.style.fontWeight = "900";
      if (cornerNameDisplay) cornerNameDisplay.style.fontWeight = "900";
      check_B = false;
    } else {
      if (castum_content) castum_content.style.fontWeight = "300";
      if (cornerNameDisplay) cornerNameDisplay.style.fontWeight = "300";
      check_B = true;
    }
  });
}

// 2. جعل الخط مائل (Italic) للنصين
let check_I = true;
if (italicBtn) {
  italicBtn.addEventListener("click", () => {
    if (check_I) {
      if (castum_content) castum_content.style.fontStyle = "oblique";
      if (cornerNameDisplay) cornerNameDisplay.style.fontStyle = "oblique";
      check_I = false;
    } else {
      if (castum_content) castum_content.style.fontStyle = "normal";
      if (cornerNameDisplay) cornerNameDisplay.style.fontStyle = "normal";
      check_I = true;
    }
  });
}

// 3. رفع صورة خلفية مخصصة
const imageUploader = document.getElementById('image-uploader');
if (imageUploader) {
  imageUploader.addEventListener('change', function (event) {
    if (event.target.files && event.target.files[0]) {
      let imagePath = URL.createObjectURL(event.target.files[0]);
      const imgBox = document.getElementById('image');
      if (imgBox) imgBox.style.backgroundImage = `url(${imagePath})`;
    }
  });
}

// 4. تغيير لون الخط للنصين سوا
const color_current = document.getElementById("color-current");
if (color_current) {
  color_current.addEventListener("input", (e) => {
    if (castum_content) castum_content.style.color = e.target.value;
    if (cornerNameDisplay) cornerNameDisplay.style.color = e.target.value;
  });
}

// 5. تغيير حجم الخط بحجم متناسق للنصين
const font_size = document.getElementById("size");
const font_sizee = document.getElementById("font_sizee");

if (font_size && font_sizee) {
  font_size.addEventListener("click", () => {
    font_sizee.style.display = "inline";
  });

  font_sizee.addEventListener("blur", () => {
    font_sizee.style.display = "none";
  });

  font_sizee.addEventListener("input", (e) => {
    const val = e.target.value;
    if (castum_content) castum_content.style.fontSize = `${val}px`;
    if (cornerNameDisplay) cornerNameDisplay.style.fontSize = `${Math.max(10, val * 0.45)}px`;
  });
}

// --- زر القلب مع تنبيه البوب آب ---
const heart = document.getElementById("heart");
if (heart) {
  heart.addEventListener("click", () => {
    const alertBox = document.getElementById("box_heart");
    if (alertBox) {
      alertBox.style.opacity = "1";
      setTimeout(() => {
        alertBox.style.opacity = "0";
      }, 3000);
    }
  });
}

// --- تنزيل الصورة بأعلى جودة وبدون هوامش زائفة ---
const downloadBtn = document.getElementById("download-btn");
if (downloadBtn) {
  downloadBtn.addEventListener("click", () => {
    const originalImageElement = document.getElementById("image");
    if (!originalImageElement) return;

    if (typeof domtoimage === "undefined") {
      alert("جاري تحميل مكتبة تنزيل الصور، يرجى المحاولة بعد لحظة...");
      return;
    }

    const originalStyle = originalImageElement.getAttribute('style') || '';

    originalImageElement.style.overflowY = "hidden";
    originalImageElement.style.margin = "0";

    domtoimage.toPng(originalImageElement, {
      quality: 0.95,
      style: {
        'transform': 'scale(1)',
        'transform-origin': 'top left',
        'margin': '0'
      }
    })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "tabtabah-quote.png";
      link.href = dataUrl;
      link.click();
      originalImageElement.setAttribute('style', originalStyle);
    })
    .catch((error) => {
      console.error("حدث خطأ أثناء حفظ الصورة:", error);
      originalImageElement.setAttribute('style', originalStyle);
    });
  });
}

