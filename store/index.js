import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  subjects: [
    {
      id: 0,
      section: 'العناية بالأسنان',
      title:'خلطات تبييض الأسنان',
      head: 
          `تعدّ الأسنان البيضاء وسيلة تعكس الصحة، والأسنان البيضاء تمنح جمالًا وتألّقاً خاص لابتسامتك، وفي كثير من الأحيان نستعمل الفرشاة والمعجون بانتظام، لكننا لا نمتلك هذا اللون الأبيض الناصع، وإنّما تبقى أسناننا صفراء جيرية، فإذا كنت تحلم باسنان بيضاء اقرأ هذا الموضوع حيث ستجد مجموعة من الخطوات التي تساعد في ذلك.`,
      date: '5 يوليو 2020',
      source: 'موقع موضوع دوت كوم',
      latest: false
    },  
    {
      id: 1,
      section: 'العناية بالأسنان',
      title:'أسباب تساقط الأسنان',
      head: 
          `يتعرض كثيرون لفقدان سن أو ضرس لأسباب مختلفة كالإصابة ببعض الأمراض أو عدم الاهتمام بالأسنان.قال الدكتور كامل حسين كامل، استشاري جراحة الفم والوجه والفكين، إن أسباب تساقط الأسنان الإصابة بمرض السكري الذي ينتج عن مشكلات اللثة وبعض الأمراض التي تصيب اللثة وتسبب تساقط الأسنان والضروس.وأضاف «كامل» أنه من بين الأسباب التي تؤدي إلى تساقط الضروس والأسنان أيضًا التغيرات الهرمونية عند السيدات والناتجة عن الحمل مع عدم الاهمتام بنظافة الأسنان تسبب مشكلات كبيرة.
          `,
      date: '24 يونيه 2020',
      source: 'موقع 5 لصحتك',
      latest: true
    },
    {
      id: 2,
      section: 'العناية بالبشرة',
      title: 'علاج البشرة الدهنية',
      head: `البشرة الدهنية شائعة لدى المراهقين، والأشخاص المعرضين بشكلٍ خاص للبشرة الدهنية، والأشخاص الذين يعيشون في بيئةٍ رطبةٍ وحارة، ويمكن ملاحظة المسام الكبيرة، والبشرة اللامعة، وحب الشباب في هذا النوع من البشرة. فالدهون يفرزها الجسم للحفاظ على صحة البشرة لكن إفراز الدهون بشكلٍ زائد يؤدي إلى ظهور العيوب، وحب الشباب، وتوجد الكثير من الطرق للتقليل من الدهون باتباع استراتيجيات البشرة الصافية مثل المنظفات دون وصفة طبية، واللوشن بوصفة طبية، ومستحضرات التجميل العلاجية، وسنذكر لكم في هذا المقال علاجات البشرة الدهنية`,
      date: '19 يونيه 2020',
      source: 'موقع 5 لصحتك',
      latest: false
    },
    {
      id: 3,
      section: 'العناية بالبشرة',
      head: `خشونة وتشققات كعب القدم مشكلة مزعجة تؤرق كثيرون وتدفع البعض إلى نزع القشور، الأمر الذي قد يسبب التهابات جلدية أو يؤدي لتراكم الجراثيم.لكن ما هي أسباب خشونة وتشققات الكعب، وكيف يمكن التغلب عليها؟`,
      title: 'أسباب خشونة الكعبين',
      date: '29 يونيه 2020',
      source: 'موقع 5 لصحتك',
      latest: true
    },
    {
      id: 4,
      section: 'المنظفات و المطهرات',
      title:'طريقة عمل معقم لليدين',
      head: 
          `يعتبر معقم اليدين الذي يحتوي على نسبة كحول من 70% إلى 85% هو الأكثر فاعلية والأفضل ، ولكن يجب الحذر عند استخدام معقم اليدين كونه مادة قابلة للاشتعال ويجب عدم تركه في السيارة أو تحت أشعة الشمس مباشرةً`,
      date: '10 يوليو 2020',
      source: 'موقع خمسة لصحتك',
      latest: true
    },
    {
      id: 5,
      section: 'العناية بالشعر',
      title:'أطعمة تحارب الشعر الأبيض',
      head: 
          `عندما يتقدّم الإنسان في عمره، يُصبح أمراً طبيعياً أن يُلاحظ تغيّراً في لون شعره، ليُصبح بلونٍ أبيضٍ أو رماديّ، وتُعتبر صبغة الميلانين (بالإنجليزية: Melanin) هي السبب الرئيسي وراء هذا التغيير، حيث إنّ بصيلات الشعر تحتوي على كمياتٍ كبيرةٍ جداً من هذه الصبغة التي تُعطي الشعر لونه الحقيقي، ولكن كلّما تقدّم الشخص في عمره، تبدأ بصيلات شعره بفقد محتواها من تلك الصبغة، ممّا يؤدي إلى إيقاف تزويد الشعر بلونه الأصلي، ليحلّ محلّه اللون الأبيض، وبالإضافة إلى التقدّم في العمر، فإنّ هناك عوامل أخرى قد تتسبّب أيضاً في ظهور اللون الأبيض للشعر، وهناك العديد من الطرق التي تُعالج هذه المشكلة.`,
      date: '14 يوليو 2020',
      source: 'موقع موضوع دوت كوم',
      latest: false
    },
    {
      id: 6,
      section: 'أمراض و أعراض',
      title:'نقص فيتامين د',
      head: 
            `إن وظيفة فيتامين (د) الأساسية هي الحفاظ على توازن المعادن في الجسم، وبالأساس مستوى الكالسيوم والفوسفور.
            حيث يعزز فيتامين (د) عملية امتصاص المعادن في الأمعاء، ويمنع الخسارة المفرطة لهذه المعادن في الكلى، كما ويتحكم بدخول وخروج المعادن في العظام.
            بالإضافة إلى ذلك، تشير أبحاثٌ جديدة إلى أن لفيتامين (د) دورًا هامًّا في تنظيم عمليات نمو الخلايا، بما في ذلك قَمْع نمو الخلايا السرطانية وزيادة نشاط الجهاز المناعي.`,
      date: '07 يوليو 2020',
      source: 'قناة روسيا اليوم',
      latest: false
    },
    {
      id: 7,
      section: 'أمراض و أعراض',
      title:'فقر الدم',
      head: 
          `هو حالة طبية تتميز بعدم وجود كمية كافية من خلايا الدم الحمراء في الجسم لتنقل كمية كافية من الأكسجين إلى الأنسجة.
          الإنسان الذي يعاني من فقر الدم من المرجح أن يشعر بالتعب في أحيان متقاربة.
          يعرّف فقر الدّم على أنه هبوط في واحد أو أكثر من القياسات المتعلّقة بكريات الدّم الحمراء وهي:`,
      date: '10 يونيه 2020',
      source: 'موقع ويب طب',
      latest: true
    },
    {
      id: 8,
      section: 'أمراض و أعراض',
      title:'الصداع أسبابه وعلاجه',
      head: 
          `هناك العديد من أنواع الصداع المختلفة، ويمكن أن تختلف أسبابها وأعراضها، على الرغم من أن معظمها قصير العمر ونادرًا ما يكون مصدر قلق، إلا أن القدرة على التعرف على أي نوع من الصداع الذي يعاني منه الشخص يمكن أن يكون مؤشر للطريقة المثلى لعلاجه وما إذا كان يجب زيارة الطبيب`,
      date: '13 يوليو 2020',
      source: 'موقع خمسه لصحتك',
      latest: false
    },
    {
      id: 9,
      section: 'أمراض و أعراض',
      title:'نقص السيلينيوم',
      head: 
          `هل تعاني من نزلات البرد المتكررة؟
          هل تعاني من الدوار المستمر؟
          هل تعاني من الاكتئاب؟
          هل تعاني من ظهور الثآليل بجسمك؟
          إذن لديك نقص في معدن السيلينيوم
          `,
      date: '14 يوليو 2020',
      source: 'موقع خمسة لصحتك',
      latest: false
    },
    {
      id: 10,
      section: 'العناية بالأطفال',
      title:'ارتفاع ضغط الدم عند الأطفال',
      head: 
          `يمكن أن يصاب الأطفال بارتفاع ضغط الدم، فهو مرض لا يقتصر على مرحلة عمرية محددة، ولذلك يجب التعرف على كافة المعلومات حول ارتفاع ضغط الدم عند الأطفال
          يعتقد كثير من الأشخاص أن ارتفاع ضغط الدم من المشكلات الصحية التي تصيب الكبار فقط، ولكن في الواقع، يمكن أن تحدث الإصابة بضغط الدم في أي مرحلة من العمر.`,
      date: '21 يونيه 2020',
      source: 'موقع ويب طب',
      latest: true
    },
    {
      id: 11,
      section: 'فيروس كورونا',
      title:'المشروب الذهبي',
      head: 
          `المشروب الذهبي هو أقوى المشروبات الطبيعية الرافعة لجهاز المناعة بل هو عملاق المشروبات الطبيعية والتي ستتمنى أنك لو سمعت عنه وعرفت به منذ قديم الأزل.`,
      date: '1 يوليو 2020',
      source: 'موقع خمسة لصحتك',
      latest: true
    },
    {
      id: 12,
      section: 'العناية بالأطفال',
      title:'تسلخات الأطفال',
      head: 
          `تسلخات الأطفال موضوع مزعج`,
      date: '29 أبريل 2020',
      source: 'موقع كيدزانيا',
      latest: false
    },
    {
      id: 13,
      section: 'العناية بالشعر',
      title:'طرق علاج الشعر المجعد',
      head: 
          `تصفيف الشعر المجعد هو موضوع يشغلنا كثيرا, لا سيما إذا كان لدينا شعر مجعد يأبى الامتثال للتصفيف. أي قصة شعر تلائم ذوات الشعر المجعد؟أي منتجات تصفيف يوصى بها؟ كيف نمشط الشعر المجعد وكيف نتعامل معه يوميا؟`,
      date: '29 يوليو 2020',
      source: 'موقع ويب طب',
      latest: true
    },
  ]
})

export const getters = {
  teeth_care(state){
    let teeth = state.subjects.filter(item =>{
     return item.section.includes('العناية بالأسنان')
    })
    return teeth
  },
  skin_care(state){
    let skin = state.subjects.filter(item =>{
     return item.section.includes('العناية بالبشرة')
    })
    return skin
  },
  hair_care(state){
    let hair = state.subjects.filter(item =>{
     return item.section.includes('العناية بالشعر')
    })
    return hair
  },
  detergents(state){
    let detergents = state.subjects.filter(item =>{
     return item.section.includes('المنظفات و المطهرات')
    })
    return detergents
  },
  corona(state){
    let corona = state.subjects.filter(item =>{
     return item.section.includes('فيروس كورونا')
    })
    return corona
  },
  kids(state){
    let kids = state.subjects.filter(item =>{
     return item.section.includes('العناية بالأطفال')
    })
    return kids
  },
  symptoms(state){
    let symptoms = state.subjects.filter(item =>{
     return item.section.includes('أمراض و أعراض')
    })
    return symptoms
  },
  all_subjects(state){
    let all = state.subjects
    return all
  }
}