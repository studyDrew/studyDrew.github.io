var wordData = [
    // 001 처음～
    { jp: "初めてご挨拶申し上げます。", ro: "hajimete goaisatsu moushiagemasu", kr: "처음 인사드립니다" },
    { jp: "はじめまして。", ro: "hajimemashite", kr: "처음 뵙겠습니다" },
    { jp: "初めてご連絡差し上げます。", ro: "hajimete gorenraku sashiagemasu", kr: "처음 연락드립니다" },
    { jp: "初めてメールを差し上げます。", ro: "hajimete meeru o sashiagemasu", kr: "처음 메일드립니다" },
    { jp: "メールではご挨拶しましたが、はじめまして。", ro: "meeru dewa goaisatsu shimashitaga, hajimemashite", kr: "메일로는 인사드렸습니다만, 처음 뵙겠습니다" },
    { jp: "はじめまして。よろしくお願いいたします。", ro: "hajimemashite. yoroshiku onegai itashimasu", kr: "처음 뵙겠습니다. 잘 부탁드립니다" },

    // 002 ～라고 합니다
    { jp: "私はキム・ミナと申します。", ro: "watashi wa kimu mina to moushimasu", kr: "저는 김미나라고 합니다" },
    { jp: "鈴木と申します。", ro: "suzuki to moushimasu", kr: "스즈키라고 합니다" },
    { jp: "マーケティング部の渡辺ゆきと申します。", ro: "maaketingubu no watanabe yuki to moushimasu", kr: "마케팅부 와타나베 유키라고 합니다" },
    { jp: "広報担当の太田潤と申します。", ro: "kouhou tantou no oota jun to moushimasu", kr: "홍보 담당인 오타 준이라고 합니다" },
    { jp: "はじめまして。営業部のイ・ヒョンシクと申します。", ro: "hajimemashite. eigyoubu no i hyonshiku to moushimasu", kr: "처음 뵙겠습니다. 영업부의 이형식이라고 합니다" },
    { jp: "はじめまして。課長の鈴木と申します。", ro: "hajimemashite. kachou no suzuki to moushimasu", kr: "처음 뵙겠습니다. 과장인 스즈키라고 합니다" },

    // 003 어서～
    { jp: "どうぞこちらへ。", ro: "douzo kochira e", kr: "어서 이쪽으로 오세요" },
    { jp: "どうぞお入りください。", ro: "douzo ohairi kudasai", kr: "어서 들어오세요" },
    { jp: "どうぞ召し上がってください。", ro: "douzo meshiagatte kudasai", kr: "어서 드세요" },
    { jp: "これ、どうぞ。", ro: "kore, douzo", kr: "이거 받으세요" },
    { jp: "つまらないものですが、どうぞお受け取りください。", ro: "tsumaranai mono desuga, douzo ouuketori kudasai", kr: "변변찮습니다만, 어거 받으세요" },
    { jp: "わざわざありがとうございます。", ro: "wazawaza arigatou gozaimasu", kr: "일부러 감사합니다" },

    // 004 이쪽은～
    { jp: "こちらは部長の松本です。", ro: "kochira wa buchou no matsumoto desu", kr: "이쪽은 부장인 마쓰모토입니다" },
    { jp: "こちらは韓国からお越しの朴ジン様です。", ro: "kochira wa kankoku kara okoshi no paku jin sama desu", kr: "이쪽은 한국에서 오신 박진 씨이십니다" },
    { jp: "こちらは新商品です。", ro: "kochira wa shinshouhin desu", kr: "이쪽은 신상품입니다" },
    { jp: "こちらが契約書です。", ro: "kochira ga keiyakusho desu", kr: "이쪽이 계약서입니다" },
    { jp: "佐藤さん、こちらは部長の松本です。", ro: "satou san, kochira wa buchou no matsumoto desu", kr: "사토 씨 이쪽은 부장인 마쓰모토입니다" },
    { jp: "はじめまして面。部長の松本です。", ro: "hajimemashite. buchou no matsumoto desu", kr: "처음 뵙겠습니다. 부장인 마쓰모토입니다" },
    { jp: "はじめまして。日本物産の佐藤です。", ro: "hajimemashite. nihon bussan no satou desu", kr: "처음 뵙겠습니다. 일본물산의 사토입니다" },

    // 005 저야말로～
    { jp: "私こそ、よろしくお願いいたします。", ro: "watashi koso, yoroshiku onegai itashimasu", kr: "저야말로 잘 부탁드립니다" },
    { jp: "私こそ、いつもお世話になっております。", ro: "watashi koso, itsumo osewa ni natte orimasu", kr: "저야말로 항상 신세 지고 있습니다" },
    { jp: "私こそ、おかげさまで売上が好調です。", ro: "watashi koso, okagesama de uriage ga kouchou desu", kr: "저야말로 덕분에 매출이 순조롭습니다" },
    { jp: "私こそ、これからもご協力をお願いいたします。", ro: "watashi koso, korekara mo gokyouryoku o onegai itashimasu", kr: "저야말로 앞으로도 협조를 부탁드립니다" },
    { jp: "御社が協力してくださったおかげで、プロジェクトが成功しました。", ro: "onsha ga kyouryoku shite kudasatta okage de, purojekuto ga seikou shimashita", kr: "귀사가 협력해 주신 덕분에 프로젝트가 성공했습니다" },
    { jp: "私こそ、貴重な機会に参加させていただき、ありがとうございます。", ro: "watashi koso, kichou na kikai ni sanka sasete itadaki, arigatou gozaimasu", kr: "저야말로 귀중한 기회에 참가하게 해 주셔서 감사합니다" },

    // 006 ～해서 영광입니다
    { jp: "お目にかかれて光栄です。", ro: "omenikakarete kouei desu", kr: "만나뵙게 되어 영광입니다" },
    { jp: "このような機会をいただき光栄です。", ro: "kono you na kikai o itadaki kouei desu", kr: "이런 기회를 받아서 영광입니다" },
    { jp: "このような賞をいただき光栄です。", ro: "kono you na shou o itadaki kouei desu", kr: "이러한 상을 받아서 영광입니다" },
    { jp: "パートナー企業に選ばれて光栄です。", ro: "paatonaa kigyou ni erabarete kouei desu", kr: "파트너 회사로 뽑혀서 영광입니다" },
    { jp: "この仕事をご一緒できて光栄です。", ro: "kono shigoto o goissho dekite kouei desu", kr: "이 일을 함께할 수 있어서 영광입니다" },
    { jp: "私どものほうこそ、めったにない機会をいただきありがとうございます。", ro: "watashidomo no hou koso, metta ni nai kikai o itadaki arigatou gozaimasu", kr: "저희야말로 좀처럼 없는 기회를 (주셔서) 감사합니다" },

    // 007 ～ 들었습니다
    { jp: "お話は伺っております。", ro: "ohanashi wa ukagatte orimasu", kr: "이야기는 들었습니다" },
    { jp: "事情は伺っております。", ro: "jijou wa ukagatte orimasu", kr: "사정은 들었습니다" },
    { jp: "その間の経緯については山田から聞いております。", ro: "sono kan no keii ni tsuite wa yamada kara kiite orimasu", kr: "그 간에 대해서는 야마다로부터 들었습니다" },
    { jp: "こちらの業界にお詳しいと、弊社鈴木から伺いました。", ro: "kochira no gyoukai ni okuwashii to, heisha suzuki kara ukagaimashita", kr: "이쪽 업계를 잘 아신다고 저희 회사 스즈키에게 들었습니다" },
    { jp: "担当が変わりまして、本日はご挨拶に伺いました。", ro: "tantou ga kawarimashite, honjitsu wa goaisatsu ni ukagaimashita", kr: "담당자가 바뀌어서 오늘은 인사차 왔습니다" },
    { jp: "前任の方から伺いました。", ro: "zennin no kata kara ukagaimashita", kr: "전 담당자분에게 들었습니다" },

    // 008 ～ 덕분에
    { jp: "池田さんのおかげで無事に解決しました。", ro: "ikeda san no okage de buji ni kaiketsu shimashita", kr: "이케다 씨 덕분에 무사히 해결했습니다" },
    { jp: "御社の支援のおか게で売上が増加しました。", ro: "onsha no shien no okage de uriage ga zouka shimashita", kr: "귀사의 지원 덕분에 매출이 증가했습니다" },
    { jp: "アドバイスをいただいたおかげで、良い商品が完成しました。", ro: "adobaisu o itadaita okage de, yoi shouhin ga kansei shimashita", kr: "조언해 주신 덕분에 좋은 상품이 완성됐습니다" },
    { jp: "同行してくれたおかげで、契約できそうです。", ro: "doukou shite kureta okage de, keiyaku dekisou desu", kr: "같이 방문해 준 덕분에 계약할 수 있을 것 같습니다" },
    { jp: "鈴木さんがいてくれたおかげで助かりました。", ro: "suzuki san ga ite kureta okage de tasukarimashita", kr: "스즈키 씨가 있어 준 덕분에 살았습니다" },
    { jp: "いいえ、とんでもございません。私は何もしておりません。", ro: "iie, tondemo gozaimasen. watashi wa nanimo shite orimasen", kr: "별말씀을요. 저는 아무것도 안 했습니다" },

    // 009 진심으로 ～
    { jp: "この度は、心より感謝申し上げます。", ro: "kono tabi wa, kokoro yori kansha moushiagemasu", kr: "이번에는 진심으로 감사했습니다" },
    { jp: "誠に申し訳ございません。", ro: "makoto ni moushiwake gozaimasen", kr: "정말 죄송합니다" },
    { jp: "心よりお祝い申し上げます。", ro: "kokoro yori oiwai moushiagemasu", kr: "진심으로 축하드립니다" },
    { jp: "誠に残念でございます。", ro: "makoto ni zannen de gozaimasu", kr: "참으로 유감스럽습니다" },
    { jp: "ご昇進、心よりお祝い申し上げます。", ro: "goshoushin, kokoro yori oiwai moushiagemasu", kr: "승진, 진심으로 축하드립니다" },
    { jp: "ありがとうございます。皆様のご支援のおかげです。", ro: "arigatou gozaimasu. minasama no goshien no okage desu", kr: "감사합니다. 여러분의 지원 덕분입니다" },

    // 010 언제나 ～
    { jp: "いつもありがとうございます。", ro: "itsumo arigatou gozaimasu", kr: "늘 감사합니다" },
    { jp: "いつも良くしていただいております。", ro: "itsumo yoku shite itadaite orimasu", kr: "언제나 잘해 주고 계십니다" },
    { jp: "いつも助かっております。", ro: "itsumo tasukatte orimasu", kr: "언제나 도움이 되고 있습니다" },
    { jp: "いつもながら素晴らしいですね。", ro: "itsumonagara subarashii desu ne", kr: "언제나 그렇지만 훌륭합니다" },
    { jp: "これ、心ばかりのものですが、どうぞ。", ro: "kore, kokoro bakari no mono desuga, douzo", kr: "이거 별거 아니지만 드십시오" },
    { jp: "いつもお持たせをいただき、恐縮です。", ro: "itsumo omotase o itadaki, kyoushuku desu", kr: "늘 선물을 받아서 송구스럽습니다" },

    // 011 ～해 주셔서 감사합니다
    { jp: "ご支援いただきありがとうございます。", ro: "goshien itadaki arigatou gozaimasu", kr: "지원해 주셔서 감사합니다" },
    { jp: "ご指摘いただきありがとうございます。", ro: "goshiteki itadaki arigatou gozaimasu", kr: "지적해 주셔서 감사합니다" },
    { jp: "ご理解いただきありがとうございます。", ro: "gorikai itadaki arigatou gozaimasu", kr: "이해해 주셔서 감사합니다" },
    { jp: "弊社をお選びいただきありがとうございます。", ro: "heisha o oerabi itadaki arigatou gozaimasu", kr: "저희 회사를 선택해 주셔서 감사합니다" },
    { jp: "数ある企業の中から弊社と契約いただき、ありがとうございます。", ro: "kazuaru kigyou no naka kara heisha to keiyaku itadaki, arigatou gozaimasu", kr: "수많은 기업 가운데 저희 회사와 계약해 주셔서 감사합니다" },
    { jp: "こちらこそ、よろしくお願いいたします。", ro: "kochirakoso, yoroshiku onegai itashimasu", kr: "저희야말로 잘 부탁드립니다" },

    // 012 여기 ～ (역시 ～)
    { jp: "さすが実績のある田中さんですね。", ro: "sasuga jisseki no aru tanaka san desu ne", kr: "역시 실적이 우수한 다나카 씨군요" },
    { jp: "さすが老舗ならではですね。", ro: "sasuga shinise naradewa desu ne", kr: "역시 노포답게 네요" },
    { jp: "さすが競合他社に引けを取りませんね。", ro: "sasuga kyougou tasha ni hike o torimasen ne", kr: "역시 경쟁사에 뒤지지 않네요" },
    { jp: "今月も実績1位だなんて、さすが営業部のエースです。", ro: "kongetsu mo jisseki ichii danante, sasuga eigyoubu no eesu desu", kr: "이달도 실적 1위라니 역시 영업부의 일인자입니다" },
    { jp: "さすが100年続く企業だけあって、体制がしっかりしていますね。", ro: "sasuga hyakunen tsuzuku kigyou dake atte, taisei ga shikkari shite imasu ne", kr: "역시 100년 이어지는 기업답게 체계가 튼튼하네요" },
    { jp: "いいえ、それほどでもありません。", ro: "iie, sorehodo demo arimasen", kr: "아뇨. 그 정도는 아닙니다" },

    // 013 훌륭한 ～
    { jp: "素晴らしいものを見ました。", ro: "subarashii mono o mimashita", kr: "훌륭한 것을 봤습니다" },
    { jp: "見事な腕前でした。", ro: "migoto na udemae deshita", kr: "훌륭한 솜씨였습니다" },
    { jp: "素晴らしい製品ですね。", ro: "subarashii seihin desu ne", kr: "훌륭한 제품이네요" },
    { jp: "素晴らしいです。", ro: "subarashii desu", kr: "훌륭합니다" },
    { jp: "今日のプレゼン発表は素晴らしかったです。", ro: "kyou no purezen happyou wa subarashikatta desu", kr: "오늘 PT 발표는 훌륭했습니다" },
    { jp: "滅相もございません。これも御社の支援のおかげです。", ro: "messou mo gozaimasen. kore mo onsha no shien no okage desu", kr: "별말씀 다 하십니다. 이것도 귀사의 지원 덕분입니다" },

    // 014 ～ 하고 싶은데요
    { jp: "デザインを変えたいのですが。", ro: "dezain o kaetai no desuga", kr: "디자인을 바꾸고 싶은데요" },
    { jp: "顧客アンケートを実施したいのですが。", ro: "kokyaku ankeeto o jisshi shitai no desuga", kr: "고객 앙케트를 실시하고 싶은데요" },
    { jp: "担当の方にお会いしたいのですが。", ro: "tantou no kata ni oaishitai no desuga", kr: "담당자분을 만나 뵙고 싶은데요" },
    { jp: "価格交渉をしたいのですが。", ro: "kakaku koushou o shitai no desuga", kr: "가격 교섭을 하고 싶은데요" },
    { jp: "あの、今回の発注は数量を減らしたいのですが。", ro: "ano, konkai no hacchuu wa suuryou o herashitai no desuga", kr: "저기 이번 발주는 수량을 줄이기 싶은데요" },
    { jp: "あ、承知いたしました。何個になさいますか？", ro: "a, shouchi itashimashita. nanko ni nasaimasuka", kr: "아, 알겠습니다. 몇 개로 하시겠습니까?" },

    // 015 ～해도 되겠습니까?
    { jp: "直帰してもよろしいでしょうか？", ro: "chokki shite mo yoroshii deshouka", kr: "현지 퇴근해도 되겠습니까?" },
    { jp: "このサンプル、いただいてもよろしいでしょうか？", ro: "kono sanpuru, itadaite mo yoroshii deshouka", kr: "이 샘플, 받아도 되겠습니까?" },
    { jp: "少し中を見てもよろしいでしょうか？", ro: "sukoshi naka o mite mo yoroshii deshouka", kr: "잠깐 안을 봐도 되겠습니까?" },
    { jp: "来週の飲み会は和食にしてもいいでしょうか？", ro: "raishuu no nomikai wa washoku ni shite mo ii deshouka", kr: "다음 주 회식은 일식으로 해도 될까요?" },
    { jp: "田中部長、今10分ほどお時間よろしいでしょうか？", ro: "tanaka buchou, ima juuppun hodo ojikan yoroshii deshouka", kr: "다나카 부장님 지금 10분 정도 시간 괜찮으세요?" },
    { jp: "今、手が離せないので、1時間後でもいいかな？", ro: "ima, te ga hanasenai node, ichijikango demo ii kana", kr: "지금 시간이 안 돼서 1시간 후라도 괜찮을까?" },

    // 016 ～해 주시겠습니까?
    { jp: "貸していただけますか？", ro: "kashite itadakemasuka", kr: "빌려주시겠습니까?" },
    { jp: "価格を検討していただけますか？", ro: "kakaku o kentou shite itadakemasuka", kr: "가격을 검토해 주시겠습니까?" },
    { jp: "考えていただけますか？", ro: "kangaete itadakemasuka", kr: "생각해 주시겠습니까?" },
    { jp: "その後の進展についてお話しいただけますか？", ro: "sono ato no shinten ni tsuite ohanashi itadakemasuka", kr: "그 후의 진전에 대해 말씀해 주시겠습니까?" },
    { jp: "今回の展示会で営業を手伝っていただけますか？", ro: "konkai no tenjikai de eigyou o tetsudatte itadakemasuka", kr: "이번 전시회에서 영업을 도와주시겠습니까?" },
    { jp: "もちろんです。喜んでお手伝いいたします。", ro: "mochiron desu. yorokonde otetsudai itashimasu", kr: "물론입니다. 기꺼이 도와드리겠습니다" },

    // 017 ～하면 고맙겠는데요
    { jp: "今日中に終わらせていただけると助かるのですが。", ro: "kyoujuu ni owarasete itadakeru to tasukaru no desuga", kr: "오늘 안에 끝내 주면 고맙겠는데요" },
    { jp: "明日のシフトを替えていただけると助かるのですが。", ro: "ashita no shifuto o kaete itadakeru to tasukaru no desuga", kr: "내일 교대 근무 시간을 바꿔 주면 고맙겠는데요" },
    { jp: "会議の後の片付けもしていただけると助かるのですが。", ro: "kaigi no ato no katazuke mo shite itadakeru to tasukaru no desuga", kr: "회의가 끝난 후 정리도 해 주면 고맙겠는데요" },
    { jp: "ワードで送っていただけると助かるのですが。", ro: "waado de okutte itadakeru to tasukaru no desuga", kr: "워드로 보내 주면 고맙겠는데요" },
    { jp: "もしお手すきでしたら、この仕事を手伝っていただけると助かるのですが。", ro: "moshi otesuki deshitara, kono shigoto o tetsudatte itadakeru to tasukaru no desuga", kr: "혹시 손이 비어 있다면 이 일을 도와주시면 고맙겠는데요" },
    { jp: "はい、いいですよ。", ro: "hai, ii desu yo", kr: "네 좋아요" },

    // 018 ～해 주세요
    { jp: "どうぞお入りください。", ro: "douzo ohairi kudasai", kr: "어서 들어오세요" },
    { jp: "こちらの席にお座りください。", ro: "kochira no seki ni osuwari kudasai", kr: "이쪽 자리에 앉아 주세요" },
    { jp: "これサンプルですので、お持ち帰りください。", ro: "kore sanpuru desu node, omochikaeri kudasai", kr: "이거 샘플이니 가져가세요" },
    { jp: "準備ができましたら、このボタンでお知らせください。", ro: "junbi ga dekimashitara, kono botan de oshirase kudasai", kr: "준비가 되시면 이 버튼으로 알려 주세요" },
    { jp: "今日で1週間の試用期間が終わりますが、いかがでしょうか？使い心地を聞かせてください。", ro: "kyou de isshuukan no shiyou kikan ga owarimasuga, ikaga deshouka? tsukaigokochi o kikasete kudasai", kr: "오늘로 일주일간의 시험사용 기간이 끝나는데요. 어떠십니까? 사용해 본 소감을 들려주세요" },
    { jp: "あ、はい。思っていたより使いやすくて便利でした。", ro: "a, hai. omotte ita yori tsukaiyasukute benri deshita", kr: "아 네 생각했던 것보다 쓰기 쉽고 편리했습니다" },

    // 019 (허락을 받고) ～ 하겠습니다
    { jp: "ご案内いたします。", ro: "goannai itashimasu", kr: "안내하겠습니다" },
    { jp: "明日、改めてご挨拶に伺います。", ro: "ashita, aratamete goaisatsu ni ukagaimasu", kr: "내일다시 인사드리겠습니다" },
    { jp: "喜んで参加させていただきます。", ro: "yorokonde sanka sasete itadakimasu", kr: "기꺼이 참석하겠습니다" },
    { jp: "社長の代わりに祝辞を代読させていただきます。", ro: "shachou no kawari ni shukuji o daidoku sasete itadakimasu", kr: "사장님 대신에 축하 메시지를 읽겠습니다" },
    { jp: "恐れ入りますが、今日は体調が悪いので会社を休ませていただきます。", ro: "osoreirimasuga, kyou wa taichou ga warui node kaisha o yasumasete itadakimasu", kr: "죄송하지만 오늘 몸이 안 좋아서 회사를 쉬겠습니다" },
    { jp: "そうですか？お大事になさってください。", ro: "sou desuka? odaiji ni nasatte kudasai", kr: "그래요? 몸조리 잘하세요" },

    // 020 ～하게 해주세요
    { jp: "ぜひ弊社にやらせてください。", ro: "zehi heisha ni yarase kudasai", kr: "부디 저희 회사에서 하게 해 주세요" },
    { jp: "この案件、私に担当させてください。", ro: "kono anken, watashi ni tantou sase kudasai", kr: "이 안건, 제가 담당하게 해 주세요" },
    { jp: "ご心配なく、私にお任せください。", ro: "goshinpai naku, watashi ni omakase kudasai", kr: "걱정 마시고, 제게 맡겨 주세요" },
    { jp: "今回の営業では私に話をさせてください。", ro: "konkai no eigyou dewa watashi ni hanashi o sase kudasai", kr: "이번 영업에서는 제가 말하게 해 주세요" },
    { jp: "新しい企画があるのですが、誰か担当したい人はいますか？", ro: "atarashii kikaku ga aru no desuga, dareka tantoushitai hito wa imasuka", kr: "새 기획이 있는데, 누구 담당하고 싶은 사람이 있어요?" },
    { jp: "はい、ぜひ私にやらせてください。", ro: "hai, zehi watashi ni yarase kudasai", kr: "네 부디 제가 하게 해 주세요" },

    // 021 ～하지 않을래요?
    { jp: "ここで一旦休みませんか？", ro: "koko de ittan yasumimasenka", kr: "여기서 일단 쉬지 않을래요?" },
    { jp: "仕事の後に一杯行きませんか？", ro: "shigoto no ato ni ippai ikimasenka", kr: "일 끝난 후에 한잔하러 안 갈래요?" },
    { jp: "この作業は時間がかかるので、手伝いを呼びませんか？", ro: "kono sagyou wa jikan ga kakaru node, tetsudai o yobimasenka", kr: "이 작업은 시간이 걸리니까 도와주는 사람 부르지 않을래요?" },
    { jp: "残りは来週相談しませんか？", ro: "nokori wa raishuu soudan shimasenka", kr: "나머지는 다음 주에 의논하지 않을래요?" },
    { jp: "次の約束まで時間がありますね。", ro: "tsugi no yakusoku made jikan ga arimasu ne", kr: "다음 약속까지 시간이 남았네요" },
    { jp: "では、カフェで休んで行きませんか？", ro: "dewa, kafe de yasunde ikimasenka", kr: "그럼 카페에서 쉬었다 가지 않을래요?" },

    // 022 ～할까요?
    { jp: "12時ですので、お昼休みにしましょうか？", ro: "juuniji desu node, ohiruyasumi ni shimashouka", kr: "12시니까 점심시간으로 할까요?" },
    { jp: "今日のミーティングはこの辺にしましょうか？", ro: "kyou no miitingu wa kono hen ni shimashouka", kr: "오늘 미팅은 이 정도로 할까요?" },
    { jp: "飲み会の幹事は小川さんに任せましょうか？", ro: "nomikai no kanji wa ogawa san ni makasemashouka", kr: "회식 총무는 오가와 씨에게 맡길까요?" },
    { jp: "プロジェクトリーダーは誰にさせましょうか？", ro: "purojekuto riidaa wa dare ni sasemashouka", kr: "프로젝트 리더는 누구에게 시킬까요?" },
    { jp: "工場に検品に行かなければならないのですが、忙しくて。", ro: "koujou ni kenpin ni ikanakereba naranai no desuga, isogashikute", kr: "공장에 검품하러 가야 하는데 바빠서" },
    { jp: "私が工場に行ってきましょうか？", ro: "watashi ga koujou ni ittekimashouka", kr: "제가 공장에 다녀올까요?" },

    // 023 ～하는 편이 좋다고 생각합니다
    { jp: "慎重に進めるほうがいいと思います。", ro: "shinchou ni susumeru hou ga ii to omoimasu", kr: "신중히 진행하는 편이 좋다고 생각합니다" },
    { jp: "与信調査からするほうがいいと思います。", ro: "yoshinchousa kara suru hou ga ii to omoimasu", kr: "여신 조사부터 하는 편이 좋다고 생각합니다" },
    { jp: "販売価格を上げるほうがいいと思います。", ro: "hanbaikakaku o ageru hou ga ii to omoimasu", kr: "판매 가격을 올리는 편이 좋다고 생각합니다" },
    { jp: "私個人としては、その案はやめるほうがいいと思います。", ro: "watashi kojin toshite wa, sono an wa yameru hou ga ii to omoimasu", kr: "저 개인적으로는 그 안은 그만두는 편이 좋다고 생각합니다" },
    { jp: "新しいパッケージデザインはA案とB案のどちらがいいですか？", ro: "atarashii pakkeeji dezain wa eean to biian no dochira ga ii desuka", kr: "새로운 패키지 디자인은 A안과 B안 어느 쪽이 좋아요?" },
    { jp: "Bは商品コンセプトと合わないので、A案にするほうがいいと思います。", ro: "bii wa shouhin konseputo to awanai node, eean ni suru hou ga ii to omoimasu", kr: "B는 상품 콘셉트와 맞지 않으니 A안으로 하는 편이 좋다고 생각합니다" },

    // 024 ～하지 않는 편이 좋다고 생각합니다
    { jp: "これ以上飲まないほうがいいと思いますよ。", ro: "kore ijou nomanai hou ga ii to omoimasu yo", kr: "더 이상 마시지 않는 편이 좋다고 생각해요" },
    { jp: "部長を抜きで進めないほうがいいと思います。", ro: "buchou o nuki de susumenai hou ga ii to omoimasu", kr: "부장님을 빼고 진행하지 않는 편이 좋다고 생각합니다" },
    { jp: "お土産は重すぎないほうがいいと思います。", ro: "omiyage wa omosuginai hou ga ii to omoimasu", kr: "선물은 너무 무겁지 않은 편이 좋다고 생각합니다" },
    { jp: "まだ取引先には言わないほうがいいと思います。", ro: "mada torihikisaki ni wa iwanai hou ga ii to omoimasu", kr: "아직 거래처에는 말하지 않는 편이 좋다고 생각합니다" },
    { jp: "大変だ！第一商事の田中さんに電話するのを忘れてた。", ro: "taihen da! daiichi shouji no tanaka san ni denwa suru no o wasureteta", kr: "큰일났다! 제일상사의 다나카 씨한테 전화하는 걸 깜박했어" },
    { jp: "もう遅い時間ですので、電話しないほうがいいと思いますが。", ro: "mou osoi jikan desu node, denwa shinai hou ga ii to omoimasuga", kr: "이미 늦은 시간이니, 전화하지 않는 편이 좋다고 생각하는데요" },

    // 025 ～하는 게 어떠세요?
    { jp: "体調が悪ければ、今日は早退したらいかがですか？", ro: "taichou ga warukereba, kyou wa soutai shitara ikaga desuka", kr: "몸이 안 좋으면 오늘은 조퇴하는 게 어떠세요?" },
    { jp: "部長に相談したらいかがですか？", ro: "buchou ni soudan shitara ikaga desuka", kr: "부장님께 상담하는 게 어떠세요?" },
    { jp: "今回は対象を変えてみたらいかがですか？", ro: "konkai wa taishou o kaete mitara ikaga desuka", kr: "이번에는 대상을 바꿔 보는 게 어떠세요?" },
    { jp: "顧客アンケートをしてみたらいかがですか？", ro: "kokyaku ankeeto o shite mitara ikaga desuka", kr: "고객 앙케트를 해 보는 게 어떠세요?" },
    { jp: "最近、ちょっと実績が伸びませんね。", ro: "saikin, chotto jisseki ga nobimasen ne", kr: "요즘 좀 실적이 안 느네요" },
    { jp: "部長に正直に意見を聞いてみたらいかがですか？", ro: "buchou ni shoujiki ni iken o kiite mitara ikaga desuka", kr: "부장님께 솔직히 의견을 물어보는 게 어떠세요?" },

    // 026 ～해 보세요
    { jp: "どうぞ触ってみてください。", ro: "douzo sawatte mite kudasai", kr: "어서 만져 보세요" },
    { jp: "よろしければ試食してみてください。", ro: "yoroshikereba shishoku mite kudasai", kr: "괜찮으시면 시식해 보세요" },
    { jp: "ぜひ一度体験してみてください。", ro: "zehi ichido taiken shite mite kudasai", kr: "꼭 한번 체험해 보세요" },
    { jp: "手に取って直接感じてみてください。", ro: "te ni totte chokusetsu kanjite mite kudasai", kr: "손에 들고 직접 느껴 보세요" },
    { jp: "このサンプル、いただいてもいいですか？", ro: "kono sanpuru, itadaite mo ii desuka", kr: "이 샘플, 받아도 될까요?" },
    { jp: "ぜひお持ち帰りになって、ゆっくり考えてみてください。", ro: "zehi omochikaeri ni natte, yukkuri kangaete mite kudasai", kr: "부디 가져가셔서 천천히 생각해 보세요" },

    // 027 ～해서는 곤란합니다
    { jp: "これは展示品ですので、持って行かれては困ります。", ro: "kore wa tenjihin desu node, motte ikarete wa komarimasu", kr: "이것은 전시품이니 가져가시면 곤란합니다" },
    { jp: "ここでタバコを吸われては困ります。", ro: "koko de tabako o suwarete wa komarimasu", kr: "여기서 담배를 피우시면 곤란합니다" },
    { jp: "今日のように無断欠勤されては困ります。", ro: "kyou no you ni mudankekkin sarete wa komarimasu", kr: "오늘처럼 무단결근하시면 곤란합니다" },
    { jp: "このような対応方法では困ります。", ro: "kono you na taiou houhou dewa komarimasu", kr: "이러한 대응 방법으로는 곤란합니다" },
    { jp: "出張に行ったら、その後報告書を提出していただかないと困ります。", ro: "shucchou ni ittara, sono ato houkokusho o teishutsu shite itadakanai to komarimasu", kr: "출장을 갔으면, 그 후 보고서를 제출해 주지 않으면 곤란합니다" },
    { jp: "申し訳ございません。以後注意いたします。", ro: "moushiwake gozaimasen. igo chuui itashimasu", kr: "죄송합니다. 앞으로 주의하겠습니다" },

    // 028 ～는 좀…
    { jp: "この条件はちょっと…。", ro: "kono jouken wa chotto", kr: "이 조건은 좀" },
    { jp: "この卸値ではちょっと…。", ro: "kono oroshine dewa chotto", kr: "이 도매가로는 좀" },
    { jp: "新製品の性能に関してですが、AI機能がないというのはちょっと…。", ro: "shinseihin no seinou ni kanshite desuga, eeai kinou ga nai to iu no wa chotto", kr: "신제품 성능에 관해서인데요. AI 기능이 없다는 건 좀" },
    { jp: "もう少し条件を受け入れていただかないと、このままではちょっと…。", ro: "mou sukoshi jouken o ukeirete itadakanai to, kono mama dewa chotto", kr: "조금만 더 조건을 받아들여 주시지 않으면 이대로는 좀" },
    { jp: "課長、来週のプレゼンのことで確認したいことがあるのですが。", ro: "kachou, raishuu no purezen no koto de kakunin shitai koto ga aru no desuga", kr: "과장님, 다음 주 프레젠테이션 때문에 확인하고 싶은 게 있는데요" },
    { jp: "悪いけど、今はちょっと…。", ro: "warui kedo, ima wa chotto", kr: "미안한데 지금은 좀" },

    // 029 ～하기 어렵습니다만
    { jp: "申し上げにくいのですが、他社に決まりました。", ro: "moushiage nikui no desuga, tasha ni kimarimashita", kr: "말하기 어렵습니다만, 다른 회사로 결정되었습니다" },
    { jp: "お伝えしにくいのですが、この企画は白紙になりました。", ro: "otsutae shinikui no desuga, kono kikaku wa hakushi ni narimashita", kr: "전달드리기 어렵습니다만, 이 기획은 없던 일이 되었습니다" },
    { jp: "申し上げにくいのですが、契約は今年で中止させていただきます。", ro: "moushiage nikui no desuga, keiyaku wa kotoshi de chuushi sasete itadakimasu", kr: "말씀드리기 어렵습니다만, 계약은 올해로 중지합니다" },
    { jp: "申し上げにくいのですが、このお話はなかったことにさせていただきます。", ro: "moushiage nikui no desuga, kono ohanashi wa nakatta koto ni sasete itadakimasu", kr: "말씀드리기 어렵습니다만, 이 얘기는 없던 일로 되었습니다" },
    { jp: "お伝えしにくいのですが、採用を見送らせていただくことになりました。", ro: "otsutae shinikui no desuga, saiyou o miokurasete itadaku koto ni narimashita", kr: "전달드리기 어렵지만, 채용을 보류하게 되었습니다" },
    { jp: "あ…そうですか。承知いたしました。", ro: "a, sou desuka. shouchi itashimashita", kr: "아…그래요? 알겠습니다" },

    // 030 ～하기 어렵습니다
    { jp: "この計画に私は賛成しかねます。", ro: "kono keikaku ni watashi wa sansei shikanemasu", kr: "이 계획에 저는 찬성하기 어렵습니다" },
    { jp: "この製品の質では販売しかねます。", ro: "kono seihin no shitsu dewa hanbai shikanemasu", kr: "이 제품의 질로는 판매하기 어렵습니다" },
    { jp: "このままではお話を進めかねます。", ro: "kono mama dewa ohanashi o susumekanemasu", kr: "이대로는 이야기를 진행하기 어렵습니다" },
    { jp: "責任者ではないので、それについてはお答えしかねます。", ro: "sekinnsha dewa nai node, sore ni tsuite wa okotae shikanemasu", kr: "책임자가 아니라서 그것에 대해 답변드리기 어렵습니다" },
    { jp: "この提示価格ではいかがですか？", ro: "kono teiji kakaku dewa ikaga desuka", kr: "이 제시 가격이면 어떠세요?" },
    { jp: "弊사의マージンが20%以上ないと、お受けしかねます。", ro: "heisha no maajin ga nijuupaasento ijou nai to, ouuke shikanemasu", kr: "저희 회사 마진이 20% 이상 없으면 하기 어렵습니다" },

    // 031 공교롭게도 ～
    { jp: "あいにく手一杯です。", ro: "ainiku teippai desu", kr: "공교롭게도 충분합니다(손이 꽉 찼습니다)" },
    { jp: "あいにく既に他社と契約しておりまして。", ro: "ainiku sude ni tasha to keiyaku shite orimashite", kr: "공교롭게도 이미 다른 거래처와 계약하고 있어서요" },
    { jp: "あいにく弊社にはそのような計画はございません。", ro: "ainiku heisha ni wa sono you na keikaku wa gozaimasen", kr: "공교롭게도 저희 회사는 그런 계획이 없습니다" },
    { jp: "あいにく既に進めている事業でございます。", ro: "ainiku sude ni susumete iru jigyou de gozaimasu", kr: "공교롭게도 이미 진행하고 있는 사업입니다" },
    { jp: "今回、新しくこのような製品を持ってきたのですが。", ro: "konkai, atarashiku kono you na seihin o motte kita no desuga", kr: "이번에 새로 이런 제품을 가져왔는데요" },
    { jp: "あいにく類似品を取り扱っておりまして。", ro: "ainiku ruijihin o toriatsukatte orimashite", kr: "공교롭게도 유사품을 취급하고 있어서요" },

    // 032 유감스럽지만 ～
    { jp: "残念ながら次の機会にさせていただきたいです。", ro: "zannen nagara tsugi no kikai ni sasete itadakitai desu", kr: "유감스럽지만 다음 기회에 하고 싶습니다" },
    { jp: "残念ながら既に締め切りました。", ro: "zannen nagara sude ni shimekirimashita", kr: "유감스럽지만 이미 마감했습니다" },
    { jp: "残念ながら既に取引先が決まっておりまして。", ro: "zannen nagara sude ni torihikisaki ga kimatte orimashite", kr: "유감스럽지만 이미 거래처가 결정되어 있어서요" },
    { jp: "残念ながらこの企画は通りませんでした。", ro: "zannen nagara kono kikaku wa toorimasen deshita", kr: "유감스럽지만 이 기획은 통과되지 못했습니다" },
    { jp: "先日ご提案した新企画、いかがですか？", ro: "senjitsu goteian shita shinkikaku, ikaga desuka", kr: "지난번 제안드린 새 기획 어떠세요?" },
    { jp: "残念ながら予算が合わず、なかったことになりました。", ro: "zannen nagara yosan ga awazu, nakatta koto ni narimashita", kr: "유감스럽지만 예산이 안 맞아서 없던 일로 되었습니다" },

    // 033 모처럼의 기회지만 ～
    { jp: "せっかくの機会ですが、次の機会にさせていただきます。", ro: "sekkaku no kikai desuga, tsugi no kikai ni sasete itadakimasu", kr: "모처럼의 기회지만 다음 기회에 하겠습니다" },
    { jp: "せっかくの機会ですが、弊社では難しそうです。", ro: "sekkaku no kikai desuga, heisha dewa muzukashisou desu", kr: "모처럼의 기회지만 저희 회사에서는 어려울 것 같습니다" },
    { jp: "せっかくの機会ですが、新事業で忙しくて。", ro: "sekkaku no kikai desuga, shinjigyou de isogashikute", kr: "모처럼의 기회지만 새 사업 때문에 바빠서요" },
    { jp: "せっかくの機会ですが、辞退させていただきます。", ro: "sekkaku no kikai desuga, jitai sasete itadakimasu", kr: "모처럼의 기회지만 사양하겠습니다" },
    { jp: "先日お話しした海外支社への異動の件ですが、考えられましたか？", ro: "senjitsu ohanashi shita kaigai shisha e no idou no ken desuga, kangaeraremashitaka", kr: "지난번 말씀드린 해외 지사 이동 건 말인데요. 생각해 보셨습니까?" },
    { jp: "せっかくの機会ですが、家族が反対しておりまして、辞退したく存じます。", ro: "sekkaku no kikai desuga, kazoku ga hantai shite orimashite, jitai shitaku zonjimasu", kr: "모처럼의 기회지만 가족이 반대해서 고사하고자 합니다" },

    // 034 고맙지만 ～
    { jp: "ありがたいのですが、少し考えてもよろしいでしょうか？", ro: "arigatai no desuga, sukoshi kangaete mo yoroshii deshouka", kr: "고맙지만 조금 생각해 봐도 될까요?" },
    { jp: "ありがたいのですが、今すぐには対応いたしかねます。", ro: "arigatai no desuga, ima sugu ni wa taiou itashikanemasu", kr: "고맙지만 지금 당장은 대응하기 어렵습니다" },
    { jp: "ありがたいのですが、私には責任が重すぎるようです。", ro: "arigatai no desuga, watashi ni wa sekinin ga omosugiru you desu", kr: "고맙지만 제게는 책임이 무거운 것 같습니다" },
    { jp: "ありがたいのですが、一度持ち帰って検討させていただきます。", ro: "arigatai no desuga, ichido mochikaette kentou sasete itadakimasu", kr: "고맙지만 한번 가져가서 검토하기로 하겠습니다" },
    { jp: "新事業の責任者を君に任せようかと思うんだが。", ro: "shinjigyou no sekininsha o kimi ni makaseyou ka to omoun daga", kr: "신사업 책임자를 자네에게 맡길까 하는데" },
    { jp: "ありがたいのですが、お受けするか考えてもよろしいでしょうか？", ro: "arigatai no desuga, ouuke suru ka kangaete mo yoroshii deshouka", kr: "고맙지만 받아들일지 생각해 봐도 될까요?" },

    // 035 ～ 계십니까?
    { jp: "営業2課の田中様はいらっしゃいますか？", ro: "eigyou nika no tanaka sama wa irasshaimasuka", kr: "영업2과 다니카 님 계십니까?" },
    { jp: "デザインチームのキム・ソンホ室長はいらっしゃいますか？", ro: "dezain chiimu no kimu sonho shicchou wa irasshaimasuka", kr: "디자인팀 김성호 실장님 계십니까?" },
    { jp: "広報担当の方はいらっしゃいますか？", ro: "kouhou tantou no kata wa irasshaimasuka", kr: "홍보 담당자분 계십니까?" },
    { jp: "早川商事の伊藤と申しますが、総務チームの斉藤係長はいらっしゃいますか？", ro: "hayakawa shouji no itou to moushimasuga, soumu chiimu no saitou kachou wa irasshaimasuka", kr: "하야카와상사의 이토라고 하는데요, 총무팀 사이토 계장님 계십니까?" },
    { jp: "早川物産の朴と申します。CSの橋本チーム長はいらっしゃいますか？", ro: "hayakawa bussan no paku to moushimasu. shiiesu no hashimoto chiimuchou wa irasshaimasuka", kr: "하야카와물삼의 박이라고 합니다. CS의 하시모토 팀장님 계십니까?" },
    { jp: "はい、少々お待ちください。", ro: "hai, shoushou omachi kudasai", kr: "네, 잠시만 기다려 주세요" },

    // 036 ～ 전화인가요?
    { jp: "田中様のお電話でしょうか？", ro: "tanaka sama no odenwa deshouka", kr: "다나카 님 전화인가요?" },
    { jp: "イ・ヘリン様のお電話でしょうか？", ro: "i herin sama no odenwa deshouka", kr: "이혜린 님 전화인가요?" },
    { jp: "東京物産の鈴木と申しますが、松本様のお電話でしょうか？", ro: "toukyou bussan no suzuki to moushimasuga, matsumoto sama no odenwa deshouka", kr: "도쿄물산의 스즈키라고 하는데요. 마쓰모토 님 전화인가요?" },
    { jp: "吉田様の携帯電話でしょうか？", ro: "yoshida sama no keitai denwa deshouka", kr: "요시다 님 휴대폰인가요?" },
    { jp: "日本工業のハンと申しますが、田中様のお電話でしょうか？", ro: "nihon kougyou no han to moushimasuga, tanaka sama no odenwa deshouka", kr: "일본공업의 한이라고 하는데요. 다나카 님 전화인가요?" },
    { jp: "はい、田中です。いつもお世話になっております。", ro: "hai, tanaka desu. itsumo osewa ni natte orimasu", kr: "네, 다나카입니다. 늘 신세 지고 있습니다." },

    // 037 ～입니다
    { jp: "鈴木でございます。", ro: "suzuki de gozaimasu", kr: "스즈키입니다" },
    { jp: "株式会社日光でございます。", ro: "kabushikigaisha nikkou de gozaimasu", kr: "주식회사 닛코입니다" },
    { jp: "居酒屋はな新宿店でございます。", ro: "izakaya hana shinjukuten de gozaimasu", kr: "이자카야 하나 신주쿠점입니다" },
    { jp: "お電話代わりました。田中です。", ro: "odenwa kawarimashita. tanaka desu", kr: "전화 바꿨습니다. 다나카입니다" },
    { jp: "お電話ありがとうございます。日光建設でございます。", ro: "odenwa arigatou gozaimasu. nikkou kensetsu de gozaimasu", kr: "전화 주셔서 감사합니다. 닛코건설입니다" },
    { jp: "いつもお世話になっております。韓国商事でございます。", ro: "itsumo osewa ni natte orimasu. kankoku shouji de gozaimasu", kr: "항상 신세 지고 있습니다. 한국상사입니다" },

    // 038 ～이시군요
    { jp: "田中様でいらっしゃいますね。", ro: "tanaka sama de irasshaimasu ne", kr: "다나카 님이시군요" },
    { jp: "ご家族の方でいらっしゃいますね。", ro: "gokazoku no kata de irasshaimasu ne", kr: "가족분이시군요" },
    { jp: "ソウル商事の朴部長でいらっしゃいますね。", ro: "souru shouji no paku buchou de irasshaimasu ne", kr: "서울상사의 박 부장님이시군요" },
    { jp: "14時にご予約の山田様でいらっしゃいますね。", ro: "juuyonji ni goyoyaku no yamada sama de irasshaimasu ne", kr: "14시에 약속하신 야마다 님이시군요" },
    { jp: "よつば商事の清水です。営業部の田中部長はいらっしゃいますか？", ro: "yotsuba shouji no shimizu desu. eigyoubu no tanaka buchou wa irasshaimasuka", kr: "요쓰바상사의 시미즈입니다. 영업부 다나카 부장님 계십니까?" },
    { jp: "よつば商事の清水様でいらっしゃいますね。少々お待ちください。", ro: "yotsuba shouji no shimizu sama de irasshaimasu ne. shoushou omachi kudasai", kr: "요쓰바상사의 시미즈 님이시군요. 잠시만 기다려 주세요" },

    // 039 죄송하지만 ～
    { jp: "恐れ入りますが、お名前を伺ってもよろしいでしょうか？", ro: "osoreirimasuga, onamae o ugattemo yoroshii deshouka", kr: "죄송하지만 성함을 여쭤봐도 될까요?" },
    { jp: "恐れ入りますが、どちらへおかけでしょうか？", ro: "osoreirimasuga, dochira e okake deshouka", kr: "죄송하지만 어디에 거신 건가요?" },
    { jp: "恐れ入りますが、少々お待ちいただけますでしょうか？", ro: "osoreirimasuga, shoushou omachi itadakemasu deshouka", kr: "죄송하지만 잠시 기다려 주시겠습니까?" },
    { jp: "恐れ入りますが、ご用件を伺ってもよろしいでしょうか？", ro: "osoreirimasuga, goyouken o ugattemo yoroshii deshouka", kr: "죄송하지만 용건을 여쭤봐도 되겠습니까?" },
    { jp: "総務部の山口様はいらっしゃいますか？", ro: "soumubu no yamaguchi sama wa irasshaimasuka", kr: "총무부의 야마구치 님 계십니까?" },
    { jp: "恐れ入りますが、もう一度お名前を伺ってもよろしいでしょうか？", ro: "osoreirimasuga, mou ichido onamae o ugattemo yoroshii deshouka", kr: "죄송하지만 다시 한번 성함을 여쭤봐도 되겠습니까?" },

    // 040 ～에게 연결해 드리겠습니다
    { jp: "山田にお繋ぎいたします。", ro: "yamada ni otsunagi itashimasu", kr: "야마다에게 연결해 드리겠습니다" },
    { jp: "担当者にお繋ぎいたします。", ro: "tantousha ni otsunagi itashimasu", kr: "담당자에게 연결해 드리겠습니다" },
    { jp: "カスタマーセンターにお繋ぎいたします。", ro: "kasutamaa sentaa ni otsunagi itashimasu", kr: "고객센터로 연결해 드리겠습니다" },
    { jp: "ただいま営業担当にお繋ぎいたします。", ro: "tadaima eigyou tantou ni otsunagi itashimasu", kr: "지금 영업 담당자에게 연결해 드리겠습니다" },
    { jp: "マーケティング課の山田部長はいらっしゃいますか？", ro: "maaketinguka no yamada buchou wa irasshaimasuka", kr: "마케팅과의 야마다 부장님은 계십니까?" },
    { jp: "はい、山田にお繋ぎいたします。少々お待ちください。", ro: "hai, yamada ni otsunagi itashimasu. shoushou omachi kudasai", kr: "네, 야마다에게 연결해 드리겠습니다. 잠시만 기다려 주세요" },

    // 041 지금 ～ 괜찮으세요?
    { jp: "今、お電話大丈夫でしょうか？", ro: "ima, odenwa daijoubu deshouka", kr: "지금 통화 괜찮으세요?" },
    { jp: "今、3分ほどお電話よろしいでしょうか？", ro: "ima, sanpun hodo odenwa yoroshii deshouka", kr: "지금 3분 정도 통화 괜찮으세요?" },
    { jp: "今、お時間よろしいでしょうか？", ro: "ima, ojikan yoroshii deshouka", kr: "지금 시간 괜찮으세요?" },
    { jp: "前回の契約書の件で、今少々よろしいでしょうか？", ro: "zenkai no keiyakusho no ken de, ima shoushou yoroshii deshouka", kr: "지난번 계약서 건으로 지금 잠시 괜찮으세요?" },
    { jp: "お忙しいところ恐縮ですが、今お電話大丈夫でしょうか？", ro: "oisogashii tokoro kyoushuku desuga, ima odenwa daijoubu deshouka", kr: "바쁘신데 죄송하지만, 지금 통화 괜찮으세요?" },
    { jp: "はい、大丈夫です。", ro: "hai, daijoubu desu", kr: "네, 괜찮습니다" },

    // 042 그때는 ～
    { jp: "その節はお世話になりました。", ro: "sono fushi wa osewa ni narimashita", kr: "그때는 신세 졌습니다" },
    { jp: "その節は大変失礼いたしました。", ro: "sono fushi wa taihen shitsurei itashimashita", kr: "그때는 대단히 실례했습니다" },
    { jp: "その節は助かりました。", ro: "sono fushi wa tasukarimashita", kr: "그때는 도움이 되었습니다" },
    { jp: "その節はいろいろとお気遣いいただき、ありがとうございました。", ro: "sono fushi wa iroiro to okizuukai itadaki, arigatou gozaimasu", kr: "그때는 이것저것 신경 써 주셔서 감사했습니다" },
    { jp: "その節はこちらの事情でご迷惑をおかけいたしました。", ro: "sono fushi wa kochira no jijou de gomeiwaku o okake itashimashita", kr: "그때는 저희쪽 사정 때문에 폐를 끼쳤습니다" },
    { jp: "いいえ、とんでもございません。", ro: "iie, tondemo gozaimasen", kr: "아뇨 천만에요" },

    // 043 ～건으로 전화드렸습니다
    { jp: "打ち合わせの件でお電話いたしました。", ro: "uchiawase no ken de odenwa itashimashita", kr: "미팅 건으로 전화드렸습니다" },
    { jp: "見積もりの件でお電話いたしました。", ro: "mitsumori no ken de odenwa itashimashita", kr: "견적 건으로 전화드렸습니다" },
    { jp: "来月の注文の件でお電話いたしました。", ro: "raigetsu no chuumon no ken de odenwa itashimashita", kr: "다음 달 주문 건으로 전화드렸습니다" },
    { jp: "先月分の支払いの件でお電話いたしました。", ro: "sengetsubun no shiharai no ken de odenwa itashimashita", kr: "지난달분 지불 건으로 전화드렸습니다" },
    { jp: "返品の件でお電話いたしました。", ro: "henpin no ken de odenwa itashimashita", kr: "반품 건으로 전화드렸습니다" },
    { jp: "はい、何か不都合な点などございましたでしょうか？", ro: "hai, nanika futsugou na ten nado gozaimashita deshouka", kr: "네, 무슨 불편한 점 등이 있었습니까?" },

    // 044 ～는 그 후 어떤가요?
    { jp: "状況はその後のいかがでしょうか？", ro: "joukyou wa sono go ikaga deshouka", kr: "상황은 그 후 어떤가요?" },
    { jp: "商品はその後のいかがでしょうか？", ro: "shouhin wa sono go ikaga deshouka", kr: "상품은 그 후 어떤가요?" },
    { jp: "機械の状態はその後のいかがでしょうか？", ro: "kikai no joutai wa sono go ikaga deshouka", kr: "기계 상태는 그 후 어떤가요?" },
    { jp: "新事業の進捗状況はその後のいかがでしょうか？", ro: "shinjigyou no shinchoku joukyou wa sono go ikaga deshouka", kr: "신사업 진행 상황은 그 후 어떻습니까?" },
    { jp: "売上はその後のいかがでしょうか？", ro: "uriage wa sono go ikaga deshouka", kr: "매출은 그 후 어떤가요?" },
    { jp: "おかげさまで順調です。", ro: "okagesama de junchou desu", kr: "덕분에 순조롭습니다" },

    // 045 ～는 언제쯤이 될까요?
    { jp: "いつ頃お戻りでしょうか？", ro: "itsu goro omodori deshouka", kr: "언제쯤 돌아오실까요?" },
    { jp: "いつ頃出張からお戻りでしょうか？", ro: "itsu goro shucchou kara omodori deshouka", kr: "언제쯤 출장에서 돌아오실까요?" },
    { jp: "次の出勤はいつ頃になりますでしょうか？", ro: "tsugi no shukkin wa itsu goro ni narimasu deshouka", kr: "다음 출근은 언제쯤이 될까요?" },
    { jp: "納期はいつ頃になりますでしょうか？", ro: "nouki wa itsu goro ni narimasu deshouka", kr: "납기는 언제쯤이 될까요?" },
    { jp: "あいにく、ただいま今井は海外出張中でございます。", ro: "ainiku, tadaima imai wa kaigai shucchou chuu de gozaimasu", kr: "공교롭게도 지금 이마이는 해외 출장 중입니다" },
    { jp: "いつ頃お戻りでしょうか？", ro: "itsu goro omodori deshouka", kr: "언제쯤 돌아오실까요?" },

    // 046 ～에 대해서 물어보고 싶은데요
    { jp: "サービスのご利用方法について伺いたいのですが。", ro: "saabisu no goyoryou houhou ni tsuite ukagaitai no desuga", kr: "서비스 이용 방법에 대해서 물어보고 싶은데요" },
    { jp: "機械の操作方法について伺いたいのですが。", ro: "kikai no sousa houhou ni tsuite ukagaitai no desuga", kr: "기계 조작 방법에 대해서 물어보고 싶은데요" },
    { jp: "契約書の内容について伺いたいのですが。", ro: "keiyakusho no naiyou ni tsuite ukagaitai no desuga", kr: "계약서 내용에 대해서 물어보고 싶은데요" },
    { jp: "取引開始の時期について伺いたいのですが。", ro: "torihiki kaishi no jiki ni tsuite ukagaitai no desuga", kr: "거래 시작 시기에 대해서 물어보고 싶은데요" },
    { jp: "御社で取り扱っている厨房用品について伺いたいのですが。", ro: "onsha de toriatsukatte iru chuubou youhin ni tsuite ukagaitai no desuga", kr: "귀사가 취급하고 있는 주방용품에 대해서 물어보고 싶은데요" },

    // 047 ～ 시간에 죄송합니다
    { jp: "夜分遅くに失礼いたします。", ro: "yabun osoku ni shitsurei itashimasu", kr: "밤늦은 시간에 죄송합니다" },
    { jp: "朝早くに失礼いたします。", ro: "asa hayaku ni shitsurei itashimasu", kr: "아침 이른 시간에 죄송합니다" },
    { jp: "お昼時に失礼いたします。", ro: "ohirudoki ni shitsurei itashimasu", kr: "점심시간에 죄송합니다" },
    { jp: "お忙しい時間に失礼いたします。", ro: "oisogashii jikan ni shitsurei itashimasu", kr: "바쁘신 시간에 죄송합니다" },
    { jp: "はい、佐藤でございます。", ro: "hai, satou de gozaimasu", kr: "네, 사토입니다" },
    { jp: "朝早くに失礼いたします。急ぎご相談したいことがありまして。", ro: "asa hayaku ni shitsurei itashimasu. isogi gosoudan shitai koto ga arimashite", kr: "아침 이른 시간에 죄송합니다. 급히 상의하고 싶은 일이 있어서요" },

    // 048 다시 전화드리겠습니다
    { jp: "確認して、折り返しお電話いたします。", ro: "kakunin shite, orikaeshi odenwa itashimasu", kr: "확인해서 다시 전화드리겠습니다" },
    { jp: "会社に戻ってから、折り返しお電話いたします。", ro: "kaisha ni modotte kara, orikaeshi odenwa itashimasu", kr: "회사에 돌아가서 다시 전화드리겠습니다" },
    { jp: "1時間後に、改めてお電話いたします。", ro: "ichijikango ni, aratamete odenwa itashimasu", kr: "1시간 후에 다시 전화드리겠습니다" },
    { jp: "ただいま会議中ですので、後ほど改めてお電話いたします。", ro: "tadaima kaigichuu desu node, nochihodo aratamete odenwa itashimasu", kr: "지금 회의 중이라서 나중에 다시 전화드리겠습니다" },
    { jp: "納期の件でお電話したのですが、今お電話大丈夫でしょうか？", ro: "nouki no ken de odenwa shita no desuga, ima odenwa daijoubu deshouka", kr: "납기 건으로 전화드렸는데요, 지금 통화 괜찮으세요?" },
    { jp: "これから外出ですので、15時以降に改めてお電話いたします。", ro: "korekara gaishutsu desu node, juugoji ikou ni aratamete odenwa itashimasu", kr: "지금부터 외근이라서 15시 이후에 다시 전화드리겠습니다" },

    // 049 ～하고 있는데요
    { jp: "ただいまキムは席を外しておりますが。", ro: "tadaima kimu wa seki o hazushite orimasuga", kr: "지금 김은 자리를 비웠는데요" },
    { jp: "石田は外出中でございますが。", ro: "ishida wa gaishutsu chuu de gozaimasuga", kr: "이시다는 외근 중인데요" },
    { jp: "朴は他の電話に出ておりますが。", ro: "paku wa hoka no denwa ni dete orimasuga", kr: "박은 다른 전화를 받고 있는데요" },
    { jp: "高橋は本日休みをいただいておりますが。", ro: "takahashi wa honjitsu yasumi o itadaite orimasuga", kr: "다카하시는 오늘 휴가인데요" },
    { jp: "営業部の石田は海外出張中でございますが。", ro: "eigyoubu no ishida wa kaigai shucchou chuu de gozaimasuga", kr: "영업부 이시다는 해외 출장 중인데요" },
    { jp: "そうですか。いつ頃お戻りでしょうか？", ro: "sou desuka. itsu goro omodori deshouka", kr: "그래요? 언제쯤 돌아오실까요?" },

    // 050 다시 한번 ～해 주시겠어요?
    { jp: "もう一度おっしゃっていただけますか？", ro: "mou ichido osshatte itadakemasuka", kr: "다시 한번 말씀해 주시겠어요?" },
    { jp: "もう一度お名前を教えていただけますか？", ro: "mou ichido onamae o oshiete itadakemasuka", kr: "다시 한번 성함을 알려 주시겠어요?" },
    { jp: "後でもう一度かけていただけますか？", ro: "ato de mou ichido kakete itadakemasuka", kr: "나중에 다시 한번 걸어 주시겠어요?" },
    { jp: "携帯電話にもう一度かけていただけますか？", ro: "keitai denwa ni mou ichido kakete itadakemasuka", kr: "휴대폰으로 다시 한번 걸어 주시겠어요?" },
    { jp: "お電話が聞き取りにくいのですが、もう一度おっしゃっていただけますか？", ro: "odenwa ga kikitorinikui no desuga, mou ichido osshatte itadakemasuka", kr: "전화가 잘 안 들리는데 다시 한번 말씀해 주시겠어요?" },
    { jp: "あ、申し訳ございません。営業部の林様はいらっしゃいますか？", ro: "a, moushiwake gozaimasen. eigyoubu no hayashi sama wa irasshaimasuka", kr: "아, 죄송합니다. 영업부 하야시 님 계십니까?" },

    // 051 ～라고 전해 주시겠어요?
    { jp: "伝言をお願いできますか？", ro: "dengon o onegai dekimasuka", kr: "전갈을 부탁해도 될까요?" },
    { jp: "田中様に、よろしくお伝えいただけますか？", ro: "tanaka sama ni, yoroshiku otsutae itadakemasuka", kr: "다나카 님께 안부 전해 주시겠어요?" },
    { jp: "お電話があったことだけ、お伝えいただけますか？", ro: "odenwa ga atta koto dake, otsutae itadakemasuka", kr: "전화 왔었다는 것만 전해 주시겠어요?" },
    { jp: "明日、こちらからお電話するとお伝えいただけますか？", ro: "ashita, kochira kara odenwa suru to otsutae itadakemasuka", kr: "내일 이쪽에서 전화드린다고 전해 주시겠어요?" },
    { jp: "あいにく、ただいま外出しておりますが。", ro: "ainiku, tadaima gaishutsu shite orimasuga", kr: "공교롭게도 지금 외출 중입니다만" },
    { jp: "では、戻られましたらお電話をいただきたいとお伝えいただけますか？", ro: "dewa, modoraretara odenwa o itadakitai to otsutae itadakemasuka", kr: "그럼 돌아오시면 전화 달라고 전해 주시겠어요?" },

    // 052 ～라고 전해 드리겠습니다
    { jp: "申し伝えます。", ro: "moushitsutaemasu", kr: "전해 드리겠습니다" },
    { jp: "確かに申し伝えます。", ro: "tashika ni moushitsutaemasu", kr: "확실히 전해 드리겠습니다" },
    { jp: "田中が戻りましたら、そのように申し伝えます。", ro: "tanaka ga modorimashitara, sono you ni moushitsutaemasu", kr: "다나카가 돌아오면 그렇게 전해 드리겠습니다" },
    { jp: "外出中ですので、戻り次第申し伝えます。", ro: "gaishutsuchuu desu node, modori shidai moushitsutaemasu", kr: "외출 중이라 돌아오는 대로 전해 드리겠습니다" },
    { jp: "恐れ入りますが、お電話があったことだけお伝えいただけますか？", ro: "osoreirimasuga, odenwa ga atta koto dake otsutae itadakemasuka", kr: "죄송하지만 전화 왔었다는 것만 전해 주시겠어요?" },
    { jp: "承知いたしました。確かに申し伝えます。", ro: "shouchi itashimashita. tashika ni moushitsutaemasu", kr: "알겠습니다. 확실히 전해 드리겠습니다" },

    // 053 실례했습니다 / 실례하겠습니다
    { jp: "失礼いたします。", ro: "shitsurei itashimasu", kr: "실례하겠습니다 (전화를 끊을 때 등)" },
    { jp: "お先に失礼いたします。", ro: "osaki ni shitsurei itashimasu", kr: "먼저 실례하겠습니다 (퇴근 시)" },
    { jp: "夜分に失礼いたしました。", ro: "yabun ni shitsurei itashimashita", kr: "밤늦게 실례했습니다" },
    { jp: "先日は失礼いたしました。", ro: "senjitsu wa shitsurei itashimashita", kr: "지난번에는 실례했습니다" },
    { jp: "では、失礼いたします。", ro: "dewa, shitsurei itashimasu", kr: "그럼 실례하겠습니다" },
    { jp: "はい、失礼いたします。", ro: "hai, shitsurei itashimasu", kr: "네, 실례하겠습니다" },

    // 054 ～부탁드립니다
    { jp: "よろしくお願いいたします。", ro: "yoroshiku onegai itashimasu", kr: "잘 부탁드립니다" },
    { jp: "ご検討をお願いいたします。", ro: "gokentou o onegai itashimasu", kr: "검토 부탁드립니다" },
    { jp: "ご指導をお願いいたします。", ro: "goshidou o onegai itashimasu", kr: "지도 부탁드립니다" },
    { jp: "今後ともよろしくお願いいたします。", ro: "kongo tomo yoroshiku onegai itashimasu", kr: "앞으로도 잘 부탁드립니다" },
    { jp: "本日はありがとうございました。", ro: "honjitsu wa arigatou gozaimasu", kr: "오늘은 감사합니다" },
    { jp: "こちらこそ。今後ともよろしくお願いいたします。", ro: "kochirakoso. kongo tomo yoroshiku onegai itashimasu", kr: "저야말로요. 앞으로도 잘 부탁드립니다" },

    // 055 ～을 뵙고 싶은데요
    { jp: "田中様にお目にかかりたいのですが。", ro: "tanaka sama ni omenikakaritai no desuga", kr: "다나카 님을 뵙고 싶은데요" },
    { jp: "担当の方にお目にかかりたいのですが。", ro: "tantou no kata ni omenikakaritai no desuga", kr: "담당자분을 뵙고 싶은데요" },
    { jp: "社長にお目にかかりたいのですが。", ro: "shachou ni omenikakaritai no desuga", kr: "사장님을 뵙고 싶은데요" },
    { jp: "直接お目にかかってご説明したいのですが。", ro: "chokusetsu omenikakatte gosetsumei shitai no desuga", kr: "직접 뵙고 설명드리고 싶은데요" },
    { jp: "恐れ入りますが、田中様にお目にかかりたいのですが。", ro: "osoreirimasuga, tanaka sama ni omenikakaritai no desuga", kr: "죄송하지만 다나카 님을 뵙고 싶은데요" },
    { jp: "あいにく、田中はただいま来客中でございます。", ro: "ainiku, tanaka wa tadaima raikyaku chuu de gozaimasu", kr: "공교롭게도 다나카는 지금 손님과 상담 중입니다" },

    // 056 ～과 약속을 했습니다
    { jp: "14時に約束しております。", ro: "juuyonji ni yakusoku shite orimasu", kr: "14시에 약속했습니다" },
    { jp: "本日お会いする約束をしております。", ro: "honjitsu oaisuru yakusoku o shite orimasu", kr: "오늘 만나기로 약속했습니다" },
    { jp: "田中様と15時にお会いする約束をいただいております。", ro: "tanaka sama to juugoji ni oaisuru yakusoku o itadaite orimasu", kr: "다나카 님과 15시에 만나기로 약속되어 있습니다" },
    { jp: "あ、はい。伺っております。", ro: "a, hai. ukagatte orimasu", kr: "아, 네. 들었습니다(알고 있습니다)" },
    { jp: "14時に田中様とお約束をいただいている、東京物産の鈴木と申します。", ro: "juuyonji ni tanaka sama to oyakusoku o itadaite iru, toukyou bussan no suzuki to moushimasu", kr: "14시에 다나카 님과 약속한 도쿄물산의 스즈키라고 합니다" },
    { jp: "鈴木様ですね。お待ちしておりました。", ro: "suzuki sama desu ne. omachi shite orimashita", kr: "스즈키 님이시군요. 기다리고 있었습니다" },

    // 057 약속은 안 했습니다만 ～
    { jp: "約束はしておりませんが、近くまで来ましたので。", ro: "yakusoku wa shite orimasen ga, chikaku made kimashita node", kr: "약속은 안 했습니다만 근처에 왔길래" },
    { jp: "予約はしておりませんが、お会いできますでしょうか？", ro: "yoyaku wa shite orimasen ga, oai dekimasu deshouka", kr: "예약은 안 했습니다만 만날 수 있을까요?" },
    { jp: "お約束はしておりませんが、ご挨拶だけでもと思いまして。", ro: "oyakusoku wa shite orimasen ga, goaisatsu dake demo to omoimashite", kr: "약속은 안 했습니다만 인사라도 드릴까 해서요" },
    { jp: "お忙しいところ申し訳ございません。お約束はしておりませんが。", ro: "oisogashii tokoro moushiwake gozaimasen. oyakusoku wa shite orimasen ga", kr: "바쁘신데 죄송합니다. 약속은 안 했습니다만" },
    { jp: "あいにく、本日は予定が詰まっておりまして。", ro: "ainiku, honjitsu wa yotei ga tsumatte orimashite", kr: "공교롭게도 오늘은 일정이 꽉 차 있어서요" },

    // 058 ～를 기다리고 있습니다
    { jp: "お待ちしておりました。", ro: "omachi shite orimashita", kr: "기다리고 있었습니다" },
    { jp: "ご連絡をお待ちしております。", ro: "gorenraku o omachi shite orimasu", kr: "연락 기다리고 있겠습니다" },
    { jp: "お返事をお待ちしております。", ro: "ohenji o omachi shite orimasu", kr: "답변 기다리고 있겠습니다" },
    { jp: "皆様のお越しをお待ちしております。", ro: "minasama no okoshi o omachi shite orimasu", kr: "여러분의 방문을 기다리고 있겠습니다" },
    { jp: "昨日は失礼いたしました。資料を持ってまいりました。", ro: "kinou wa shitsurei itashimashita. shiryou o motte mairimashita", kr: "어제는 실례했습니다. 자료를 가지고 왔습니다" },
    { jp: "あ、鈴木様。お待ちしておりました。どうぞこちらへ。", ro: "a, suzuki sama. omachi shite orimashita. douzo kochira e", kr: "아, 스즈키 님. 기다리고 있었습니다. 어서 이쪽으로" },

    // 059 바쁘신 와중에 ～
    { jp: "お忙しいところ、ありがとうございます。", ro: "oisogashii tokoro, arigatou gozaimasu", kr: "바쁘신 와중에 감사합니다" },
    { jp: "ご多忙の折、恐縮ですが。", ro: "gotabou no ori, kyoushuku desuga", kr: "바쁘신 와중에 송구스럽습니다만" },
    { jp: "お忙しいところ、お時間をいただきありがとうございます。", ro: "oisogashii tokoro, ojikan o itadaki arigatou gozaimasu", kr: "바쁘신 와중에 시간을 내주셔서 감사합니다" },
    { jp: "お忙しい中、ご出席いただきありがとうございます。", ro: "oisogashii naka, goshusseki itadaki arigatou gozaimasu", kr: "바쁜 와중에 참석해 주셔서 감사합니다" },
    { jp: "いえいえ、こちらこそ遠くからお越しいただきありがとうございます。", ro: "ieie, kochirakoso tooku kara okoshi itadaki arigatou gozaimasu", kr: "아니요, 저야말로 멀리서 와 주셔서 감사합니다" },

    // 060 들어오세요 / 앉으세요
    { jp: "どうぞお入りください。", ro: "douzo ohairi kudasai", kr: "어서 들어오세요" },
    { jp: "どうぞおかけください。", ro: "douzo okake kudasai", kr: "어서 앉으세요" },
    { jp: "奥の席へどうぞ。", ro: "oku no seki e douzo", kr: "안쪽 자리로 가시죠" },
    { jp: "どうぞこちらにお座りください。", ro: "douzo kochira ni osuwari kudasai", kr: "어서 이쪽에 앉으세요" },
    { jp: "失礼いたします。", ro: "shitsurei itashimasu", kr: "실례하겠습니다" },
    { jp: "どうぞおかけください。すぐにお茶をお持ちします。", ro: "douzo okake kudasai. sugu ni ocha o omochi shimasu", kr: "어서 앉으세요. 금방 차를 내오겠습니다" },

    // 061 기다리게 해서 ～
    { jp: "お待たせいたしました。", ro: "omatase itashimashita", kr: "기다리게 했습니다 (오래 기다리셨습니다)" },
    { jp: "大変お待たせいたしました。", ro: "taihen omatase itashimashita", kr: "대단히 오래 기다리게 했습니다" },
    { jp: "長くお待たせして申し訳ございません。", ro: "nagaku omatase shite moushiwake gozaimasen", kr: "오래 기다리게 해서 죄송합니다" },
    { jp: "お待たせしてすみません。少し手間取ってしまいまして。", ro: "omatase shite sumimasen. sukoshi temadotte shimaimashite", kr: "기다리게 해서 미안합니다. 시간이 좀 걸려서요" },
    { jp: "いいえ、大丈夫ですよ。", ro: "iie, daijoubu desu yo", kr: "아니요, 괜찮습니다" },

    // 062 ～를 잘 부탁드립니다
    { jp: "田中をよろしくお願いいたします。", ro: "tanaka o yoroshiku onegai itashimasu", kr: "다나카를 잘 부탁드립니다" },
    { jp: "弊社をよろしくお願いいたします。", ro: "heisha o yoroshiku onegai itashimasu", kr: "저희 회사를 잘 부탁드립니다" },
    { jp: "新製品をよろしくお願いいたします。", ro: "shinseihin o yoroshiku onegai itashimasu", kr: "신제품을 잘 부탁드립니다" },
    { jp: "今期もよろしくお願いいたします。", ro: "konki mo yoroshiku onegai itashimasu", kr: "이번 분기도 잘 부탁드립니다" },
    { jp: "こちらが新しく担当になる田中です。", ro: "kochira ga atarashiku tantou ni naru tanaka desu", kr: "이쪽이 새로 담당을 맡게 된 다나카입니다" },
    { jp: "田中をよろしくお願いいたします。", ro: "tanaka o yoroshiku onegai itashimasu", kr: "다나카를 잘 부탁드립니다" },

    // 063 ～에 대해서입니다만
    { jp: "スケジュールの件ですが。", ro: "sukejuuru no ken desuga", kr: "일정 건에 대해서입니다만" },
    { jp: "納期の件ですが。", ro: "nouki no ken desuga", kr: "납기 건에 대해서입니다만" },
    { jp: "お見積もりの件ですが。", ro: "omitsumori no ken desuga", kr: "견적 건에 대해서입니다만" },
    { jp: "先日お話しした件ですが。", ro: "senjitsu ohanashi shita ken desuga", kr: "지난번 말씀드린 건에 대해서입니다만" },
    { jp: "昨日の会議の件ですが、少し変更があります。", ro: "kinou no kaigi no ken desuga, sukoshi henkou ga arimasu", kr: "어제 회의 건입니다만, 약간 변경이 있습니다" },
    { jp: "はい, 伺います。", ro: "hai, ukagaimasu", kr: "네, 듣겠습니다" },

    // 064 ～을 가지고 왔습니다
    { jp: "資料を持ってまいりました。", ro: "shiryou o motte mairimashita", kr: "자료를 가지고 왔습니다" },
    { jp: "サンプルを持ってまいりました。", ro: "sanpuru o motte mairimashita", kr: "샘플을 가지고 왔습니다" },
    { jp: "契約書を持ってまいりました。", ro: "keiyakusho o motte mairimashita", kr: "계약서를 가지고 왔습니다" },
    { jp: "本日は、新製品の試供品を持ってまいりました。", ro: "honjitsu wa, shinseihin no shikyouhin o motte mairimashita", kr: "오늘은 신제품 견본을 가지고 왔습니다" },
    { jp: "わざわざありがとうございます。", ro: "wazawaza arigatou gozaimasu", kr: "일부러 감사합니다" },

    // 065 ～을 봐 주세요
    { jp: "資料をご覧ください。", ro: "shiryou o goran kudasai", kr: "자료를 봐 주세요" },
    { jp: "こちらをご覧ください。", ro: "kochira o goran kudasai", kr: "이쪽을 봐 주세요" },
    { jp: "お手元のパンフレットをご覧ください。", ro: "otemoto no panfuretto o goran kudasai", kr: "가지고 계신 팸플릿을 봐 주세요" },
    { jp: "画面のグラフをご覧ください。", ro: "gamen no gurafu o goran kudasai", kr: "화면의 그래프를 봐 주세요" },
    { jp: "では、3ページをご覧ください。", ro: "dewa, sanpeeji o goran kudasai", kr: "그럼 3페이지를 봐 주세요" },
    { jp: "はい、見ました。", ro: "hai, mimashita", kr: "네, 봤습니다" },

    // 066 ～라고 생각합니다
    { jp: "そう思います。", ro: "sou omoimasu", kr: "그렇게 생각합니다" },
    { jp: "いい案だと思います。", ro: "ii an da to omoimasu", kr: "좋은 안이라고 생각합니다" },
    { jp: "難しいと思います。", ro: "muzukashii to omoimasu", kr: "어렵다고 생각합니다" },
    { jp: "それは少し高いと思います。", ro: "sore wa sukoshi takai to omoimasu", kr: "그것은 조금 비싸다고 생각합니다" },
    { jp: "今回のプロジェクト、成功するでしょうか？", ro: "konkai no purojekuto, seikou suru deshouka", kr: "이번 프로젝트, 성공할까요?" },
    { jp: "はい、必ず成功すると思います。", ro: "hai, kanarazu seikou suru to omoimasu", kr: "네, 반드시 성공할 거라고 생각합니다" },

    // 067 ～인 것 같습니다
    { jp: "そのようです。", ro: "sono you desu", kr: "그런 것 같습니다" },
    { jp: "問題ないようです。", ro: "mondai nai you desu", kr: "문제없는 것 같습니다" },
    { jp: "少し遅れるようです。", ro: "sukoshi okureru you desu", kr: "조금 늦을 것 같습니다" },
    { jp: "田中さんはもう帰ったようです。", ro: "tanaka san wa mou kaetta you desu", kr: "다나카 씨는 벌써 퇴근한 것 같습니다" },
    { jp: "部長、もうすぐ到着されますか？", ro: "buchou, mou sugu touchaku saremasuka", kr: "부장님, 곧 도착하시나요?" },
    { jp: "はい、あと5分ほどで到着されるようです。", ro: "hai, ato gofun hodo de touchaku sareru you desu", kr: "네, 앞으로 5분 정도면 도착하실 것 같습니다" },

    // 068 ～할 계획입니다
    { jp: "実施する予定です。", ro: "jisshi suru yotei desu", kr: "실시할 계획입니다" },
    { jp: "来月伺う予定です。", ro: "raigetsu ukagau yotei desu", kr: "다음 달에 방문할 계획입니다" },
    { jp: "明日連絡する予定です。", ro: "ashita renraku suru yotei desu", kr: "내일 연락할 계획입니다" },
    { jp: "新商品の発売はいつですか？", ro: "shinshouhin no hatsubai wa itsu desuka", kr: "신상품 발매는 언제입니까?" },
    { jp: "来週の月曜日に発売する予定です。", ro: "raishuu no getsuyoubi ni hatsubai suru yotei desu", kr: "다음 주 월요일에 발매할 계획입니다" },

    // 069 ～할까 생각 중입니다
    { jp: "検討しようかと思っています。", ro: "kentou shiyou ka to omotte imasu", kr: "검토해 볼까 생각 중입니다" },
    { jp: "相談しようかと思っています。", ro: "soudan shiyou ka to omotte imasu", kr: "상담해 볼까 생각 중입니다" },
    { jp: "買い換えようかと思っています。", ro: "kaikaeyou ka to omotte imasu", kr: "교체할까(새로 살까) 생각 중입니다" },
    { jp: "来年は海外進出をしようかと思っています。", ro: "rainen wa kaigai shinshutsu o shiyou ka to omotte imasu", kr: "내년에는 해외 진출을 해 볼까 생각 중입니다" },
    { jp: "それは素晴らしいですね。", ro: "sore wa subarashii desu ne", kr: "그거 훌륭하네요" },

    // 070 ～할 필요가 있습니다
    { jp: "確認する必要があります。", ro: "kakunin suru hitsuyou ga arimasu", kr: "확인할 필요가 있습니다" },
    { jp: "修正する必要があります。", ro: "shuusei suru hitsuyou ga arimasu", kr: "수정할 필요가 있습니다" },
    { jp: "話し合う必要があります。", ro: "hanashiau hitsuyou ga arimasu", kr: "의논할 필요가 있습니다" },
    { jp: "一度、現場を見る必要がありますね。", ro: "ichido, genba o miru hitsuyou ga arimasu ne", kr: "한번 현장을 볼 필요가 있겠네요" },
    { jp: "はい、私もそう思います。", ro: "hai, watashi mo sou omoimasu", kr: "네, 저도 그렇게 생각합니다" },

    // 071 ～이 될까요? (가능할까요?)
    { jp: "可能でしょうか？", ro: "kanou deshouka", kr: "가능할까요?" },
    { jp: "今日中にお願いできますでしょうか？", ro: "kyoujuu ni onegai dekimasu deshouka", kr: "오늘 중으로 부탁드려도 될까요?" },
    { jp: "明日でもよろしいでしょうか？", ro: "ashita demo yoroshii deshouka", kr: "내일이라도 괜찮을까요?" },
    { jp: "少しお安くなりますでしょうか？", ro: "sukoshi oyasuku narimasu deshouka", kr: "조금 싸게 될까요?" },
    { jp: "10%ほどお値引き可能でしょうか？", ro: "juupaasento hodo onebiki kanou deshouka", kr: "10% 정도 할인 가능할까요?" },
    { jp: "上司に確認してみます。", ro: "joushi ni kakunin shite mimasu", kr: "상사에게 확인해 보겠습니다" },

    // 072 ～할 리가 없습니다
    { jp: "そんなはずはありません。", ro: "sonna hazu wa arimasen", kr: "그럴 리가 없습니다" },
    { jp: "間違っているはずはありません。", ro: "machigatte iru hazu wa arimasen", kr: "틀렸을 리가 없습니다" },
    { jp: "届いていないはずはありません。", ro: "todoite inai hazu wa arimasen", kr: "도착하지 않았을 리가 없습니다" },
    { jp: "田中さんが忘れるはずはありません。", ro: "tanaka san ga wasureru hazu wa arimasen", kr: "다나카 씨가 잊었을 리가 없습니다" },
    { jp: "まだ資料が届いていないそうですが。", ro: "mada shiryou ga todoite inai sou desuga", kr: "아직 자료가 도착하지 않았다고 하는데요" },
    { jp: "おかしいですね。昨日送ったので、届いていないはずはありません。", ro: "okashii desu ne. kinou okutta node, todoite inai hazu wa arimasen", kr: "이상하네요. 어제 보냈으니 도착하지 않았을 리가 없습니다" },

    // 073 ～하는 도중입니다
    { jp: "確認しているところです。", ro: "kakunin shite iru tokoro desu", kr: "확인하는 중입니다" },
    { jp: "作成しているところです。", ro: "sakusei shite iru tokoro desu", kr: "작성하는 중입니다" },
    { jp: "調べているところです。", ro: "shirabete iru tokoro desu", kr: "조사하는 중입니다" },
    { jp: "向かっているところです。", ro: "mukatte iru tokoro desu", kr: "가는 중입니다" },
    { jp: "見積書はまだですか？", ro: "mitsumorisyo wa mada desuka", kr: "견적서는 아직인가요?" },
    { jp: "すみません、今作成しているところです。", ro: "sumimasen, ima sakusei shite iru tokoro desu", kr: "죄송합니다, 지금 작성하는 중입니다" },

    // 074 ～해주시겠어요? (부드러운 명령/의뢰)
    { jp: "お待ちいただけますか？", ro: "omachi itadakemasuka", kr: "기다려 주시겠어요?" },
    { jp: "教えていただけますか？", ro: "oshiete itadakemasuka", kr: "가르쳐 주시겠어요?" },
    { jp: "見せていただけますか？", ro: "misete itadakemasuka", kr: "보여 주시겠어요?" },
    { jp: "書いていただけますか？", ro: "kaite itadakemasuka", kr: "써 주시겠어요?" },
    { jp: "この書類にサインをいただけますか？", ro: "kono shorui ni sain o itadakemasuka", kr: "이 서류에 사인을 해 주시겠어요?" },
    { jp: "はい, かしこまりました。", ro: "hai, kashikomarimashita", kr: "네, 알겠습니다" },

    // 075 ～하려고 합니다 (의지)
    { jp: "始めようと思います。", ro: "hajimeyou to omoimasu", kr: "시작하려고 합니다" },
    { jp: "報告しようと思います。", ro: "houkokuyou to omoimasu", kr: "보고하려고 합니다" },
    { jp: "相談しようと思います。", ro: "soudanyou to omoimasu", kr: "상담하려고 합니다" },
    { jp: "明日伺おうと思います。", ro: "ashita ukagayou to omoimasu", kr: "내일 방문하려고 합니다" },
    { jp: "いつ頃いらっしゃいますか？", ro: "itsu goro irasshaimasuka", kr: "언제쯤 오시나요?" },
    { jp: "午後の2時頃に伺おうと思います。", ro: "gogo no niji goro ni ukagayou to omoimasu", kr: "오후 2시쯤에 방문하려고 합니다" },

    // 076 ～한 적이 있습니까?
    { jp: "会ったことがありますか？", ro: "atta koto ga arimasuka", kr: "만난 적이 있습니까?" },
    { jp: "行ったことがありますか？", ro: "itta koto ga arimasuka", kr: "간 적이 있습니까?" },
    { jp: "使ったことがありますか？", ro: "tsukatta koto ga arimasuka", kr: "쓴 적이 있습니까?" },
    { jp: "弊社の製品をお使いになったことがありますか？", ro: "heisha no seihin o otsukai ni natta koto ga arimasuka", kr: "저희 회사 제품을 사용해 보신 적이 있습니까?" },
    { jp: "いいえ, ありません。", ro: "iie, arimasen", kr: "아니요, 없습니다" },

    // 077 ～하지 않으면 안 됩니다 (해야 합니다)
    { jp: "行かなければなりません。", ro: "ikanakereba narimasen", kr: "가야만 합니다" },
    { jp: "連絡しなければなりません。", ro: "renraku shinakereba narimasen", kr: "연락해야만 합니다" },
    { jp: "急がなければなりません。", ro: "isoganakereba narimasen", kr: "서둘러야만 합니다" },
    { jp: "今日中に終わらせなければなりません。", ro: "kyoujuu ni owarasenakereba narimasen", kr: "오늘 중으로 끝내야만 합니다" },
    { jp: "大変ですね。お手伝いしましょうか？", ro: "taihen desu ne. otetsudai shimashouka", kr: "힘드시겠네요. 도와드릴까요?" },

    // 078 ～하지 않아도 됩니다
    { jp: "来なくてもいいです。", ro: "konakute mo ii desu", kr: "오지 않아도 됩니다" },
    { jp: "急がなくてもいいです。", ro: "isoganakute mo ii desu", kr: "서두르지 않아도 됩니다" },
    { jp: "書かなくてもいいです。", ro: "kakanakute mo ii desu", kr: "쓰지 않아도 됩니다" },
    { jp: "明日の会議、出席しなければなりませんか？", ro: "ashita no kaigi, shusseki shinakereba narimasenka", kr: "내일 회의, 참석해야 하나요?" },
    { jp: "いえ, 出席しなくてもいいですよ。", ro: "ie, shusseki shinakute mo ii desu yo", kr: "아니요, 참석하지 않아도 됩니다" },

    // 079 ～해도 됩니다
    { jp: "入ってもいいですか？", ro: "haitte mo ii desuka", kr: "들어가도 됩니까?" },
    { jp: "座ってもいいですか？", ro: "suwatte mo ii desuka", kr: "앉아도 됩니까?" },
    { jp: "見てもいいですか？", ro: "mite mo ii desuka", kr: "봐도 됩니까?" },
    { jp: "使ってもいいですか？", ro: "tsukatte mo ii desuka", kr: "써도 됩니까?" },
    { jp: "このパンフレット, いただいてもいいですか？", ro: "kono panfuretto, itadaite mo ii desuka", kr: "이 팸플릿, 가져가도(받아도) 될까요?" },
    { jp: "はい, どうぞ。", ro: "hai, douzo", kr: "네, 그러세요" },

    // 080 ～해서는 안 됩니다
    { jp: "入ってはいけません。", ro: "haitte wa ikemasen", kr: "들어가서는 안 됩니다" },
    { jp: "忘れてはいけません。", ro: "wasurete wa ikemasen", kr: "잊어서는 안 됩니다" },
    { jp: "触ってはいけません。", ro: "sawatte wa ikemasen", kr: "만져서는 안 됩니다" },
    { jp: "ここに車を止めてはいけません。", ro: "koko ni kuruma o tomete wa ikemasen", kr: "여기에 차를 세워서는 안 됩니다" },
    { jp: "すみません, すぐに動かします。", ro: "sumimasen, sugu ni ugokashimasu", kr: "죄송합니다, 바로 옮기겠습니다" },

    // 081 ～하는 것이 좋습니다
    { jp: "確認したほうがいいです。", ro: "kakunin shita hou ga ii desu", kr: "확인하는 것이 좋습니다" },
    { jp: "急いだほうがいいです。", ro: "isoida hou ga ii desu", kr: "서두르는 것이 좋습니다" },
    { jp: "連絡したほうがいいです。", ro: "renraku shita hou ga ii desu", kr: "연락하는 것이 좋습니다" },
    { jp: "一度、担当者に聞いたほうがいいですよ。", ro: "ichido, tantousha ni kiita hou ga ii desu yo", kr: "한번 담당자에게 물어보는 것이 좋습니다" },
    { jp: "わかりました。そうします。", ro: "wakarimashita. sou shimasu", kr: "알겠습니다. 그렇게 할게요" },

    // 082 ～하는 것보다 ～가 좋습니다
    { jp: "電話するよりメールのほうがいいです。", ro: "denwa suru yori meeru no hou ga ii desu", kr: "전화하는 것보다 메일이 좋습니다" },
    { jp: "買うより借りるほうがいいです。", ro: "kau yori kariru hou ga ii desu", kr: "사는 것보다 빌리는 것이 좋습니다" },
    { jp: "一人で行くより二人で行くほうがいいです。", ro: "hitori de iku yori futari de iku hou ga ii desu", kr: "혼자 가는 것보다 둘이 가는 것이 좋습니다" },
    { jp: "A案よりB案のほうがいいと思います。", ro: "eean yori biian no hou ga ii to omoimasu", kr: "A안보다 B안이 좋다고 생각합니다" },
    { jp: "私も同感です。", ro: "watashi mo doukan desu", kr: "저도 동감입니다" },

    // 083 ～할 수 있습니다
    { jp: "できます。", ro: "dekimasu", kr: "할 수 있습니다" },
    { jp: "明日ならできます。", ro: "ashita nara dekimasu", kr: "내일이라면 할 수 있습니다" },
    { jp: "一人でできます。", ro: "hitori de dekimasu", kr: "혼자서 할 수 있습니다" },
    { jp: "日本語が話せますか？", ro: "nihongo ga hanasemasuka", kr: "일본어를 할 수 있습니까?" },
    { jp: "はい, 少し話せます。", ro: "hai, sukoshi hanasemasu", kr: "네, 조금 할 수 있습니다" },

    // 084 ～할 수 없습니다
    { jp: "できません。", ro: "dekimasen", kr: "할 수 없습니다" },
    { jp: "今日中はできません。", ro: "kyoujuu wa dekimasen", kr: "오늘 중으로는 할 수 없습니다" },
    { jp: "安くすることはできません。", ro: "yasuku suru koto wa dekimasen", kr: "싸게 할 수는 없습니다" },
    { jp: "これ以上の値下げはできません。", ro: "kore ijou no nesage wa dekimasen", kr: "이 이상의 가격 인하는 할 수 없습니다" },
    { jp: "そこをなんとか、お願いします。", ro: "soko o nantoka, onegai shimasu", kr: "그걸 어떻게 좀 부탁드립니다" },

    // 085 ～가 필요합니다
    { jp: "書類が必要です。", ro: "shorui ga hitsuyou desu", kr: "서류가 필요합니다" },
    { jp: "時間が必要です。", ro: "jikan ga hitsuyou desu", kr: "시간이 필요합니다" },
    { jp: "はんこが必要です。", ro: "hanko ga hitsuyou desu", kr: "도장이 필요합니다" },
    { jp: "手続きには何が必要ですか？", ro: "tetsuzuki ni wa nani ga hitsuyou desuka", kr: "절차에는 무엇이 필요합니까?" },
    { jp: "身分証明書が必要です。", ro: "mibun shoumeisho ga hitsuyou desu", kr: "신분증이 필요합니다" },

    // 086 ～가 필요 없습니다
    { jp: "必要ありません。", ro: "hitsuyou arimasen", kr: "필요 없습니다" },
    { jp: "連絡は必要ありません。", ro: "renraku wa hitsuyou arimasen", kr: "연락은 필요 없습니다" },
    { jp: "心配する必要はありません。", ro: "shinpai suru hitsuyou wa arimasen", kr: "걱정할 필요 없습니다" },
    { jp: "領収書は必要ですか？", ro: "ryoushuusho wa hitsuyou desuka", kr: "영수증이 필요합니까?" },
    { jp: "いいえ, 必要ありません。", ro: "iie, hitsuyou arimasen", kr: "아니요, 필요 없습니다" },

    // 087 ～가 있습니까?
    { jp: "ありますか？", ro: "arimasuka", kr: "있습니까? (사물)" },
    { jp: "質問がありますか？", ro: "shitsumon ga arimasuka", kr: "질문이 있습니까?" },
    { jp: "意見がありますか？", ro: "iken ga arimasuka", kr: "의견이 있습니까?" },
    { jp: "何か問題がありますか？", ro: "nanika mondai ga arimasuka", kr: "무슨 문제가 있습니까?" },
    { jp: "いいえ, 特にありません。", ro: "iie, toku ni arimasen", kr: "아니요, 딱히 없습니다" },

    // 088 ～가 없습니다
    { jp: "ありません。", ro: "arimasen", kr: "없습니다" },
    { jp: "時間がありません。", ro: "jikan ga arimasen", kr: "시간이 없습니다" },
    { jp: "在庫がありません。", ro: "zaiko ga arimasen", kr: "재고가 없습니다" },
    { jp: "今のところ、問題はありません。", ro: "ima no tokoro, mondai wa arimasen", kr: "현재로서는 문제는 없습니다" },
    { jp: "そうですか. 安心しました。", ro: "sou desuka. anshin shimashita", kr: "그렇군요. 안심했습니다" },

    // 089 ～을 알고 있습니까?
    { jp: "知っていますか？", ro: "shitte imasuka", kr: "알고 있습니까?" },
    { jp: "理由を知っていますか？", ro: "riyuu o shitte imasuka", kr: "이유를 알고 있습니까?" },
    { jp: "そのニュースを知っていますか？", ro: "sono nyuusu o shitte imasuka", kr: "그 뉴스를 알고 있습니까?" },
    { jp: "田中さんの連絡先を知っていますか？", ro: "tanaka san no renrakusaki o shitte imasuka", kr: "다나카 씨의 연락처를 알고 있습니까?" },
    { jp: "いいえ, 知りません。", ro: "iie, shirimasen", kr: "아니요, 모릅니다" },

    // 090 ～을 모릅니다
    { jp: "知りません。", ro: "shirimasen", kr: "모릅니다" },
    { jp: "詳しいことは知りません。", ro: "kuwashii koto wa shirimasen", kr: "자세한 것은 모릅니다" },
    { jp: "名前は知りません。", ro: "namae wa shirimasen", kr: "이름은 모릅니다" },
    { jp: "それについては、何も知りません。", ro: "sore ni tsuite wa, nanimo shirimasen", kr: "그것에 대해서는 아무것도 모릅니다" },
    { jp: "そうですか. 失礼しました。", ro: "sou desuka. shitsurei shimashita", kr: "그렇군요. 실례했습니다" },

    // 091 ～을 부탁합니다
    { jp: "お願いします。", ro: "onegai shimasu", kr: "부탁합니다" },
    { jp: "確認をお願いします。", ro: "kakunin o onegai shimasu", kr: "확인을 부탁합니다" },
    { jp: "返信をお願いします。", ro: "henshin o onegai shimasu", kr: "답장을 부탁합니다" },
    { jp: "これをコピーお願いします。", ro: "kore o kopii onegai shimasu", kr: "이것을 복사 부탁합니다" },
    { jp: "はい, 何枚ですか？", ro: "hai, nanmai desuka", kr: "네, 몇 장인가요?" },

    // 092 ～해주세요 (의뢰)
    { jp: "教えてください。", ro: "oshiete kudasai", kr: "가르쳐 주세요" },
    { jp: "待ってください。", ro: "matte kudasai", kr: "기다려 주세요" },
    { jp: "送ってください。", ro: "okutte kudasai", kr: "보내 주세요" },
    { jp: "連絡してください。", ro: "renraku shite kudasai", kr: "연락해 주세요" },
    { jp: "明日までに資料を送ってください。", ro: "ashita made ni shiryou o okutte kudasai", kr: "내일까지 자료를 보내 주세요" },
    { jp: "わかりました。送ります。", ro: "wakarimashita. okurimasu", kr: "알겠습니다. 보낼게요" },

    // 093 ～하지 마세요
    { jp: "言わないでください。", ro: "iwanai de kudasai", kr: "말하지 마세요" },
    { jp: "忘れないでください。", ro: "wasurenai de kudasai", kr: "잊지 마세요" },
    { jp: "開けないでください。", ro: "akenaide kudasai", kr: "열지 마세요" },
    { jp: "このことは、誰にも言わないでください。", ro: "kono koto wa, darenimo iwanai de kudasai", kr: "이 일은 아무에게도 말하지 마세요" },
    { jp: "はい, わかりました。", ro: "hai, wakarimashita", kr: "네, 알겠습니다" },

    // 094 ～입니까?
    { jp: "そうですか？", ro: "sou desuka", kr: "그렇습니까?" },
    { jp: "本当ですか？", ro: "hontou desuka", kr: "정말입니까?" },
    { jp: "大丈夫ですか？", ro: "daijoubu desuka", kr: "괜찮습니까?" },
    { jp: "これでいいですか？", ro: "kore de ii desuka", kr: "이걸로 좋습니까(됐습니까)?" },
    { jp: "はい, それでいいです。", ro: "hai, sore de ii desu", kr: "네, 그걸로 됐습니다" },

    // 095 ～은 무엇입니까?
    { jp: "何ですか？", ro: "nan desuka", kr: "무엇입니까?" },
    { jp: "お名前は何ですか？", ro: "onamae wa nan desuka", kr: "성함이 무엇입니까?" },
    { jp: "ご用件は何ですか？", ro: "goyouken wa nan desuka", kr: "용건이 무엇입니까?" },
    { jp: "お仕事は何ですか？", ro: "oshigoto wa nan desuka", kr: "직업이 무엇입니까?" },
    { jp: "エンジニアです。", ro: "enjinia desu", kr: "엔지니어입니다" },

    // 096 ～은 어디입니까?
    { jp: "どこですか？", ro: "doko desuka", kr: "어디입니까?" },
    { jp: "受付はどこですか？", ro: "uketsuke wa doko desuka", kr: "접수처는 어디입니까?" },
    { jp: "お手洗いはどこですか？", ro: "otearai wa doko desuka", kr: "화장실은 어디입니까?" },
    { jp: "会議室はどこですか？", ro: "kaigishitsu wa doko desuka", kr: "회의실은 어디입니까?" },
    { jp: "2階の突き当たりです。", ro: "nikai no tsukiatari desu", kr: "2층 끝입니다" },

    // 097 ～은 언제입니까?
    { jp: "いつですか？", ro: "itsu desuka", kr: "언제입니까?" },
    { jp: "会議はいつですか？", ro: "kaigi wa itsu desuka", kr: "회의는 언제입니까?" },
    { jp: "締め切りはいつですか？", ro: "shimekiri wa itsu desuka", kr: "마감은 언제입니까?" },
    { jp: "出発はいつですか？", ro: "shuppatsu wa itsu desuka", kr: "출발은 언제입니까?" },
    { jp: "明日の午前10時です。", ro: "ashita no gozen juuji desu", kr: "내일 오전 10시입니다" },

    // 098 ～은 누구입니까?
    { jp: "だれですか？", ro: "dare desuka", kr: "누구입니까?" },
    { jp: "担当者はだれですか？", ro: "tantousha wa dare desuka", kr: "담당자는 누구입니까?" },
    { jp: "責任者はだれですか？", ro: "sekinnsha wa dare desuka", kr: "책임자는 누구입니까?" },
    { jp: "あの方はだれですか？", ro: "ano kata wa dare desuka", kr: "저분은 누구입니까?" },
    { jp: "弊사의社長です。", ro: "heisha no shachou desu", kr: "저희 회사 사장입니다" },

    // 099 ～은 어떻게 되었습니까?
    { jp: "どうなりましたか？", ro: "dou narimashitaka", kr: "어떻게 되었습니까?" },
    { jp: "結果はどうなりましたか？", ro: "kekka wa dou narimashitaka", kr: "결과는 어떻게 되었습니까?" },
    { jp: "契約はどうなりましたか？", ro: "keiyaku wa dou narimashitaka", kr: "계약은 어떻게 되었습니까?" },
    { jp: "あの話はどうなりましたか？", ro: "ano hanashi wa dou narimashitaka", kr: "그 이야기는 어떻게 되었습니까?" },
    { jp: "残念ながら, 中止になりました。", ro: "zannen nagara, chuushi ni narimashita", kr: "유감스럽게도 중지되었습니다" },

    // 100 ～은 어떻습니까? (제안/상태)
    { jp: "いかがですか？", ro: "ikaga desuka", kr: "어떻습니까?" },
    { jp: "お味はいかがですか？", ro: "oaji wa ikaga desuka", kr: "맛은 어떻습니까?" },
    { jp: "お時間はいいかがですか？", ro: "ojikan wa ikaga desuka", kr: "시간은 어떻습니까?" },
    { jp: "来週の月曜日はいいかがですか？", ro: "raishuu no getsuyoubi wa ikaga desuka", kr: "다음 주 월요일은 어떻습니까?" },
    { jp: "はい, 大丈夫です。お願いします。", ro: "hai, daijoubu desu. onegai shimasu", kr: "네, 괜찮습니다. 부탁합니다" },

    // 101 ～하면 좋겠습니다 (희망)
    { jp: "そうしていただけると助かります。", ro: "sou shite itadakeru to tasukarimasu", kr: "그렇게 해주시면 도움이 되겠습니다(고맙겠습니다)." },
    { jp: "早めにご連絡をいただければと思います。", ro: "hayame ni gorenraku o itadakereba to omoimasu", kr: "가급적 빨리 연락을 주셨으면 합니다." },
    { jp: "一度、お会いできればと思います。", ro: "ichido, oai dekireba to omoimasu", kr: "한번 뵐 수 있었으면 좋겠습니다." },
    { jp: "こちらの条件でご了承いただければ幸いです。", ro: "kochira no jouken de goryoushou itadakereba saiwai desu", kr: "이쪽 조건으로 양해해 주시면 감사하겠습니다." },
    { jp: "検討していただけますか？", ro: "kentou shite itadakemasuka", kr: "검토해 주시겠어요?" },
    { jp: "はい。前向きに検討させていただきます。", ro: "hai. maemuki ni kentou sasete itadakimasu", kr: "네. 긍정적으로 검토하겠습니다." },

    // 102 ～해 주셔서 감사합니다
    { jp: "教えてくださってありがとうございます。", ro: "oshiete kusasatte arigatou gozaimasu", kr: "가르쳐 주셔서 감사합니다." },
    { jp: "お越しいただいてありがとうございます。", ro: "okoshi itadaite arigatou gozaimasu", kr: "와 주셔서 감사합니다." },
    { jp: "貴重なご意見をいただき、ありがとうございます。", ro: "kichou na goiken o itadaki, arigatou gozaimasu", kr: "귀중한 의견을 주셔서 감사합니다." },
    { jp: "本日はお忙しい中、お時間をいただきありがとうございました。", ro: "honjitsu wa oisogashii naka, ojikan o itadaki arigatou gozaimashita", kr: "오늘은 바쁘신 와중에 시간을 내주셔서 감사합니다." },
    { jp: "いいえ、こちらこそ勉強になりました。", ro: "iie, kochirakoso benkyou ni narimashita", kr: "아니요, 저야말로 공부가 되었습니다." },

    // 103 ～해서 죄송합니다
    { jp: "遅れて申し訳ありません。", ro: "okurete moushiwake arimasen", kr: "늦어서 죄송합니다." },
    { jp: "お待たせして申し訳ありません。", ro: "omatase shite moushiwake arimasen", kr: "기다리게 해서 죄송합니다." },
    { jp: "ご迷惑をおかけして申し訳ありません。", ro: "gomeiwaku o okake shite moushiwake arimasen", kr: "폐를 끼쳐서 죄송합니다." },
    { jp: "返信が遅くなり、大変申し訳ございません。", ro: "henshin ga osoku nari, taihen moushiwake gozaimasen", kr: "답장이 늦어져서 대단히 죄송합니다." },
    { jp: "いえ、お気になさらないでください。", ro: "ie, okininasaranaide kudasai", kr: "아니요, 신경 쓰지 마세요." },

    // 104 ～ 때문입니다 (이유)
    { jp: "渋滞のためです。", ro: "juutai no tame desu", kr: "차 정체 때문입니다." },
    { jp: "システムエラーのためです。", ro: "shisutemu eraa no tame desu", kr: "시스템 에러 때문입니다." },
    { jp: "外出中のため、席を外しております。", ro: "gaishutsuchuu no tame, seki o hazushite orimasu", kr: "외출 중이라 자리를 비우고 있습니다." },
    { jp: "なぜ遅れたのですか？", ro: "naze okureta no desuka", kr: "왜 늦었습니까?" },
    { jp: "電車の遅延のため、遅れてしまいました。", ro: "densha no chien no tame, okurete shimaimashita", kr: "열차 지연 때문에 늦어지고 말았습니다." },

    // 105 ～인 것 같습니다 (추측/부드러운 단정)
    { jp: "そのようですね。", ro: "sono you desu ne", kr: "그런 것 같네요." },
    { jp: "どこか調子が悪いようです。", ro: "doko ka choushi ga warui you desu", kr: "어딘가 상태가 안 좋은 것 같습니다." },
    { jp: "会議はもう終わったようです。", ro: "kaigi wa mou owatta you desu", kr: "회의는 벌써 끝난 것 같습니다." },
    { jp: "あちらの方が担当者のようです。", ro: "achira no kata ga tantousha no you desu", kr: "저분이 담당자인 것 같습니다." },
    { jp: "そうですか。話しかけてみます。", ro: "sou desuka. hanashikakete mimasu", kr: "그렇군요. 말을 걸어보겠습니다." },

    // 106 ～일지도 모릅니다
    { jp: "遅れるかもしれません。", ro: "okureru kamoshiremasen", kr: "늦을지도 모릅니다." },
    { jp: "間違っているかもしれません。", ro: "machigatte iru kamoshiremasen", kr: "틀렸을지도 모릅니다." },
    { jp: "雨が降るかもしれません。", ro: "ame ga furu kamoshiremasen", kr: "비가 올지도 모릅니다." },
    { jp: "午後は外出するかもしれません。", ro: "gogo wa gaishutsu suru kamoshiremasen", kr: "오후에는 외출할지도 모릅니다." },
    { jp: "わかりました。早めに連絡します。", ro: "wakarimashita. hayame ni renraku shimasu", kr: "알겠습니다. 일찍 연락하겠습니다." },

    // 107 ～합시다 (권유/제안)
    { jp: "始めましょう。", ro: "hajimemashou", kr: "시작합시다." },
    { jp: "休憩しましょう。", ro: "kyuukei shimashou", kr: "쉽시다." },
    { jp: "確認しましょう。", ro: "kakunin shimashou", kr: "확인합시다." },
    { jp: "一度、相談しましょう。", ro: "ichido, soudan shimashou", kr: "한번 상의합시다." },
    { jp: "賛成です。そうしましょう。", ro: "sansei desu. sou shimashou", kr: "찬성입니다. 그렇게 합시다." },

    // 108 ～하러 갑시다
    { jp: "食べに行きましょう。", ro: "tabe ni ikimashou", kr: "먹으러 갑시다." },
    { jp: "見に行きましょう。", ro: "mi ni ikimashou", kr: "보러 갑시다." },
    { jp: "飲みに行きましょう。", ro: "nomi ni ikimashou", kr: "마시러(술 마시러) 갑시다." },
    { jp: "仕事の後に、一杯飲みに行きましょうか？", ro: "shigoto no ato ni, ippai nomi ni ikimashouka", kr: "일 끝나고 한잔하러 갈까요?" },
    { jp: "いいですね。ぜひお願いします。", ro: "ii desu ne. zehi onegai shimasu", kr: " 좋네요. 꼭 갑시다." },

    // 109 ～해주세요 (정중한 의뢰)
    { jp: "お待ちください。", ro: "omachi kudasai", kr: "기다려 주세요." },
    { jp: "ご確認ください。", ro: "gokakunin kudasai", kr: "확인해 주세요." },
    { jp: "お書きください。", ro: "okaki kudasai", kr: "써 주세요." },
    { jp: "少々お待ちください。ただいま確認いたします。", ro: "shouchou omachi kudasai. tadaima kakunin itashimasu", kr: "잠시만 기다려 주세요. 지금 확인하겠습니다." },
    { jp: "はい、お願いします。", ro: "hai, onegai shimasu", kr: "네, 부탁합니다." },

    // 110 ～하는 법 (방법)
    { jp: "やり方を教えてください。", ro: "yarikata o oshiete kudasai", kr: "하는 법을 가르쳐 주세요." },
    { jp: "使い方がわかりません。", ro: "tsukaikata ga wakarimasen", kr: "사용법을 모르겠습니다." },
    { jp: "書き方を間違えました。", ro: "kakikata o machigaemashita", kr: "쓰는 법을 틀렸습니다." },
    { jp: "この機械の使い方は知っていますか？", ro: "kono kikai no tsukaikata wa shitte imasuka", kr: "이 기계의 사용법은 알고 있습니까?" },
    { jp: "はい、知っています。教えましょうか？", ro: "hai, shitte imasu. oshiemashouka", kr: "네, 알고 있습니다. 가르쳐 드릴까요?" },

    // 111 ～할 때 (시간적 시점)
    { jp: "帰る時に連絡します。", ro: "kaeru toki ni renraku shimasu", kr: "돌아갈 때 연락할게요." },
    { jp: "困った時は相談してください。", ro: "komatta toki wa soudan shite kudasai", kr: "곤란할 때는 상담해 주세요." },
    { jp: "暇な時に見てください。", ro: "hima na toki ni mite kudasai", kr: "한가할 때 봐 주세요." },
    { jp: "わからない時は、いつでも聞いてくださいね。", ro: "wakaranai toki wa, itsu demo kiite kudasai ne", kr: "모를 때는 언제든 물어보세요." },
    { jp: "ありがとうございます。助かります。", ro: "arigatou gozaimasu. tasukarimasu", kr: "감사합니다. 큰 도움이 돼요." },

    // 112 ～하면서 (동시 동작)
    { jp: "歩きながら話しましょう。", ro: "arukinagara hanashimashou", kr: "걸으면서 이야기합시다." },
    { jp: "お茶を飲みながら相談しませんか？", ro: "ocha o nominagara soudan shimasenka", kr: "차 마시면서 상의하지 않겠어요?" },
    { jp: "音楽を聴きながら仕事をします。", ro: "ongaku o kikinagara shigoto o shimasu", kr: "음악을 들으면서 일을 합니다." },
    { jp: "考えながら進めてください。", ro: "kangaenagara susumete kudasai", kr: "생각하면서 진행해 주세요." },
    { jp: "はい、慎重に進めます。", ro: "hai, shinchou ni susumemasu", kr: "네, 신중히 진행하겠습니다." },

    // 113 ～하기 쉽습니다 / 어렵습니다
    { jp: "使いやすいです。", ro: "tsukaiyasui desu", kr: "쓰기 편합니다(쉽습니다)." },
    { jp: "分かりにくいです。", ro: "wakarinikui desu", kr: "이해하기 어렵습니다." },
    { jp: "読みやすい資料ですね。", ro: "yomiyasui shiryou desu ne", kr: "읽기 편한 자료네요." },
    { jp: "このペンは書きにくいです。", ro: "kono pen wa kakinikui desu", kr: "이 펜은 쓰기 불편합니다." },
    { jp: "別のをお持ちしましょうか？", ro: "betsu no o omochi shimashouka", kr: "다른 걸 가져다 드릴까요?" },

    // 114 ～한 후에
    { jp: "確認した後に連絡します。", ro: "kakunin shita ato ni renraku shimasu", kr: "확인한 후에 연락할게요." },
    { jp: "仕事の後に飲みに行きませんか？", ro: "shigoto no ato ni nomi ni ikimasenka", kr: "일 끝난 후에 술 한잔 안 할래요?" },
    { jp: "ご飯を食べた後に話しましょう。", ro: "gohan o tabeta ato ni hanashimashou", kr: "밥 먹은 후에 이야기합시다." },
    { jp: "会議の後に少しお時間ありますか？", ro: "kaigi no ato ni sukoshi ojikan arimasuka", kr: "회의 후에 잠깐 시간 되시나요?" },
    { jp: "はい, 大丈夫ですよ。", ro: "hai, daijoubu desu yo", kr: "네, 괜찮아요." },

    // 115 ～하기 전에
    { jp: "始める前に確認しましょう。", ro: "hajimeru mae ni kakunin shimashou", kr: "시작하기 전에 확인합시다." },
    { jp: "帰る前に資料を出してください。", ro: "kaeru mae ni shiryou o dashite kudasai", kr: "퇴근하기 전에 자료를 제출해 주세요." },
    { jp: "忘れる前にメモしておきます。", ro: "wasureru mae ni memo shite okimasu", kr: "잊기 전에 메모해 둘게요." },
    { jp: "会議が始まる前に準備を終わらせます。", ro: "kaigi ga hajimaru mae ni junbi o owarasemasu", kr: "회의가 시작되기 전에 준비를 끝내겠습니다." },
    { jp: "お願いします。", ro: "onegai shimasu", kr: "부탁합니다." },

    // 116 ～할 생각입니다 (강한 의지)
    { jp: "そのつもりです。", ro: "sono tsumori desu", kr: "그럴 생각입니다." },
    { jp: "断るつもりです。", ro: "kotowaru tsumori desu", kr: "거절할 생각입니다." },
    { jp: "転職するつもりです。", ro: "tenshoku suru tsumori desu", kr: "이직할 생각입니다." },
    { jp: "いつまで日本にいるつもりですか？", ro: "itsu made nihon ni iru tsumori desuka", kr: "언제까지 일본에 있을 생각입니까?" },
    { jp: "来年の春までいるつもりです。", ro: "rainen no haru made iru tsumori desu", kr: "내년 봄까지 있을 생각입니다." },

    // 117 ～인 것 같습니다 (주관적 느낌)
    { jp: "その気がします。", ro: "sono ki ga shimasu", kr: "그런 느낌이 듭니다." },
    { jp: "嫌な予感がします。", ro: "iyana yokan ga shimasu", kr: "불길한 예감이 듭니다." },
    { jp: "そんな気がしていました。", ro: "sonna ki ga shite imashita", kr: "그런 기분이 들었습니다." },
    { jp: "今回のプロジェクト, うまくいきそうですか？", ro: "konkai no purojekuto, umaku ikisou desuka", kr: "이번 프로젝트, 잘될 것 같나요?" },
    { jp: "はい, そんな気がします。", ro: "hai, sonna ki ga shimasu", kr: "네, 그런 기분이 듭니다." },

    // 118 ～하기로 했습니다 (결정)
    { jp: "行くことにしました。", ro: "iku koto ni shimashita", kr: "가기로 했습니다." },
    { jp: "やめることにしました。", ro: "yameru koto ni shimashita", kr: "그만두기로 했습니다." },
    { jp: "結婚することにしました。", ro: "kekkon suru koto ni shimashita", kr: "결혼하기로 했습니다." },
    { jp: "どちらの案にしましたか？", ro: "dochira no an ni shimashitaka", kr: "어느 쪽 안으로 했습니까?" },
    { jp: "A案にすることにしました。", ro: "eean ni suru koto ni shimashita", kr: "A안으로 하기로 했습니다." },

    // 119 ～하게 되었습니다 (결과/상황)
    { jp: "行くことになりました。", ro: "iku koto ni narimashita", kr: "가게 되었습니다." },
    { jp: "中止になりました。", ro: "chuushi ni narimashita", kr: "중지되었습니다." },
    { jp: "日本に転勤することになりました。", ro: "nihon ni tenkin suru koto ni narimashita", kr: "일본으로 전근하게 되었습니다." },
    { jp: "会議はどうなりましたか？", ro: "kaigi wa dou narimashitaka", kr: "회의는 어떻게 되었습니까?" },
    { jp: "来週に延期することになりました。", ro: "raishuu ni enki suru koto ni narimashita", kr: "다음 주로 연기하게 되었습니다." },

    // 120 ～할 수밖에 없습니다
    { jp: "やるしかありません。", ro: "yaru shika arimasen", kr: "할 수밖에 없습니다(해야만 합니다)." },
    { jp: "待つしかありません。", ro: "matsu shika arimasen", kr: "기다릴 수밖에 없습니다." },
    { jp: "謝るしかありません。", ro: "ayamaru shika arimasen", kr: "사과할 수밖에 없습니다." },
    { jp: "予算が足りないので、諦めるしかありません。", ro: "yosan ga tarinai node, akirameru shika arimasen", kr: "예산이 부족해서 포기할 수밖에 없습니다." },
    { jp: "残念ですが、仕方ありませんね。", ro: "zannen desuga, shikata arimasen ne", kr: "아쉽지만 어쩔 수 없네요." },

    // 121 ～해도 소용없습니다
    { jp: "言っても無駄です。", ro: "itte mo muda desu", kr: "말해도 소용없습니다." },
    { jp: "後悔しても始まりません。", ro: "koukai shite mo hajimarimasen", kr: "후회해도 소용없습니다." },
    { jp: "今さら言っても仕方がありません。", ro: "imasara itte mo shikata ga arimasen", kr: "이제 와서 말해봐야 소용없습니다." },
    { jp: "もう一度お願いしてみませんか？", ro: "mou ichido onegai shite mimasenka", kr: "다시 한번 부탁해 보지 않겠어요?" },
    { jp: "いえ, 今さらお願いしても無駄ですよ。", ro: "ie, imasara onegai shite mo muda desu yo", kr: "아니요, 이제 와서 부탁해도 소용없어요." },

    // 122 ～일 리가 없습니다 (강한 부정)
    { jp: "そんなはずはありません。", ro: "sonna hazu wa arimasen", kr: "그럴 리가 없습니다." },
    { jp: "嘘の可能性はありませんか？", ro: "uso no kanousei wa arimasenka", kr: "거짓말일 가능성은 없나요?" },
    { jp: "彼が嘘をつくはずはありません。", ro: "kare ga uso o tsuku hazu wa arimasen", kr: "그가 거짓말을 할 리가 없습니다." },
    { jp: "間違いありませんか？", ro: "machigai arimasenka", kr: "틀림없습니까?" },
    { jp: "はい, 間違いないはずです。", ro: "hai, machigainai hazu desu", kr: "네, 틀림없을 겁니다." },

    // 123 ～할 것 같습니다 (양태)
    { jp: "雨が降りそうです。", ro: "ame ga furisou desu", kr: "비가 올 것 같습니다." },
    { jp: "美味しそうです。", ro: "oishisou desu", kr: "맛있어 보입니다." },
    { jp: "忙しそうですね。", ro: "isogasou desu ne", kr: "바빠 보이시네요." },
    { jp: "このプロジェクト, 成功しそうですか？", ro: "konkai no purojekuto, seikou shisou desuka", kr: "이 프로젝트, 성공할 것 같나요?" },
    { jp: "はい, 成功しそうです。", ro: "hai, seikou shisou desu", kr: "네, 성공할 것 같습니다." },

    // 124 ～하자마자
    { jp: "着き次第連絡します。", ro: "tsuki shidai renraku shimasu", kr: "도착하자마자 연락할게요." },
    { jp: "終わり次第伺います。", ro: "owari shidai ukagaimasu", kr: "끝나자마자 방문하겠습니다." },
    { jp: "わかり次第お伝えします。", ro: "wakari shidai otsutae shimasu", kr: "아는 대로(알게 되자마자) 전해 드릴게요." },
    { jp: "田中さんが戻ったら教えてください。", ro: "tanaka san ga modottara oshiete kudasai", kr: "다나카 씨가 돌아오면 가르쳐 주세요." },
    { jp: "承知しました。戻り次第、申し伝えます。", ro: "shouchi shimashita. modori shidai, moushitsutaemasu", kr: "알겠습니다. 돌아오자마자 전해 드리겠습니다." },

    // 125 ～하는 대신에
    { jp: "私の代わりに行ってください。", ro: "watashi no kawari ni itte kudasai", kr: "저 대신에 가 주세요." },
    { jp: "コーヒーの代わりに紅茶をください。", ro: "koohii no kawari ni koucha o kudasai", kr: "커피 대신 홍차를 주세요." },
    { jp: "メールの代わりに電話しました。", ro: "meeru no kawari ni denwa shimashita", kr: "메일 대신 전화했습니다." },
    { jp: "今日休む代わりに、明日は早く来ます。", ro: "kyou yasumu kawari ni, ashita wa hayaku kimasu", kr: "오늘 쉬는 대신 내일은 일찍 오겠습니다." },
    { jp: "わかりました。ゆっくり休んでください。", ro: "wakarimashita. yukkuri yasunde kudasai", kr: "알겠습니다. 푹 쉬세요." },

    // 126 ～할 뿐입니다
    { jp: "見ただけです。", ro: "mita dake desu", kr: "봤을 뿐입니다." },
    { jp: "聞いた話です。", ro: "kiita hanashi desu", kr: "들은 이야기일 뿐입니다." },
    { jp: "冗談です。", ro: "joudan desu", kr: "농담입니다." },
    { jp: "何か怒っていますか？", ro: "nanika okotte imasuka", kr: "뭐 화난 거 있나요?" },
    { jp: "いいえ, 少し疲れているだけです。", ro: "iie, sukoshi tsukarete iru dake desu", kr: "아니요, 조금 피곤할 뿐입니다." },

    // 127 ～한 지 얼마 안 되었습니다
    { jp: "入社したばかりです。", ro: "nyuusha shita bakari desu", kr: "입사한 지 얼마 안 되었습니다." },
    { jp: "買ったばかりです。", ro: "katta bakari desu", kr: "산 지 얼마 안 되었습니다." },
    { jp: "始めたばかりで、よくわかりません。", ro: "hajimeta bakari de, yoku wakarimasen", kr: "시작한 지 얼마 안 돼서 잘 모르겠습니다." },
    { jp: "このパソコン, 新しいですね。", ro: "kono pasokon, atarashii desu ne", kr: "이 컴퓨터 새 거네요." },
    { jp: "ええ, 昨日買ったばかりなんです。", ro: "ee, kinou katta bakari nan desu", kr: "네, 어제 막 산 거예요." },

    // 128 ～할 예정입니다
    { jp: "伺う予定です。", ro: "ukagau yotei desu", kr: "방문할 예정입니다." },
    { jp: "報告する予定です。", ro: "houkoku suru yotei desu", kr: "보고할 예정입니다." },
    { jp: "いつ出発しますか？", ro: "itsu shuppatsu shimasuka", kr: "언제 출발합니까?" },
    { jp: "明日の朝、出発する予定です。", ro: "ashita no asa, shuppatsu suru yotei desu", kr: "내일 아침 출발할 예정입니다." },
    { jp: "気をつけて行ってきてください。", ro: "ki o tsukete itte kite kudasai", kr: "조심히 다녀오세요." },

    // 129 ～한 것 같습니다 (과거 추측)
    { jp: "忘れたようです。", ro: "wasureta you desu", kr: "잊어버린 것 같습니다." },
    { jp: "間違えたようです。", ro: "machigaeta you desu", kr: "틀린 것 같습니다." },
    { jp: "誰か来たようです。", ro: "dareka kita you desu", kr: "누가 온 것 같습니다." },
    { jp: "田中さん, まだ来ませんね。", ro: "tanaka san, mada kimasen ne", kr: "다나카 씨 아직 안 오네요." },
    { jp: "電車が遅れているようです。", ro: "densha ga okurete iru you desu", kr: "열차가 지연되는 것 같습니다." },

    // 130 ～을 위해서 (목적)
    { jp: "家族のために働きます。", ro: "kazoku no tame ni hatarakimasu", kr: "가족을 위해 일합니다." },
    { jp: "健康のために走っています。", ro: "kenkou no tame ni hashitte imasu", kr: "건강을 위해 달리고 있습니다." },
    { jp: "将来のために貯金しています。", ro: "shourai no tame ni chokin shite imasu", kr: "미래를 위해 저축하고 있습니다." },
    { jp: "何のために勉強しているのですか？", ro: "nani no tame ni benkyou shite iru no desuka", kr: "무엇을 위해 공부하고 있습니까?" },
    { jp: "日本で働くために勉強しています。", ro: "nihon de hataraku tame ni benkyou shite imasu", kr: "일본에서 일하기 위해 공부하고 있습니다." },

    // 131 ～하게 되었습니다 (능력/습관의 변화)
    { jp: "話せるようになりました。", ro: "hanaseru you ni narimashita", kr: "말할 수 있게 되었습니다." },
    { jp: "食べるようになりました。", ro: "taberu you ni narimashita", kr: "먹게 되었습니다." },
    { jp: "早起きするようになりました。", ro: "hayaoki suru you ni narimashita", kr: "일찍 일어나게 되었습니다." },
    { jp: "日本語、上手になりましたね。", ro: "nihongo, jouzu ni narimashita ne", kr: "일본어 잘하게 되셨네요." },
    { jp: "ありがとうございます. 少しずつ話せるようになりました。", ro: "arigatou gozaimasu. sukoshizutsu hanaseru you ni narimashita", kr: "감사합니다. 조금씩 말할 수 있게 되었어요." },

    // 132 ～하도록 하고 있습니다 (노력)
    { jp: "忘れないようにしています。", ro: "wasurenai you ni shite imasu", kr: "잊지 않도록 하고 있습니다." },
    { jp: "早めに寝るようにしています。", ro: "hayame ni neru you ni shite imasu", kr: "일찍 자도록 노력하고 있습니다." },
    { jp: "野菜を食べるようにしています。", ro: "yasai o taberu you ni shite imasu", kr: "채소를 먹으려고 노력 중입니다." },
    { jp: "健康に気をつけていますか？", ro: "kenkou ni ki o tsukete imasuka", kr: "건강에 신경 쓰고 있나요?" },
    { jp: "はい, 毎日歩くようにしています。", ro: "hai, mainichi aruku you ni shite imasu", kr: "네, 매일 걷도록 노력하고 있습니다." },

    // 133 ～하는 것이 당연합니다
    { jp: "当然です。", ro: "touzen desu", kr: "당연합니다." },
    { jp: "当たり前です。", ro: "atarimae desu", kr: "당연합니다." },
    { jp: "怒るのも当然です。", ro: "okoru no mo touzen desu", kr: "화내는 것도 당연합니다." },
    { jp: "彼が選ばれたのは当然だと思います。", ro: "kare ga erabareta no wa touzen da to omoimasu", kr: "그가 뽑힌 것은 당연하다고 생각합니다." },
    { jp: "私もそう思います。", ro: "watashi mo sou omoimasu", kr: "저도 그렇게 생각합니다." },

    // 134 ～했으면 좋겠습니다 (가정/희망)
    { jp: "早く終わればいいですね。", ro: "hayaku owareba ii desu ne", kr: "빨리 끝나면 좋겠네요." },
    { jp: "安ければ買いたいです。", ro: "yasukereba kaitai desu", kr: "싸면 사고 싶습니다." },
    { jp: "明日、晴れればいいですね。", ro: "ashita, harereba ii desu ne", kr: "내일 맑으면 좋겠네요." },
    { jp: "間に合いますか？", ro: "maniaimasuka", kr: "시간 안에 댈 수 있을까요?" },
    { jp: "急げば間に合うと思います。", ro: "isogeba maniau to omoimasu", kr: "서두르면 댈 수 있을 것 같습니다." },

    // 135 ～해도 상관없습니다
    { jp: "構いません。", ro: "kamaimasen", kr: "상관없습니다(괜찮습니다)." },
    { jp: "遅れても構いません。", ro: "okurete mo kamaimasen", kr: "늦어도 상관없습니다." },
    { jp: "誰でも構いません。", ro: "dare demo kamaimasen", kr: "누구라도 상관없습니다." },
    { jp: "ここでタバコを吸っても構いませんか？", ro: "koko de tabako o sutte mo kamaimasenka", kr: "여기서 담배를 피워도 괜찮을까요?" },
    { jp: "いいえ, ここは禁煙です。", ro: "iie, koko wa kin'en desu", kr: "아니요, 여기는 금연입니다." },

    // 136 ～임에 틀림없습니다 (확신)
    { jp: "間違いありません。", ro: "machigai arimasen", kr: "틀림없습니다." },
    { jp: "彼が犯人に違いありません。", ro: "kare ga hannin ni chigai arimasen", kr: "그가 범인임에 틀림없습니다." },
    { jp: "これは成功に違いありません。", ro: "kore wa seikou ni chigai arimasen", kr: "이것은 성공임에 틀림없습니다." },
    { jp: "本当に彼がやったのですか？", ro: "hontou ni kare ga yatta no desuka", kr: "정말 그가 한 건가요?" },
    { jp: "はい, 間違いありません。", ro: "hai, machigai arimasen", kr: "네, 틀림없습니다." },

    // 137 ～할 뿐만 아니라
    { jp: "安いだけでなく、美味しいです。", ro: "yasui dake de naku, oishii desu", kr: "쌀 뿐만 아니라 맛있습니다." },
    { jp: "英語だけでなく、日本語も話せます。", ro: "eigo dake de naku, nihongo mo hanasemasu", kr: "영어뿐만 아니라 일본어도 할 줄 압니다." },
    { jp: "仕事だけでなく、遊びも大切です。", ro: "shigoto dake de naku, asobi mo taisetsu desu", kr: "일뿐만 아니라 노는 것도 중요합니다." },
    { jp: "この店, どうですか？", ro: "kono mise, dou desuka", kr: "이 가게 어때요?" },
    { jp: "サービスがいいだけでなく、料理も最高です。", ro: "saabisu ga ii dake de naku, ryouri mo saikou desu", kr: "서비스가 좋을 뿐만 아니라 요리도 최고예요." },

    // 138 ～하는 법이 없습니다 (부정적 습관)
    { jp: "遅れることはありません。", ro: "okureru koto wa arimasen", kr: "늦는 법이 없습니다." },
    { jp: "間違うことはありません。", ro: "machigau koto wa arimasen", kr: "틀리는 법이 없습니다." },
    { jp: "忘れることはありません。", ro: "wasureru koto wa arimasen", kr: "잊는 법이 없습니다." },
    { jp: "彼に任せても大丈夫ですか？", ro: "kare ni makasete mo daijoubu desuka", kr: "그에게 맡겨도 괜찮을까요?" },
    { jp: "ええ, 彼がミスをすることはありませんよ。", ro: "ee, kare ga misu o suru koto wa arimasen yo", kr: "네, 그가 실수하는 법은 없어요." },

    // 139 ～에 의하면 (출처)
    { jp: "ニュースによると、明日は雨だそうです。", ro: "nyuusu ni yoru to, ashita wa ame da sou desu", kr: "뉴으에 따르면 내일은 비가 온다고 합니다." },
    { jp: "噂によると、彼は辞めるらしいです。", ro: "uwas ni yoru to, kare wa yameru rashii desu", kr: "소문에 따르면 그는 그만둔다고 합니다." },
    { jp: "天気予報によると、来週は暑くなるそうです。", ro: "tenkiyohou ni yoru to, raishuu wa atsuku naru sou desu", kr: "일기예보에 따르면 다음 주는 더워질 거라고 합니다." },
    { jp: "どこで聞いたのですか？", ro: "doko de kiita no desuka", kr: "어디서 들었습니까?" },
    { jp: "田中さんの話によると、そうらしいです。", ro: "tanaka san no hanashi ni yoru to, sou rashii desu", kr: "다나카 씨 말에 따르면 그렇다고 하네요." },

    // 140 ～의 덕분에
    { jp: "皆さんのおかげです。", ro: "minasama no okage desu", kr: "여러분 덕분입니다." },
    { jp: "先生のおかげで合格しました。", ro: "sensei no okage de goukaku shimashita", kr: "선생님 덕분에 합격했습니다." },
    { jp: "薬のおかげで良くなりました。", ro: "kusuri no okage de yoku narimashita", kr: "약 덕분에 좋아졌습니다." },
    { jp: "プロジェクトが成功しましたね。", ro: "purojekuto ga seikou shimashita ne", kr: "프로젝트가 성공했네요." },
    { jp: "田中さんのおかげですよ。ありがとうございます。", ro: "tanaka san no okage desu yo. arigatou gozaimasu", kr: "다나카 씨 덕분이에요. 감사합니다." },

    // 141 ～에 대해서 (대상)
    { jp: "それについて考えておきます。", ro: "sore ni tsuite kangaete okimasu", kr: "그것에 대해 생각해 두겠습니다." },
    { jp: "今後の予定について話し合いましょう。", ro: "kongo no yotei ni tsuite hanashiaimashou", kr: "향후 일정에 대해 의논합시다." },
    { jp: "日本の文化について興味があります。", ro: "nihon no bunka ni tsuite kyoumi ga arimasu", kr: "일본 문화에 대해 관심이 있습니다." },
    { jp: "何か質問はありますか？", ro: "nanika shitsumon wa arimasuka", kr: "질문 있습니까?" },
    { jp: "はい, 新製品の価格について教えてください。", ro: "hai, shinseihin no kakaku ni tsuite oshiete kudasai", kr: "네, 신제품 가격에 대해 알려주세요." },

    // 142 ～에 비해서 (비교)
    { jp: "去年に比べて忙しいです。", ro: "kyonen ni kurabete isogashii desu", kr: "작년에 비해 바쁩니다." },
    { jp: "以前に比べて上手になりました。", ro: "izen ni kurabete jouzu ni narimashita", kr: "이전에 비해 능숙해졌습니다." },
    { jp: "他の店に比べて安いです。", ro: "hoka no mise ni kurabete yasui desu", kr: "다른 가게에 비해 쌉니다." },
    { jp: "今年の夏はどうですか？", ro: "kotoshi no natsu wa dou desuka", kr: "올해 여름은 어때요?" },
    { jp: "去年に比べて、かなり暑いですね。", ro: "kyonen ni kurabete, kanari atsui desu ne", kr: "작년에 비해 꽤 덥네요." },

    // 143 ～에 달려 있습니다 (의존)
    { jp: "あなた次第です。", ro: "anata shidai desu", kr: "당신에게 달려 있습니다(당신 하기 나름입니다)." },
    { jp: "結果は努力次第です。", ro: "kekka wa doryoku shidai desu", kr: "결과는 노력에 달려 있습니다." },
    { jp: "天気次第で中止になります。", ro: "tenki shidai de chuushi ni narimashita", kr: "날씨에 따라 중지됩니다." },
    { jp: "いつ出発しますか？", ro: "itsu shuppatsu shimasuka", kr: "언제 출발합니까?" },
    { jp: "仕事の終わり次第です。", ro: "shigoto no owari shidai desu", kr: "일이 끝나는 대로입니다(끝나기에 달렸습니다)." },

    // 144 ～하는 중입니다 (진행형)
    { jp: "今、考えているところです。", ro: "ima, kangaete iru tokoro desu", kr: "지금 생각 중입니다." },
    { jp: "会議をしているところです。", ro: "kaigi o shite iru tokoro desu", kr: "회의 중입니다." },
    { jp: "食事をしているところです。", ro: "shokuji o shite iru tokoro desu", kr: "식사 중입니다." },
    { jp: "資料はできましたか？", ro: "shiryou wa dekimashitaka", kr: "자료는 다 됐나요?" },
    { jp: "すみません, 今作っているところです。", ro: "sumimasen, ima tsukutte iru tokoro desu", kr: "죄송합니다, 지금 만드는 중입니다." },

    // 145 ～할 뻔했습니다
    { jp: "忘れるところでした。", ro: "wasureru tokoro deshita", kr: "잊어버릴 뻔했습니다." },
    { jp: "間違えるところでした。", ro: "machigaeru tokoro deshita", kr: "틀릴 뻔했습니다." },
    { jp: "遅れるところでした。", ro: "okureru tokoro deshita", kr: "늦을 뻔했습니다." },
    { jp: "危なかったですね。", ro: "abunakatta desu ne", kr: "위험했네요." },
    { jp: "ええ, 倒れるところでした。", ro: "ee, taoreru tokoro deshita", kr: "네, 넘어질 뻔했어요." },

    // 146 ～하는 법이 없습니다 (절대 안 함)
    { jp: "嘘をつくことはありません。", ro: "uso o tsuku koto wa arimasen", kr: "거짓말을 하는 법이 없습니다." },
    { jp: "あきらめることはありません。", ro: "akirameru koto wa arimasen", kr: "포기하는 법이 없습니다." },
    { jp: "後悔することはありません。", ro: "koukai suru koto wa arimasen", kr: "후회하는 법이 없습니다." },
    { jp: "不安はありませんか？", ro: "fuan wa arimasenka", kr: "불안하진 않나요?" },
    { jp: "いいえ, 迷うことはありません。", ro: "iie, mayou koto wa arimasen", kr: "아니요, 망설이는 일은 없습니다." },

    // 147 ～일 수밖에 없습니다
    { jp: "そうなるに違いありません。", ro: "sou naru ni chigai arimasen", kr: "그렇게 될 수밖에 없습니다(그렇게 됨에 틀림없습니다)." },
    { jp: "高いに決まっています。", ro: "takai ni kimatte imasu", kr: "비쌀 수밖에 없습니다(당연히 비쌉니다)." },
    { jp: "無理に決まっています。", ro: "muri ni kimatte imasu", kr: "무리일 게 뻔합니다." },
    { jp: "彼は来るでしょうか？", ro: "kare wa kuru deshouka", kr: "그가 올까요?" },
    { jp: "いいえ, 来ないに決まっています。", ro: "iie, konai ni kimatte imasu", kr: "아니요, 당연히 안 올 겁니다." },

    // 148 ～한 셈입니다
    { jp: "終わったも同然です。", ro: "owatta mo douzen desu", kr: "끝난 것이나 다름없습니다(끝난 셈입니다)." },
    { jp: "勝ったも同然です。", ro: "katta mo douzen desu", kr: "이긴 것이나 다름없습니다." },
    { jp: "もう準備はできたも同然です。", ro: "mou junbi wa dekita mo douzen desu", kr: "이제 준비는 된 것이나 다름없습니다." },
    { jp: "進捗はどうですか？", ro: "shinchoku wa dou desuka", kr: "진척 상황은 어떤가요?" },
    { jp: "ほぼ完成したも同然です。", ro: "hobo kansei shita mo douzen desu", kr: "거의 완성된 것이나 다름없습니다." },

    // 149 ～할까 말까 생각 중입니다
    { jp: "行こうか行くまいか考えています。", ro: "ikou ka ikumai ka kangaete imasu", kr: "갈까 말까 생각 중입니다." },
    { jp: "買おうか買うまいか迷っています。", ro: "kaou ka kaumai ka mayotte imasu", kr: "살까 말까 망설이고 있습니다." },
    { jp: "言おうか言うまいか悩んでいます。", ro: "iou ka iumai ka nayande imasu", kr: "말할까 말까 고민 중입니다." },
    { jp: "どうしましたか？", ro: "dou shimashitaka", kr: "무슨 일인가요?" },
    { jp: "会社を辞めようか辞めまいか考えているんです。", ro: "kaisha o yameyou ka yamemai ka kangaete iru n desu", kr: "회사를 그만둘까 말까 생각 중이에요." },

    // 150 ～하고 싶어 합니다 (제3자의 희망)
    { jp: "田中さんが会いたがっています。", ro: "tanaka san ga aitagatte imasu", kr: "다나카 씨가 만나고 싶어 합니다." },
    { jp: "子供が遊びたがっています。", ro: "kodomo ga asobitagatte imasu", kr: "아이가 놀고 싶어 합니다." },
    { jp: "みんなが知りたがっています。", ro: "minna ga shiritagatte imasu", kr: "모두가 알고 싶어 합니다." },
    { jp: "彼は何と言っていましたか？", ro: "kare wa nan to itte imashitaka", kr: "그는 뭐라고 하던가요?" },
    { jp: "新しいプロジェクトに参加したがっていました。", ro: "atarashii purojekuto ni sanka shitagatte imashita", kr: "새 프로젝트에 참여하고 싶어 했습니다." },

    // 151 ～하는 편입니다
    { jp: "早いほうです。", ro: "hayai hou desu", kr: "빠른 편입니다." },
    { jp: "よく行くほうです。", ro: "yoku iku hou desu", kr: "자주 가는 편입니다." },
    { jp: "得意なほうです。", ro: "tokui na hou desu", kr: "잘하는(특기인) 편입니다." },
    { jp: "お酒は飲めますか？", ro: "osake wa nomemasuka", kr: "술 마실 줄 아나요?" },
    { jp: "ええ、強いほうだと思います。", ro: "ee, tsuyoi hou da to omoimasu", kr: "네, 잘 마시는(강한) 편이라고 생각합니다." },

    // 152 ～한 모양입니다 (시각적 추측)
    { jp: "忙しいそうです。", ro: "isogashisou desu", kr: "바쁜 모양입니다." },
    { jp: "うれしそうです。", ro: "ureshishou desu", kr: "기뻐 보입니다." },
    { jp: "田中さんはどこですか？", ro: "tanaka san wa doko desuka", kr: "다나카 씨는 어디 있나요?" },
    { jp: "会議室で忙しそうに電話していましたよ。", ro: "kaigishitsu de isogashisou ni denwa shite imashita yo", kr: "회의실에서 바쁜 모양으로 전화하고 있었어요." },

    // 153 ～하는 것이 가능합니다 (능력/허가)
    { jp: "変更可能です。", ro: "henkou kanou desu", kr: "변경 가능합니다." },
    { jp: "予約が可能です。", ro: "yoyaku ga kanou desu", kr: "예약이 가능합니다." },
    { jp: "明日の午前中ならお会いすることが可能です。", ro: "ashita no gozenchuu nara oai suru koto ga kanou desu", kr: "내일 오전 중이라면 뵙는 것이 가능합니다." },
    { jp: "クレジットカードは使えますか？", ro: "kurejitto kaado wa tsukaemasuka", kr: "신용카드 사용할 수 있나요?" },
    { jp: "はい、ご利用可能です。", ro: "hai, goryou kanou desu", kr: "네, 이용 가능합니다." },

    // 154 ～한 결과
    { jp: "検討した結果、お断りすることにしました。", ro: "kentou shita kekka, okotowari suru koto ni shimashita", kr: "검토한 결과, 거절하기로 했습니다." },
    { jp: "話し合った結果、賛成することになりました。", ro: "hanashiatta kekka, sansei suru koto ni narimashita", kr: "논의한 결과, 찬성하게 되었습니다." },
    { jp: "調査の結果、原因がわかりました。", ro: "chousa no kekka, gen'in ga wakarimashita", kr: "조사 결과, 원인을 알게 되었습니다." },
    { jp: "昨日の試合はどうなりましたか？", ro: "kinou no shiai wa dou narimashitaka", kr: "어제 경기 어떻게 됐나요?" },
    { jp: "接戦の結果、勝ちました。", ro: "sessen no kekka, kachimashita", kr: "접전 끝에(결과) 이겼습니다." },

    // 155 ～할지도 모른다는 생각이 듭니다
    { jp: "失敗するかもしれないという気がします。", ro: "shippai suru kamoshirenai to iu ki ga shimasu", kr: "실패할지도 모른다는 생각이 듭니다." },
    { jp: "間に合わないかもしれないという気がします。", ro: "maniawanai kamoshirenai to iu ki ga shimasu", kr: "제시간에 못 댈지도 모른다는 기분이 듭니다." },
    { jp: "何か忘れているような気がします。", ro: "nanika wasurete iru you na ki ga shimasu", kr: "무언가 잊고 있는 듯한 기분이 듭니다." },
    { jp: "顔色が悪いですよ。大丈夫ですか？", ro: "kaoiro ga warui desu yo. daijoubu desuka", kr: "안색이 안 좋네요. 괜찮나요?" },
    { jp: "ええ、風邪をひいたような気がします。", ro: "ee, kaze o hiita you na ki ga shimasu", kr: "네, 감기에 걸린 것 같은 기분이 드네요." },

    // 156 ～하면 안 된다고 생각합니다
    { jp: "諦めてはいけないと思います。", ro: "akiramete wa ikenai to omoimasu", kr: "포기해서는 안 된다고 생각합니다." },
    { jp: "忘れてはいけないと思います。", ro: "wasurete wa ikenai to omoimasu", kr: "잊어서는 안 된다고 생각합니다." },
    { jp: "妥協してはいけないと思います。", ro: "dakyou shite wa ikenai to omoimasu", kr: "타협해서는 안 된다고 생각합니다." },
    { jp: "このまま進めてもいいでしょうか？", ro: "kono mama susumete mo ii deshouka", kr: "이대로 진행해도 될까요?" },
    { jp: "いえ、無理をしてはいけないと思います。", ro: "ie, muri o shite wa ikenai to omoimasu", kr: "아니요, 무리해서는 안 된다고 생각합니다." },

    // 157 ～할 수 있게 노력하겠습니다
    { jp: "間に合うように努力します。", ro: "maniau you ni doryoku shimasu", kr: "시간에 맞출 수 있도록 노력하겠습니다." },
    { jp: "期待に応えられるように努力します。", ro: "kitai ni kotaerareru you ni doryoku shimasu", kr: "기대에 부응할 수 있도록 노력하겠습니다." },
    { jp: "ミスがないように努力します。", ro: "misu ga nai you ni doryoku shimasu", kr: "실수가 없도록 노력하겠습니다." },
    { jp: "今後ともよろしくお願いします。", ro: "kongo tomo yoroshiku onegai shimasu", kr: "앞으로도 잘 부탁드립니다." },
    { jp: "はい、ご満足いただけるように努力します。", ro: "hai, gomanzoku itadakeru you ni doryoku shimasu", kr: "네, 만족하실 수 있도록 노력하겠습니다." },

    // 158 ～하는 것은 쉽지 않습니다
    { jp: "理解するのは簡単ではありません。", ro: "rikai suru no wa kantan dewa arimasen", kr: "이해하는 것은 쉽지 않습니다." },
    { jp: "一人でやるのは簡単ではありません。", ro: "hitori de yaru no wa kantan dewa arimasen", kr: "혼자 하는 것은 쉽지 않습니다." },
    { jp: "成功させるのは簡単ではありません。", ro: "seikou saseru no wa kantan dewa arimasen", kr: "성공시키는 것은 쉽지 않습니다." },
    { jp: "この仕事、明日までに終わりますか？", ro: "kono shigoto, ashita made ni owarimasuka", kr: "이 일, 내일까지 끝날까요?" },
    { jp: "はい、でも簡単ではありませんね。", ro: "hai, demo kantan dewa arimasen ne", kr: "네, 하지만 쉽지는 않겠네요." },

    // 159 ～한 경험이 도움이 되었습니다
    { jp: "以前の経験が役に立ちました。", ro: "izen no keiken ga yakunitachimashita", kr: "이전 경험이 도움이 되었습니다." },
    { jp: "アルバイトの経験が役に立ちました。", ro: "arubaito no keiken ga yakunitachimashita", kr: "아르바이트 경험이 도움이 되었습니다." },
    { jp: "日本での生活が役に立ちました。", ro: "nihon de no seikatsu ga yakunitachimashita", kr: "일본에서의 생활이 도움이 되었습니다." },
    { jp: "日本語が上手ですね。", ro: "nihongo ga jouzu desu ne", kr: "일본어를 잘하시네요." },
    { jp: "ありがとうございます。留学の経験が役に立っています。", ro: "arigatou gozaimasu. ryuugaku no keiken ga yakunitatte imasu", kr: "감사합니다. 유학 경험이 도움이 되고 있습니다." },

    // 160 ～를 기대하고 있습니다
    { jp: "楽しみにしています。", ro: "tanoshimi ni shite imasu", kr: "기대하고 있습니다(즐겁게 기다립니다)." },
    { jp: "お会いできるのを楽しみにしています。", ro: "oai dekiru no o tanoshimi ni shite imasu", kr: "뵙게 될 날을 기대하고 있습니다." },
    { jp: "ご返信を楽しみにしています。", ro: "gohenshin o tanoshimi ni shite imasu", kr: "답장을 기다리고 있겠습니다." },
    { jp: "来週のパーティー、来られますか？", ro: "raishuu no paatii, koraremasuka", kr: "다음 주 파티, 오실 수 있나요?" },
    { jp: "はい、伺います。楽しみにしていますね。", ro: "hai, ukagaimasu. tanoshimi ni shite imasu ne", kr: "네, 가겠습니다. 기대하고 있을게요." },

    // 161 ～할 정도로 (정도)
    { jp: "泣くほど疲れました。", ro: "naku hodo tsukaremashita", kr: "울 정도로 피곤했습니다." },
    { jp: "驚くほど安いです。", ro: "odoroku hodo yasui desu", kr: "놀랄 정도로 쌉니다." },
    { jp: "死ぬほど忙しいです。", ro: "shinu hodo isogashii desu", kr: "죽을 만큼 바쁩니다." },
    { jp: "この料理、どうですか？", ro: "kono ryouri, dou desuka", kr: "이 요리 어때요?" },
    { jp: "ほっぺたが落ちるほど美味しいです。", ro: "hoppeta ga ochiru hodo oishii desu", kr: "뺨이 떨어질 정도로(둘이 먹다 하나 죽어도 모를 만큼) 맛있어요." },

    // 162 ～하길 잘했습니다
    { jp: "買ってよかったです。", ro: "katte yokatta desu", kr: "사길 잘했습니다." },
    { jp: "行ってよかったです。", ro: "itte yokatta desu", kr: "가길 잘했습니다." },
    { jp: "相談してよかったです。", ro: "soudan shite yokatta desu", kr: "상담하길 잘했습니다." },
    { jp: "この本, 面白いですね。", ro: "kono hon, omoshiroi desu ne", kr: "이 책 재미있네요." },
    { jp: "ええ, 読んでよかったです。", ro: "ee, yonde yokatta desu", kr: "네, 읽길 잘했어요." },

    // 163 ～하면 안 됩니다 (강한 금지)
    { jp: "無理をしてはいけません。", ro: "muri o shite wa ikemasen", kr: "무리해서는 안 됩니다." },
    { jp: "油断してはいけません。", ro: "yudan shite wa ikemasen", kr: "방심해서는 안 됩니다." },
    { jp: "嘘をついてはいけません。", ro: "uso o tsuite wa ikemasen", kr: "거짓말을 해서는 안 됩니다." },
    { jp: "明日、遅刻してもいいですか？", ro: "ashita, chikoku shite mo ii desuka", kr: "내일 지각해도 될까요?" },
    { jp: "いえ, 遅れてはいけませんよ。", ro: "ie, okurete wa ikemasen yo", kr: "아니요, 늦어서는 안 됩니다." },

    // 164 ～할 수밖에 없습니다
    { jp: "諦めるしかありません。", ro: "akirameru shika arimasen", kr: "포기할 수밖에 없습니다." },
    { jp: "やるしかありません。", ro: "yaru shika arimasen", kr: "할 수밖에 없습니다." },
    { jp: "待つしかありません。", ro: "matsu shika arimasen", kr: "기다릴 수밖에 없습니다." },
    { jp: "終電が行ってしまいました。", ro: "shuuden ga itte shimaimashita", kr: "막차가 가버렸어요." },
    { jp: "タクシーで帰るしかありませんね。", ro: "takushii de kaeru shika arimasen ne", kr: "택시 타고 돌아갈 수밖에 없겠네요." },

    // 165 ～에 따라 다릅니다
    { jp: "人によって違います。", ro: "hito ni yotte chigaimasu", kr: "사람에 따라 다릅니다." },
    { jp: "場合によって違います。", ro: "baai ni yotte chigaimasu", kr: "경우에 따라 다릅니다." },
    { jp: "時期によって違います。", ro: "jiki ni yotte chigaimasu", kr: "시기에 따라 다릅니다." },
    { jp: "値段はいくらですか？", ro: "nedan wa ikura desuka", kr: "가격은 얼마인가요?" },
    { jp: "種類によって違います。", ro: "shurui ni yotte chigaimasu", kr: "종류에 따라 다릅니다." },

    // 166 ～하자마자 (동시성)
    { jp: "家に着くなり寝てしまいました。", ro: "ie ni tsukunari nete shimaimashita", kr: "집에 도착하자마자 자버렸습니다." },
    { jp: "それを聞くなり怒り出しました。", ro: "sore o kikunari okoridashimashita", kr: "그걸 듣자마자 화를 내기 시작했습니다." },
    { jp: "田中さんは？", ro: "tanaka san wa", kr: "다나카 씨는요?" },
    { jp: "電話を切るなり、出て行きましたよ。", ro: "denwa o kirunari, dete ikimashita yo", kr: "전화를 끊자마자 나갔어요." },

    // 167 ～에 대해 조사하고 있습니다
    { jp: "原因について調べています。", ro: "gen'in ni tsuite shirabete imasu", kr: "원인에 대해 조사하고 있습니다." },
    { jp: "市場について調べています。", ro: "ichiba ni tsuite shirabete imasu", kr: "시장에 대해 조사하고 있습니다." },
    { jp: "他社の動向について調べています。", ro: "tasha no doukou ni tsuite shirabete imasu", kr: "타사의 동향에 대해 조사하고 있습니다." },
    { jp: "進捗はどうですか？", ro: "shinchoku wa dou desuka", kr: "진척 상황은 어떤가요?" },
    { jp: "現在、詳細について調べているところです。", ro: "genzai, shousai ni tsuite shirabete iru tokoro desu", kr: "현재 상세 내용에 대해 조사 중입니다." },

    // 168 ～라고 들었습니다 (전언)
    { jp: "そう聞きました。", ro: "sou kikimashita", kr: "그렇게 들었습니다." },
    { jp: "田中さんが辞めると聞きました。", ro: "tanaka san ga yameru to kikimashita", kr: "다나카 씨가 그만둔다고 들었습니다." },
    { jp: "明日は休みだと聞きました。", ro: "ashita wa yasumi da to kikimashita", kr: "내일은 쉰다고 들었습니다." },
    { jp: "本当ですか？", ro: "hontou desuka", kr: "정말인가요?" },
    { jp: "ええ、部長から直接聞きました。", ro: "ee, buchou kara chokusetsu kikimashita", kr: "네, 부장님께 직접 들었습니다." },

    // 169 ～하고 싶다고 생각합니다 (의지/희망)
    { jp: "参加したいと思っています。", ro: "sankashitai to omotte imasu", kr: "참가하고 싶다고 생각합니다(참가하고 싶습니다)." },
    { jp: "お役に立ちたいと思っています。", ro: "oyakunitachitai to omotte imasu", kr: "도움이 되고 싶다고 생각합니다." },
    { jp: "もっと勉強したいと思っています。", ro: "motto benkyoushital to omotte imasu", kr: "더 공부하고 싶다고 생각합니다." },
    { jp: "将来の夢は何ですか？", ro: "shourai no yume wa nan desuka", kr: "장래 희망이 무엇입니까?" },
    { jp: "日本で起業したいと思っています。", ro: "nihon de kigyou shitai to omotte imasu", kr: "일본에서 창업하고 싶습니다." },

    // 170 ～하지 않기로 했습니다 (부정적 결정)
    { jp: "行かないことにしました。", ro: "ikanai koto ni shimashita", kr: "안 가기로 했습니다." },
    { jp: "買わないことにしました。", ro: "kawanai koto ni shimashita", kr: "안 사기로 했습니다." },
    { jp: "言わないことにしました。", ro: "iwanai koto ni shimashita", kr: "말하지 않기로 했습니다." },
    { jp: "転職はどうしましたか？", ro: "tenshoku wa dou shimashitaka", kr: "이직은 어떻게 됐나요?" },
    { jp: "今の会社に残ることにしました。", ro: "ima no kaisha ni nokoru koto ni shimashita", kr: "지금 회사에 남기로 했습니다." },

    // 171 ～하게 해 주세요 (허가 구하기)
    { jp: "説明させてください。", ro: "setsumei sasete kudasai", kr: "설명하게 해주세요(설명하겠습니다)." },
    { jp: "考えさせてください。", ro: "kangaesasete kudasai", kr: "생각하게 해주세요(생각할 시간을 주세요)." },
    { jp: "私にやらせてください。", ro: "watashi ni yarassete kudasai", kr: "제가 하게 해주세요." },
    { jp: "この件、どうしますか？", ro: "kono ken, dou shimasuka", kr: "이 건 어떻게 할까요?" },
    { jp: "一度、持ち帰って検討させてください。", ro: "ichido, mochikaette kentou sasete kudasai", kr: "일단 가져가서 검토하게 해주십시오." },

    // 172 ～인 줄 알았습니다 (착각)
    { jp: "休みだと思っていました。", ro: "yasumi da to omotte imashita", kr: "쉬는 날인 줄 알았습니다." },
    { jp: "終わったと思っていました。", ro: "owatta to omotte imashita", kr: "끝난 줄 알았습니다." },
    { jp: "田中さんだと思っていました。", ro: "tanaka san da to omotte imashita", kr: "다나카 씨인 줄 알았습니다." },
    { jp: "会議は明日ですよ。", ro: "kaigi wa ashita desu yo", kr: "회의는 내일이에요." },
    { jp: "えっ、今日だと思っていました。", ro: "e, kyou da to omotte imashita", kr: "앗, 오늘인 줄 알았어요." },

    // 173 ～할 수 있을 것 같습니다 (가능성 추측)
    { jp: "できそうです。", ro: "dekisou desu", kr: "할 수 있을 것 같습니다." },
    { jp: "間に合いそうです。", ro: "maniaishou desu", kr: "시간 안에 댈 수 있을 것 같습니다." },
    { jp: "勝てそうです。", ro: "katesou desu", kr: "이길 수 있을 것 같습니다." },
    { jp: "今日中に終わりますか？", ro: "kyoujuu ni owarimasuka", kr: "오늘 중으로 끝날까요?" },
    { jp: "はい, なんとかできそうです。", ro: "hai, nantoka dekisou desu", kr: "네, 어떻게든 될 것 같습니다." },

    // 174 ～한 덕분에 (감사/결과)
    { jp: "お力添えのおかげです。", ro: "ochikara zoe no okage desu", kr: "도와주신 덕분입니다." },
    { jp: "ご指導のおかげです。", ro: "goshidou no okage desu", kr: "지도해 주신 덕분입니다." },
    { jp: "皆様の協力のおかげです。", ro: "minasama no kyouryoku no okage desu", kr: "여러분 협력 덕분입니다." },
    { jp: "無事に終わりましたね。", ro: "buji ni owarimashita ne", kr: "무사히 끝났네요." },
    { jp: "はい, 田中さんのおかげです。", ro: "hai, tanaka san no okage desu", kr: "네, 다나카 씨 덕분입니다." },

    // 175 ～하러 왔습니다 (목적)
    { jp: "挨拶に伺いました。", ro: "aisatsu ni ukagaimashita", kr: "인사드리러 왔습니다." },
    { jp: "資料を届けに来ました。", ro: "shiryou o todoke ni kimashita", kr: "자료를 전하러 왔습니다." },
    { jp: "相談に参りました。", ro: "soudan ni mairimashita", kr: "상담하러 왔습니다." },
    { jp: "今日はどういったご用件ですか？", ro: "kyou wa douitta goyouken desuka", kr: "오늘은 어떤 용건이신가요?" },
    { jp: "新製品の紹介に伺いました。", ro: "shinseihin no shoukai ni ukagaimashita", kr: "신제품 소개를 하러 왔습니다." },

    // 176 ～하고 나서 (순서)
    { jp: "確認してから連絡します。", ro: "kakunin shite kara renraku shimasu", kr: "확인하고 나서 연락할게요." },
    { jp: "食べてから行きます。", ro: "tabete kara ikimasu", kr: "먹고 나서 가겠습니다." },
    { jp: "相談してから決めます。", ro: "soudan shite kara kimemasu", kr: "상담하고 나서 결정하겠습니다." },
    { jp: "いつ返事をいただけますか？", ro: "itsu henji o itadakemasuka", kr: "언제 답변을 받을 수 있을까요?" },
    { jp: "上司と話してからお答えします。", ro: "joushi to hanashite kara okotae shimasu", kr: "상사와 이야기하고 나서 답변드리겠습니다." },

    // 177 ～하게 되어서 영광입니다
    { jp: "お会いできて光栄です。", ro: "oai dekite kouei desu", kr: "뵙게 되어 영광입니다." },
    { jp: "ご一緒できて光栄です。", ro: "goissho dekite kouei desu", kr: "함께하게 되어 영광입니다." },
    { jp: "お役に立てて光栄です。", ro: "oyakunitatete kouei desu", kr: "도움이 되어 영광입니다." },
    { jp: "本日はありがとうございました。", ro: "honjitsu wa arigatou gozaimashita", kr: "오늘 정말 감사했습니다." },
    { jp: "こちらこそ, お招きいただき光栄です。", ro: "kochirakoso, omaneki itadaki kouei desu", kr: "저야말로 초대해 주셔서 영광입니다." },

    // 178 ～일 리가 없습니다 (확신적 부정)
    { jp: "あり得ません。", ro: "ariemasen", kr: "있을 수 없는 일입니다(말도 안 됩니다)." },
    { jp: "間違えるはずがありません。", ro: "machigaeru hazu ga arimasen", kr: "틀릴 리가 없습니다." },
    { jp: "忘れるはずがありません。", ro: "wasureru hazu ga arimasen", kr: "잊을 리가 없습니다." },
    { jp: "彼が犯人でしょうか？", ro: "kare ga hannin deshouka", kr: "그가 범인일까요?" },
    { jp: "いいえ, そんなことはあり得ません。", ro: "iie, sonna koto wa ariemasen", kr: "아니요, 그런 일은 있을 수 없습니다." },

    // 179 ～할 가치가 있습니다
    { jp: "見る価値があります。", ro: "miru kachi ga arimasu", kr: "볼 가치가 있습니다." },
    { jp: "試す価値があります。", ro: "tamesu kachi ga arimasu", kr: "시도해 볼 가치가 있습니다." },
    { jp: "検討する価値があります。", ro: "kentou suru kachi ga arimasu", kr: "검토할 가치가 있습니다." },
    { jp: "この映画, どうですか？", ro: "kono eiga, dou desuka", kr: "이 영화 어때요?" },
    { jp: "一度は見る価値があると思いますよ。", ro: "ichido wa miru kachi ga aru to omoimasu yo", kr: "한번은 볼 가치가 있다고 생각해요." },

    // 180 ～하는 경향이 있습니다
    { jp: "遅れる傾向があります。", ro: "okureru keikou ga arimasu", kr: "늦어지는 경향이 있습니다." },
    { jp: "忘れやすい傾向があります。", ro: "wasureyasui keikou ga arimasu", kr: "잊어버리기 쉬운 경향이 있습니다." },
    { jp: "最近の若者は車を離れる傾向があります。", ro: "saikin no wakamono wa kuruma o hanareru keikou ga arimasu", kr: "요즘 젊은이들은 차를 멀리하는 경향이 있습니다." },
    { jp: "景気はどうですか？", ro: "keiki wa dou desuka", kr: "경기는 어떤가요?" },
    { jp: "少しずつ回復する傾向にあります。", ro: "sukoshizutsu kaifuku suru keikou ni arimasu", kr: "조금씩 회복되는 경향에 있습니다." },

    // 181 ～하라는 말을 들었습니다 (수동)
    { jp: "来るように言われました。", ro: "kuru you ni iwaremashita", kr: "오라는 말을 들었습니다." },
    { jp: "待つように言われました。", ro: "matsu you ni iwaremashita", kr: "기다리라는 말을 들었습니다." },
    { jp: "辞めるように言われました。", ro: "yameru you ni iwaremashita", kr: "그만두라는 말을 들었습니다." },
    { jp: "どうしてここにいるのですか？", ro: "doushite koko ni iru no desuka", kr: "왜 여기 있습니까?" },
    { jp: "部長に、ここで待つように言われました。", ro: "buchou ni, koko de matsu you ni iwaremashita", kr: "부장님께 여기서 기다리라는 말을 들었습니다." },

    // 182 ～하기로 결정되었습니다
    { jp: "日本に行くことに決まりました。", ro: "nihon ni iku koto ni kimarimashita", kr: "일본에 가기로 결정되었습니다." },
    { jp: "中止に決まりました。", ro: "chuushi ni kimarimashita", kr: "중지로 결정되었습니다." },
    { jp: "新社長は誰ですか？", ro: "shinshachou wa dare desuka", kr: "새 사장님은 누구인가요?" },
    { jp: "田中さんに決まりました。", ro: "tanaka san ni kimarimashita", kr: "다나카 씨로 결정되었습니다." },

    // 183 ～할 준비가 되었습니다
    { jp: "準備ができました。", ro: "junbi ga dekimashita", kr: "준비가 되었습니다." },
    { jp: "心の準備ができました。", ro: "kokoro no junbi ga dekimashita", kr: "마음의 준비가 되었습니다." },
    { jp: "出発の準備ができました。", ro: "shuppatsu no junbi ga dekimashita", kr: "출발 준비가 되었습니다." },
    { jp: "会議を始めましょうか？", ro: "kaigi o hajimemashouka", kr: "회의를 시작할까요?" },
    { jp: "はい, 準備ができました。どうぞ。", ro: "hai, junbi ga dekimashita. douzo", kr: "네, 준비됐습니다. 시작하시죠." },

    // 184 ～에 관심이 있습니다
    { jp: "興味があります。", ro: "kyoumi ga arimasu", kr: "관심이 있습니다." },
    { jp: "日本文化に興味があります。", ro: "nihon bunka ni kyoumi ga arimasu", kr: "일본 문화에 관심이 있습니다." },
    { jp: "投資に興味があります。", ro: "toushi ni kyoumi ga arimasu", kr: "투자에 관심이 있습니다." },
    { jp: "趣味は何ですか？", ro: "shumi wa nan desuka", kr: "취미가 무엇인가요?" },
    { jp: "最近、AIの技術に興味があります。", ro: "saikin, ai no gijutsu ni kyoumi ga arimasu", kr: "최근 AI 기술에 관심이 있습니다." },

    // 185 ～라고 생각해도 좋습니다
    { jp: "成功だと思ってもいいです。", ro: "seikou da to omotte mo ii desu", kr: "성공이라고 생각해도 좋습니다." },
    { jp: "終わったと思ってもいいです。", ro: "owatta to omotte mo ii desu", kr: "끝났다고 생각해도 좋습니다." },
    { jp: "合格だと思ってもいいです。", ro: "goukaku da to omotte mo ii desu", kr: "합격이라고 생각해도 좋습니다." },
    { jp: "この結果, どうですか？", ro: "kono kekka, dou desuka", kr: "이 결과 어때요?" },
    { jp: "ほぼ目標達成だと思ってもいいですよ。", ro: "hobo mokuhyou tassei da to omotte mo ii desu yo", kr: "거의 목표 달성이라고 봐도 무방합니다." },

    // 186 ～에 대해 알려주세요
    { jp: "詳細について教えてください。", ro: "shousai ni tsuite oshiete kudasai", kr: "상세 내용에 대해 알려주세요." },
    { jp: "使い方について教えてください。", ro: "tsukaikata ni tsuite oshiete kudasai", kr: "사용법에 대해 알려주세요." },
    { jp: "進め方について教えてください。", ro: "susumekata ni tsuite oshiete kudasai", kr: "진행 방식에 대해 알려주세요." },
    { jp: "わからないことがありますか？", ro: "wakaranai koto ga arimasuka", kr: "모르는 게 있나요?" },
    { jp: "はい, スケジュールについて教えてください。", ro: "hai, sukejuuru ni tsuite oshiete kudasai", kr: "네, 일정에 대해 알려주세요." },

    // 187 ～할 가능성이 있습니다
    { jp: "遅れる可能性があります。", ro: "okureru kanousei ga arimasu", kr: "늦어질 가능성이 있습니다." },
    { jp: "中止になる可能性があります。", ro: "chuushi ni naru kanousei ga arimasu", kr: "중지될 가능성이 있습니다." },
    { jp: "間違っている可能性があります。", ro: "machigatte iru kanousei ga arimasu", kr: "틀렸을 가능성이 있습니다." },
    { jp: "明日、雨が降りますか？", ro: "ashita, ame ga furimasuka", kr: "내일 비가 올까요?" },
    { jp: "ええ, 降る可能性があります。", ro: "ee, furu kanousei ga arimasu", kr: "네, 올 가능성이 있습니다." },

    // 188 ～하는 것이 최선입니다
    { jp: "待つのが最善です。", ro: "matsu no ga saizen desu", kr: "기다리는 것이 최선입니다." },
    { jp: "謝るのが最善です。", ro: "ayamaru no ga saizen desu", kr: "사과하는 것이 최선입니다." },
    { jp: "話し合うのが最善です。", ro: "hanashiau no ga saizen desu", kr: "의논하는 것이 최선입니다." },
    { jp: "どうすればいいでしょうか？", ro: "dou sureba ii deshouka", kr: "어떻게 하면 좋을까요?" },
    { jp: "今は静観するのが最善だと思います。", ro: "ima wa seikan suru no ga saizen da to omoimasu", kr: "지금은 지켜보는 것이 최선이라고 생각합니다." },

    // 189 ～하고 싶지 않습니다 (거절)
    { jp: "やりたくありません。", ro: "yaritaku arimasen", kr: "하고 싶지 않습니다." },
    { jp: "行きたくありません。", ro: "ikitaku arimasen", kr: "가고 싶지 않습니다." },
    { jp: "会いたくありません。", ro: "aitaku arimasen", kr: "만나고 싶지 않습니다." },
    { jp: "残業できますか？", ro: "zangyou dekimasuka", kr: "야근 가능하세요?" },
    { jp: "すみません, 今日は帰りたくて。", ro: "sumimasen, kyou wa kaeritakute", kr: "죄송합니다, 오늘은 (일찍) 가고 싶어서요." },

    // 190 ～하는 것을 잊지 마세요
    { jp: "確認するのを忘れないでください。", ro: "kakunin suru no o wasurenaide kudasai", kr: "확인하는 것을 잊지 마세요." },
    { jp: "連絡するのを忘れないでください。", ro: "renraku suru no o wasurenaide kudasai", kr: "연락하는 것을 잊지 마세요." },
    { jp: "鍵をかけるのを忘れないでください。", ro: "kagi o kakeru no o wasurenaide kudasai", kr: "문 잠그는 것을 잊지 마세요." },
    { jp: "明日、10時ですよ。", ro: "ashita, juuji desu yo", kr: "내일 10시예요." },
    { jp: "はい, 遅れないようにするのを忘れません。", ro: "hai, okurenai you ni suru no o wasuremasen", kr: "네, 늦지 않도록 하는 것 잊지 않겠습니다." },

    // 191 ～할 생각은 없습니다 (부인)
    { jp: "辞めるつもりはありません。", ro: "yameru tsumori wa arimasen", kr: "그만둘 생각은 없습니다." },
    { jp: "売るつもりはありません。", ro: "uru tsumori wa arimasen", kr: "팔 생각은 없습니다." },
    { jp: "嘘をつくつもりはありません。", ro: "uso o tsuku tsumori wa arimasen", kr: "거짓말할 생각은 없습니다." },
    { jp: "謝ってください。", ro: "ayamatte kudasai", kr: "사과하세요." },
    { jp: "悪いことをしたつもりはありません。", ro: "warui koto o shita tsumori wa arimasen", kr: "나쁜 짓을 했다고 생각하지(그럴 의도는) 없습니다." },

    // 192 ～해도 의미가 없습니다
    { jp: "やっても意味がありません。", ro: "yatte mo imi ga arimasen", kr: "해도 의미가 없습니다." },
    { jp: "言っても意味がありません。", ro: "itte mo imi ga arimasen", kr: "말해도 의미가 없습니다." },
    { jp: "後悔しても意味がありません。", ro: "koukai shite mo imi ga arimasen", kr: "후회해도 의미가 없습니다." },
    { jp: "もう一度説明しましょうか？", ro: "mou ichido setsumei shimashouka", kr: "다시 한번 설명할까요?" },
    { jp: "いいえ, 彼は聞きませんから、意味がありません。", ro: "iie, kare wa kikimasen kara, imi ga arimasen", kr: "아니요, 그는 듣지 않을 테니 의미가 없어요." },

    // 193 ～라고 해도 과언이 아닙니다
    { jp: "最高だと言っても過言ではありません。", ro: "saikou da to itte mo kagon dewa arimasen", kr: "최고라고 해도 과언이 아닙니다." },
    { jp: "奇跡だと言っても過言ではありません。", ro: "kiseki da to itte mo kagon dewa arimasen", kr: "기적이라고 해도 과언이 아닙니다." },
    { jp: "運命だと言っても過言ではありません。", ro: "unmei da to itte mo kagon dewa arimasen", kr: "운명이라고 해도 과언이 아닙니다." },
    { jp: "このプロジェクト, 大成功ですね。", ro: "kono purojekuto, daiseikou desu ne", kr: "이 프로젝트 대성공이네요." },
    { jp: "ええ, 歴史に残ると言っても過言ではありません。", ro: "ee, rekishi ni nokoru to itte mo kagon dewa arimasen", kr: "네, 역사에 남을 일이라 해도 과언이 아닙니다." },

    // 194 ～하게 되었습니다 (완료된 상황)
    { jp: "決まりました。", ro: "kimarimashita", kr: "결정되었습니다." },
    { jp: "準備が整いました。", ro: "junbi ga totonoimashita", kr: "준비가 갖춰졌습니다." },
    { jp: "話がつきました。", ro: "hanashi ga tsukimashita", kr: "이야기가 되었습니다(합의되었습니다)." },
    { jp: "交渉はどうなりましたか？", ro: "koushou wa dou narimashitaka", kr: "협상은 어떻게 되었습니까?" },
    { jp: "無事に合意に至りました。", ro: "buji ni goui ni itarimashita", kr: "무사히 합의에 이르렀습니다." },

    // 195 ～이기를 바랍니다 (기원)
    { jp: "成功を祈っています。", ro: "seikou o inotte imasu", kr: "성공을 빌고 있습니다." },
    { jp: "無事を祈っています。", ro: "buji o inotte imasu", kr: "무사하기를 빌고 있습니다." },
    { jp: "合格を祈っています。", ro: "goukaku o inotte imasu", kr: "합격을 빌고 있습니다." },
    { jp: "明日、大事なプレゼンなんです。", ro: "ashita, daiji na purezen nan desu", kr: "내일 중요한 발표가 있어요." },
    { jp: "頑張ってください. うまくいくよう祈っています。", ro: "ganbatte kudasai. umaku iku you inotte imasu", kr: "힘내세요. 잘되기를 빌게요." },

    // 196 ～에 만족하고 있습니다
    { jp: "満足しています。", ro: "manzoku shite imasu", kr: "만족하고 있습니다." },
    { jp: "結果に満足しています。", ro: "kekka ni manzoku shite imasu", kr: "결과에 만족합니다." },
    { jp: "現状に満足しています。", ro: "genjou ni manzoku shite imasu", kr: "현상태에 만족합니다." },
    { jp: "新しい仕事はどうですか？", ro: "atarashii shigoto wa dou desuka", kr: "새 업무는 어때요?" },
    { jp: "はい, とても満足しています。", ro: "hai, totemo manzoku shite imasu", kr: "네, 아주 만족하고 있어요." },

    // 197 ～하는 습관이 있습니다
    { jp: "メモする習慣があります。", ro: "memo suru shuukan ga arimasu", kr: "메모하는 습관이 있습니다." },
    { jp: "早起きする習慣があります。", ro: "hayaoki suru shuukan ga arimasu", kr: "일찍 일어나는 습관이 있습니다." },
    { jp: "確認する習慣をつけましょう。", ro: "kakunin suru shuukan o tsukemashou", kr: "확인하는 습관을 들입시다." },
    { jp: "ミスを減らすにはどうすればいいですか？", ro: "misu o herasu ni wa dou sureba ii desuka", kr: "실수를 줄이려면 어떻게 해야 할까요?" },
    { jp: "ダブルチェックする習慣をつけるのが一番です。", ro: "daburu chekku suru shuukan o tsukeru no ga ichiban desu", kr: "이중 체크하는 습관을 들이는 게 제일입니다." },

    // 198 ～하기 위해 노력 중입니다
    { jp: "改善するために努力しています。", ro: "kaizen suru tame ni doryoku shite imasu", kr: "개선하기 위해 노력 중입니다." },
    { jp: "理解するために努力しています。", ro: "rikai suru tame ni doryoku shite imasu", kr: "이해하기 위해 노력 중입니다." },
    { jp: "解決するために努力しています。", ro: "kaiketsu suru tame ni doryoku shite imasu", kr: "해결하기 위해 노력 중입니다." },
    { jp: "日本語, 毎日勉強していますか？", ro: "nihongo, mainichi benkyou shite imasuka", kr: "일본어 매일 공부하나요?" },
    { jp: "はい, 早く上達するために努力しています。", ro: "hai, hayaku joutatsu suru tame ni doryoku shite imasu", kr: "네, 빨리 실력을 키우기 위해 노력하고 있어요." },

    // 199 ～할 정도로 대단합니다
    { jp: "驚くほど素晴らしいです。", ro: "odoroku hodo subarashii desu", kr: "놀라울 정도로 훌륭합니다." },
    { jp: "信じられないほど速いです。", ro: "shinjirarenai hodo hayai desu", kr: "믿을 수 없을 정도로 빠릅니다." },
    { jp: "感動するほど美しいです。", ro: "kandou suru hodo utsukushii desu", kr: "감동할 만큼 아름답습니다." },
    { jp: "彼の成績はどうですか？", ro: "kare no seiseki wa dou desuka", kr: "그의 성적은 어떤가요?" },
    { jp: "天才だと思えるほど優秀です。", ro: "tensai da to omoeru hodo yuushuu desu", kr: "천재라고 생각될 정도로 우수합니다." },

    // 200 마지막으로 ～
    { jp: "最後に, お礼を申し上げます。", ro: "saigo ni, orei o moushiagemasu", kr: "마지막으로 감사의 말씀을 드립니다." },
    { jp: "最後に, 質問はありますか？", ro: "saigo ni, shitsumon wa arimasuka", kr: "마지막으로 질문 있습니까?" },
    { jp: "最後に, もう一度確認しましょう。", ro: "saigo ni, mou ichido kakunin shimashou", kr: "마지막으로 한 번 더 확인합시다." },
    { jp: "本日の会議は以上です。", ro: "honjitsu no kaigi wa ijou desu", kr: "오늘 회의는 이상입니다." },
    { jp: "最後に、次回の予定を決めておきましょう。", ro: "saigo ni, jikai no yotei o kimete okimashou", kr: "마지막으로 다음 일정을 정해 둡시다." }
];