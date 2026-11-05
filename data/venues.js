const venues = [
            // --- CAFES (1 to 25) ---
            { 
                name: "Yello Beverage Stop", type: "Cafe", vibe: "chill", rating: "4.7", 
                address: { en: "Seoul Street, 4th khoroo, Sukhbaatar District", mn: "Сүхбаатар дүүрэг, 4-р хороо, Сөүлийн гудамж", zh: "苏赫巴托区第四库罗首尔街", ko: "수흐바타르 구 서울 거리 4호" }, 
                mapsQuery: "Yello Beverage Stop Ulaanbaatar",
                desc: { en: "Cozy spot ideal for casual catchups over cold beverages and quick treats.", mn: "Хүйтэн ундаа, хөнгөн амттан идэн найзуудтайгаа чөлөөтэй яриа өрнүүлэхэд тохиромжтой аятайхан газар.", zh: "享用冷饮和快餐的绝佳休闲场所。", ko: "시원한 음료와 디저트를 즐기며 가볍게 담소 나누기 좋은 아늑한 곳." }, 
                tableVibe: { en: "Features low-top coffee tables and stool seating optimized for casual chats and late-night drinks with friends.", mn: "Найзуудтайгаа чөлөөтэй ярилцаж, оройн цагаар ундаа уухад тохирсон намхан кофены ширээ, сандалтай.", zh: "配备低矮咖啡桌和高脚凳，非常适合与朋友轻松闲聊和深夜畅饮。", ko: "친구들과 편안한 대화와 야간 음주를 즐기기에 최적화된 낮은 커피 테이블과 스툴 좌석." }, 
                tags: ["Casual", "Cold Drinks", "Hangout"] 
            },
            { 
                name: "Potala Coffee Shop", type: "Cafe", vibe: "studying", rating: "4.8", 
                address: { en: "Bayangol District, 2nd khoroo", mn: "Баянгол дүүрэг, 2-р хороо", zh: "巴彦高勒区第二库罗", ko: "바양골 구 2호" }, 
                mapsQuery: "Potala coffee shop Ulaanbaatar",
                desc: { en: "Quiet ambiance and warm lighting providing a peaceful space for focused reading and study sessions.", mn: "Дуу чимээ багатай, дулаахан гэрэлтүүлэгтэй нь төвлөрч ном унших, хийхэд тайван орчныг бүрдүүлдэг.", zh: "安静的氛围和温暖的灯光，为专注阅读和学习提供宁静空间。", ko: "집중해서 독서하고 공부하기 좋은 평화로운 공간과 따뜻한 조명." }, 
                tableVibe: { en: "Equipped with sturdy wooden study desks, reliable power outlets against perimeter walls, and soft lighting.", mn: "Бат бөх модон ширээ, хана дагуу байрлах цахилгааны залгуур болон зөөлөн гэрэлтүүлэгтэй.", zh: "配备坚固的木质学习桌、靠墙的可靠电源插座以及柔和的灯光。", ko: "튼튼한 원목 공부 책상, 벽면에 위치한 콘센트, 은은한 조명이 구비되어 있습니다." }, 
                tags: ["Quiet", "Focus", "Specialty Coffee"] 
            },
            { 
                name: "Meanwhile in Mongolia", type: "Cafe", vibe: "chill", rating: "4.9", 
                address: { en: "Downtown City Center", mn: "Хотхоны төв хэсэг", zh: "市中心区", ko: "도심 센터" }, 
                mapsQuery: "Meanwhile in Mongolia Ulaanbaatar",
                desc: { en: "A creative cultural hub blending indie tunes, local art, and relaxed conversations over drinks.", mn: "Инди хөгжим, орон нутгийн урлаг болон чөлөөт яриаг нэгтгэсэн бүтээлч соёлын төв.", zh: "融合了独立音乐、本土艺术和美酒闲聊的创意文化中心。", ko: "인디 음악과 지역 예술, 편안한 대화가 어우러지는 크리에이티브 문화 허브." }, 
                tableVibe: { en: "Eclectic vintage wooden tables surrounded by art pieces, perfect for socializing and enjoying chilled craft beers.", mn: "Урлагийн бүтээлүүдээр хүрээлэгдсэн хуучны загвартай модон ширээнүүд нь олон нийтийн яриа өрнүүлэхэд төгс тохирно.", zh: "艺术品环绕的复古木桌，非常适合社交和享用冰镇精酿啤酒。", ko: "예술 작품으로 둘러싸인 빈티지 원목 테이블, 사교와 시원한 수제 맥주를 즐기기에 완벽합니다." }, 
                tags: ["Artistic", "Indie Vibe", "Social"] 
            },
            { 
                name: "UBean Coffee House & Roasterie", type: "Cafe", vibe: "studying", rating: "4.9", 
                address: { en: "Nam Yan Ju Street, 13th microdistrict", mn: "Намьяанжүгийн гудамж, 13-р хороолол", zh: "南杨州街第13微区", ko: "남양주 거리 13번구" }, 
                mapsQuery: "UBean Coffee House Roasterie Ulaanbaatar",
                desc: { en: "Renowned local roastery with spacious communal work tables and exceptional single-origin brews.", mn: "Өргөн уудам хамтын ажиллагааны ширээтэй, чанартай кофег санал болгодог алдартай газар.", zh: "知名的本地烘焙坊，拥有宽敞的公共工作桌和极佳的单一产地咖啡。", ko: "넓은 공용 워크 테이블과 뛰어난 싱글 오리진 커피를 자랑하는 현지 로스터리." }, 
                tableVibe: { en: "Features a massive central communal oak table with embedded charging stations and quiet individual corner chairs.", mn: "Цэнэглэгчтэй том төв модон ширээ болон булангийн чимээгүй ганцаарчилсан суудалтай.", zh: "设有配有充电站的大型中央公共橡木桌和安静的独立角落椅。", ko: "충전기가 내장된 대형 중앙 오크 테이블과 조용한 독립형 코너 체어가 마련되어 있습니다." }, 
                tags: ["Roastery", "Work Friendly", "Drip Coffee"] 
            },
            { 
                name: "Needle and Brew", type: "Cafe", vibe: "studying", rating: "4.8", 
                address: { en: "Seoul Street, Sukhbaatar District", mn: "Сүхбаатар дүүрэг, Сөүлийн гудамж", zh: "苏赫巴托区首尔街", ko: "수흐바타르 구 서울 거리" }, 
                mapsQuery: "Needle and Brew Ulaanbaatar",
                desc: { en: "Niche artisan coffee shop offering an intimate, distraction-free environment for students.", mn: "Оюутнуудад зориулсан сатаарах зүйлгүй, тухтай орчин бүхий кофе шоп.", zh: "小众手工咖啡馆，为学生提供私密、无干扰的环境。", ko: "학생들을 위해 방해받지 않는 아늑한 환경을 제공하는 수제 스페셜티 카페." }, 
                tableVibe: { en: "Small, intimate two-seater tables designed specifically for solo laptop work, intense study sessions, and quiet reading.", mn: "Ганцаараа компьютер дээр ажиллах, төвлөрч хичээл хийхэд зориулсан жижиг хоёр хүний ширээтэй.", zh: "专为独自笔记本办公、深度学习和安静阅读而设计的小型私密双人桌。", ko: "혼자 노트북 작업, 집중 학습, 조용한 독서를 하기에 알맞은 아담한 2인용 테이블." }, 
                tags: ["Intimate", "Artisan", "Quiet"] 
            },
            { 
                name: "Cafe 9", type: "Cafe", vibe: "chill", rating: "4.7", 
                address: { en: "Chingeltei District, 4th khoroo", mn: "Чингэлтэй дүүрэг, 4-р хороо", zh: "青格尔泰区第四库罗", ko: "칠겔테이 구 4호" }, 
                mapsQuery: "Cafe 9 Ulaanbaatar",
                desc: { en: "Sleek, modern interior favored by young locals looking to unwind with friends in the evening.", mn: "Оройн цагаар найзуудтайгаа алжаалаа тайлахыг хүсдэг залуусын дуртай орчин үеийн загвартай газар.", zh: "时尚现代的室内装潢，深受晚上与朋友放松的年轻本地人喜爱。", ko: "저녁에 친구들과 여유를 즐기려는 현지 젊은이들에게 인기 있는 세련된 인테리어." }, 
                tableVibe: { en: "Modern high-top bar counters and comfortable lounge sofas tailored for relaxed group hangouts.", mn: "Бүлгээрээ тухлахад зориулсан орчин үеийн өндөр бар болон зөөлөн буйдантай.", zh: "专为轻松聚会量身定制的现代高脚吧台和舒适的休息沙发。", ko: "편안한 모임을 위해 맞춤 제작된 모던한 하이탑 바 카운터와 아늑한 라운지 소파." }, 
                tags: ["Modern", "Youthful", "Social"] 
            },
            { 
                name: "Peaberry Specialty Coffee House", type: "Cafe", vibe: "studying", rating: "4.8", 
                address: { en: "Central Business District", mn: "Төв бизнесийн дүүрэг", zh: "中央商业区", ko: "중앙 비즈니스 지구" }, 
                mapsQuery: "Peaberry Specialty Coffee House Ulaanbaatar",
                desc: { en: "High-end specialty coffee house featuring ergonomic seating and great natural lighting.", mn: "Байгалийн саруул гэрэлтэй, тав тухтай суудалтай өндөр зэрэглэлийн кофе шоп.", zh: "高端精品咖啡馆，配有人体工学座椅和充足的自然采光。", ko: "인체공학적 좌석과 훌륭한 자연 채광을 갖춘 고품격 스페셜티 카페." }, 
                tableVibe: { en: "Ergonomic chairs paired with wide glass-side window tables that provide abundant natural sunlight for studying.", mn: "Хийхэд тохиромжтой байгалийн нарны гэрэл тусдаг цонхны дэргэдэх өргөн ширээтэй.", zh: "符合人体工学的椅子搭配宽敞的玻璃窗边桌，为学习提供充足的自然阳光。", ko: "공부하기 좋은 풍부한 자연 햇살이 들어오는 창가 테이블과 인체공학적 의자." }, 
                tags: ["Specialty Coffee", "Lighting", "Ergonomic"] 
            },
            { 
                name: "Coffee Esperanto", type: "Cafe", vibe: "studying", rating: "4.7", 
                address: { en: "Khan-Uul District, 1st khoroo", mn: "Хан-Уул дүүрэг, 1-р хороо", zh: "汗乌拉区第一库罗", ko: "한울 구 1호" }, 
                mapsQuery: "Coffee Esperanto Ulaanbaatar",
                desc: { en: "Welcoming sanctuary filled with book corners and excellent drip coffee for focused learners.", mn: "Номын булаг болон амттай дусаагуур кофегоор дүүрэн төвлөрч суралцагчдад зориулсан газар.", zh: "充满书籍角落和优质手冲咖啡的温馨避风港，适合专注的学习者。", ko: "집중해서 공부하는 사람들을 위한 책 코너와 훌륭한 드립 커피가 있는 아늑한 공간." }, 
                tableVibe: { en: "Cozy library-style tables surrounded by bookshelf walls, creating a zero-distraction sanctuary.", mn: "Номын тавиураар хүрээлэгдсэн номын сангийн загвартай тухтай ширээнүүдтэй.", zh: "书架墙环绕的舒适图书馆风格桌子，营造出零干扰的避难所。", ko: "책장으로 둘러싸인 아늑한 도서관 스타일의 테이블로 방해 없는 환경 제공." }, 
                tags: ["Books", "Drip Coffee", "Cozy"] 
            },
            { 
                name: "Tom N Toms Black", type: "Cafe", vibe: "studying", rating: "4.8", 
                address: { en: "Central Tower Area, Sukhbaatar District", mn: "Сүхбаатар дүүрэг, Централ Таурын орчим", zh: "苏赫巴托区中央大厦区", ko: "수흐바타르 구 센트럴 타워 지역" }, 
                mapsQuery: "Tom N Toms Black Ulaanbaatar",
                desc: { en: "Spacious premium branch offering late-night study booths and robust Wi-Fi connectivity.", mn: "Шөнийн цагаар хийхэд тохиромжтой булангууд болон хурдан интернэттэй том салбар.", zh: "宽敞的高端分店，提供深夜学习亭和强大的Wi-Fi连接。", ko: "심야 학습 부스와 빠른 와이파이를 제공하는 넓고 고급스러운 지점." }, 
                tableVibe: { en: "Spacious semi-private booths equipped with high-back seating and convenient plug sockets for group projects.", mn: "Бүлгийн төслүүдэд тохиромжтой залгуур болон өндөр түшлэгтэй хагас хувийн булангуудтай.", zh: "宽敞的半私密隔间，配有高靠背座椅和方便小组项目的电源插座。", ko: "팀 프로젝트에 적합한 콘센트와 높은 등받이 좌석이 있는 반개방형 부스." }, 
                tags: ["Late Night", "Wi-Fi", "Booths"] 
            },
            { 
                name: "Millie’s Cafe", type: "Cafe", vibe: "family", rating: "4.9", 
                address: { en: "Zaisan Expat Hub, Khan-Uul District", mn: "Хан-Уул дүүрэг, Зайсан", zh: "汗乌拉区宰桑外籍人员聚集区", ko: "한울 구 자이산" }, 
                mapsQuery: "Millies Cafe Ulaanbaatar",
                desc: { en: "Beloved family-friendly eatery known for comforting homemade bakes, hearty breakfasts, and warm service.", mn: "Гэрийн амттай нарийн боов, өглөөний цайгаараа алдартай гэр бүлийн таатай газар.", zh: "备受喜爱的家庭友好型餐厅，以温暖的手工烘焙、丰盛的早餐和热情的服务闻名。", ko: "홈메이드 베이커리와 든든한 조식, 친절한 서비스로 사랑받는 패밀리 레스토랑." }, 
                tableVibe: { en: "Large rectangular family dining tables with ample spacing for high chairs and children.", mn: "Хүүхдийн сандал байрлуулах хангалттай зайтай том дөрвөлжин гэр бүлийн ширээтэй.", zh: "宽大的长方形家庭餐桌，为高脚椅和儿童留有充足空间。", ko: "아기 의자와 아이들을 위한 충분한 공간이 있는 널찍한 직사각형 가족 식탁." }, 
                tags: ["Family Friendly", "Breakfast", "Comfort Bakes"] 
            },
            { 
                name: "R.O.C Drink Bar", type: "Cafe", vibe: "chill", rating: "4.8", 
                address: { en: "Khan-Uul District, 11th khoroo", mn: "Хан-Уул дүүрэг, 11-р хороо", zh: "汗乌拉区第11库罗", ko: "한울 구 11호" }, 
                mapsQuery: "ROC Caffeine bar Ulaanbaatar",
                desc: { en: "Trendy hangout spot that transitions smoothly into evening relaxation with craft beverages.", mn: "Оройн цагаар амрахад тохиромжтой загварлаг залуучуудын цуглардаг газар.", zh: "时尚的聚会场所，傍晚时分轻松转变为享受精酿饮品的放松之所。", ko: "수제 음료와 함께 저녁 휴식을 즐기기 좋은 트렌디한 hangout 장소." }, 
                tableVibe: { en: "Sleek metallic low tables and moody ambient lighting designed for evening socializing.", mn: "Оройн яриа хөөрөөнд зориулсан гэрэлтүүлэг болон төмөр хийцтэй намхан ширээнүүдтэй.", zh: "专为晚间社交设计的光滑金属低矮桌子和氛围感灯光。", ko: "저녁 사교 모임에 어울리는 세련된 메탈 소재의 로우 테이블과 무드 있는 조명." }, 
                tags: ["Trendy", "Evening Chill", "Beverages"] 
            },
            { 
                name: "Lahaul Coffee", type: "Cafe", vibe: "studying", rating: "4.7", 
                address: { en: "Peace Avenue", mn: "Энхтайвны өргөн чөлөө", zh: "和平大街", ko: "평화의 거리" }, 
                mapsQuery: "Lahaul Coffee Ulaanbaatar",
                desc: { en: "Minimalist decor, soft instrumental playlists, and a distraction-free atmosphere for academic work.", mn: "Цэвэрхэн минимал загвар, зөөлөн хөгжим болон хийхэд таатай орчин.", zh: "极简主义装饰、柔和的器乐播放列表，为学术工作提供无干扰的氛围。", ko: "미니멀한 인테리어와 부드러운 연주곡, 학업에 집중하기 좋은 조용한 환경." }, 
                tableVibe: { en: "Minimalist Scandinavian wooden desks designed to keep study sessions focused and peaceful.", mn: "Төвлөрлийг алдагдуулахгүй байхаар бүтээгдсэн Скандинав загварын модон ширээнүүдтэй.", zh: "极简的斯堪的纳维亚木质书桌，旨在保持学习过程专注而平和。", ko: "학습에 몰입할 수 있도록 디자인된 미니멀한 스칸디나비아풍 원목 책상." }, 
                tags: ["Minimalist", "Soft Music", "Study"] 
            },
            { 
                name: "Uruhan Coffee Shop", type: "Cafe", vibe: "family", rating: "4.8", 
                address: { en: "Central Residential Sector", mn: "Төв орон сууцны бүс", zh: "市中心住宅区", ko: "중앙 주거 지구" }, 
                mapsQuery: "Uruhan Coffee Shop Ulaanbaatar",
                desc: { en: "Inviting neighborhood coffee shop with pastry options that appeal to all generations.", mn: "Бүх насныханд тохирсон амттай нарийн боовтой тухтай хөршийн кофе шоп.", zh: "温馨的社区咖啡馆，提供老少咸宜的糕点选择。", ko: "모든 연령층이 좋아하는 베이커리가 있는 아늑한 동네 카페." }, 
                tableVibe: { en: "Comfortable cushioned seating arrangements that accommodate family gatherings of all sizes.", mn: "Бүх хэмжээний гэр бүлийн цуглааныг хүлээн авах боломжтой тухтай зөөлөн суудалтай.", zh: "舒适的软垫座位布局，可容纳各种规模的家庭聚会。", ko: "다양한 규모의 가족 모임을 수용할 수 있는 편안한 쿠션 좌석." }, 
                tags: ["Neighborhood", "Pastries", "Welcoming"] 
            },
            { 
                name: "Bloom Coffee Bar", type: "Cafe", vibe: "chill", rating: "4.9", 
                address: { en: "Botanical Quarter", mn: "Ботаникийн орчим", zh: "植物园周边", ko: "식물원 구역" }, 
                mapsQuery: "Bloom Coffee Bar Ulaanbaatar",
                desc: { en: "Chic floral-themed cafe environment offering wonderful photo-ops and relaxing music.", mn: "Цэцгэн чимэглэлтэй, зургаа татуулах сайхан орчин бүхий кофе шоп.", zh: "别致的花卉主题咖啡馆环境，提供绝佳的拍照机会和轻松的音乐。", ko: "멋진 포토존과 편안한 음악이 있는 시크한 플라워 테마 카페." }, 
                tableVibe: { en: "Round wicker tables surrounded by hanging flora and soft velvet lounge chairs.", mn: "Унжсан цэцэг болон зөөлөн хилэн сандлуудаар хүрээлэгдсэн дугуй ширээнүүдтэй.", zh: "悬挂的植物和柔软的天鹅绒躺椅环绕着圆形藤制桌子。", ko: "행잉 플랜트와 부드러운 벨벳 라운지 체어로 둘러싸인 원형 라탄 테이블." }, 
                tags: ["Floral", "Chic", "Relaxing"] 
            },
            { 
                name: "Haus", type: "Cafe", vibe: "studying", rating: "4.8", 
                address: { en: "Design District", mn: "Дизайн дүүрэг", zh: "设计区", ko: "디자인 지구" }, 
                mapsQuery: "Haus Ulaanbaatar",
                desc: { en: "Clean lines and Scandinavian design aesthetics tailored for focused creators and students.", mn: "Бүтээгч болон оюутнуудад зориулсан Скандинав загварын цэвэрхэн шийдэл.", zh: "专为专注的创作者和学生量身定制的简洁线条和北欧设计美学。", ko: "집중하는 크리에이터와 학생들을 위해 맞춤 제작된 깔끔한 스칸디나비아 디자인." }, 
                tableVibe: { en: "Clean rectangular oak tables paired with ergonomic chairs for maximum posture support.", mn: "Нурууг дэмжих эвхэгддэггүй тухтай сандал болон цэвэрхэн модон ширээтэй.", zh: "整洁的长方形橡木桌搭配人体工学椅，提供最大的坐姿支撑。", ko: "최적의 자세 유지를 위한 인체공학적 의자와 깔끔한 직사각형 오크 테이블." }, 
                tags: ["Scandinavian", "Clean Design", "Focus"] 
            },
            { 
                name: "SIP Ulaanbaatar", type: "Cafe", vibe: "chill", rating: "4.7", 
                address: { en: "Sukhbaatar District", mn: "Сүхбаатар дүүрэг", zh: "苏赫巴托区", ko: "수흐바타르 구" }, 
                mapsQuery: "SIP Ulaanbaatar",
                desc: { en: "Vibrant social hub great for catching up with friends over specialty teas and signature drinks.", mn: "Тусгай цай, ундаа уун найзуудтайгаа ярихад тохиромжтой амьд орчин.", zh: "充满活力的社交中心，非常适合与朋友品尝特色茶和招牌饮品并畅叙。", ko: "특선 차와 시그니처 음료를 즐기며 친구들과 수다 떨기 좋은 활기찬 공간." }, 
                tableVibe: { en: "Lively bar-height seating and sociable round tables meant for conversational group hangouts.", mn: "Яриа өрнүүлэхэд тохиромжтой ба өндөртэй сандал болон дугуй ширээнүүдтэй.", zh: "适合谈话和小组聚会的活跃高吧台座位和社交圆桌。", ko: "대화형 그룹 모임에 알맞은 활기찬 바 높이의 좌석과 원형 테이블." }, 
                tags: ["Social", "Teas", "Vibrant"] 
            },
            { 
                name: "Cohi Haus", type: "Cafe", vibe: "studying", rating: "4.8", 
                address: { en: "University Zone", mn: "Их сургуулийн гудамж", zh: "大学区", ko: "대학가" }, 
                mapsQuery: "Cohi Haus Ulaanbaatar",
                desc: { en: "Comfortable booth seating paired with reliable power outlets for long laptop sessions.", mn: "Компьютер дээрээ удаан ажиллахад тохиромжтой залгуур бүхий тухтай булангуудтай.", zh: "舒适的隔间座位搭配可靠的电源插座，适合长时间的笔记本电脑办公。", ko: "장시간 노트북 사용에 적합한 콘센트가 구비된 편안한 부스 좌석." }, 
                tableVibe: { en: "High-backed padded booths that block out ambient chatter for deep coding or study sprints.", mn: "Чимээ шуугианыг хаах өндөр түшлэгтэй зөөлөн буйдан бүхий ширээнүүдтэй.", zh: "高靠背软垫隔间，可阻挡周围嘈杂声，适合深度编程或冲刺学习。", ko: "주위 소음을 차단하여 코딩이나 학습에 깊이 몰입할 수 있는 높은 등받이 부스." }, 
                tags: ["Outlets", "Booths", "Laptop Friendly"] 
            },
            { 
                name: "Goose Cafe and Bar", type: "Cafe", vibe: "chill", rating: "4.9", 
                address: { en: "Entertainment Quarter", mn: "Зугаа цэнгэлийн бүс", zh: "娱乐区", ko: "엔터테인먼트 구역" }, 
                mapsQuery: "Goose Cafe and Bar Ulaanbaatar",
                desc: { en: "Day-to-night venue offering great coffee options in the afternoon and cold beer selections by night.", mn: "Өдрийн цагаар кофе, оройн цагаар хүйтэн шар айраг санал болгодог газар.", zh: "日夜皆宜的场所，下午提供优质咖啡，夜晚供应精选冰镇啤酒。", ko: "낮에는 훌륭한 커피를, 밤에는 시원한 맥주를 즐길 수 있는 주야간 복합 공간." }, 
                tableVibe: { en: "Sturdy wooden tables that easily transition from afternoon laptop work to evening beer pitchers.", mn: "Өдрийн ажлаас оройн шар айрагны цуглаан руу шилжихэд тохиромжтой бат бөх модон ширээтэй.", zh: "坚固的木桌，可轻松从下午的笔记本办公过渡到晚间的扎啤聚会。", ko: "오후 노트북 작업에서 저녁 맥주 피처 타임으로 쉽게 전환되는 튼튼한 원목 테이블." }, 
                tags: ["Day-to-Night", "Cold Beer", "Hangout"] 
            },
            { 
                name: "Bird Jazz Cafe", type: "Cafe", vibe: "chill", rating: "4.9", 
                address: { en: "Arts District", mn: "Урлагийн гудамж", zh: "艺术区", ko: "예술인 거리" }, 
                mapsQuery: "Bird Jazz Cafe Ulaanbaatar",
                desc: { en: "Soulful venue playing smooth jazz backgrounds while serving craft beers and artisanal brews.", mn: "Жазз хөгжим эгшиглэсэн, гар аргаар хийсэн ундаа шар айрагтай тухтай орчин.", zh: "充满灵魂的场所，播放悠扬的爵士乐背景音乐，供应精酿啤酒和手工酿造饮品。", ko: "부드러운 재즈 음악과 함께 수제 맥주를 즐길 수 있는 소울풀한 공간." }, 
                tableVibe: { en: "Intimate candle-lit cocktail tables positioned near the stage for music lovers and drinkers.", mn: "Тайзны ойролцоо байрласан лааны гэрэлтэй коктейлийн ширээнүүдтэй.", zh: "靠近舞台的烛光鸡尾酒桌，专为音乐爱好者和饮酒者设立。", ko: "음악 애호가와 애주가들을 위해 무대 근처에 배치된 아늑한 촛불 칵테일 테이블." }, 
                tags: ["Jazz Music", "Craft Beer", "Soulful"] 
            },
            { 
                name: "Code Patisserie & Plus", type: "Cafe", vibe: "family", rating: "4.8", 
                address: { en: "Shangri-La Mall Area", mn: "Шангри-Ла Молл орчим", zh: "香格里拉购物中心区", ko: "샹그릴라 몰 지역" }, 
                mapsQuery: "Code Patisserie Plus Ulaanbaatar",
                desc: { en: "Upscale pastry shop with gorgeous cakes and comfortable seating arrangements for families.", mn: "Гэр бүлээрээ ирж амттай бялуу идэн тухлахад зориулсан өндөр зэрэглэлийн нарийн боовны газар.", zh: "高端甜品店，提供精美蛋糕和舒适的家庭座位。", ko: "환상적인 케이크와 편안한 가족 좌석이 있는 고급 파티세리." }, 
                tableVibe: { en: "Polished marble-top tables and plush velvet chairs designed for celebratory family dessert outings.", mn: "Гэр бүлийн баярт тохирсон гантиг тавцантай ширээ болон зөөлөн хилэн сандалтай.", zh: "抛光大理石桌面和毛绒天鹅绒椅子，专为家庭庆祝甜点聚会而设计。", ko: "가족 디저트 나들이와 축하 모임에 알맞은 광택 대리석 테이블과 벨벳 의자." }, 
                tags: ["Pastries", "Cakes", "Upscale"] 
            },
            { 
                name: "Café Park (Shangri-La)", type: "Cafe", vibe: "family", rating: "4.9", 
                address: { en: "Shangri-La Hotel Level 2", mn: "Шангри-Ла Зочид Буудал, 2-р давхар", zh: "香格里拉大饭店2层", ko: "샹그릴라 호텔 2층" }, 
                mapsQuery: "Cafe Park Shangri-La Ulaanbaatar",
                desc: { en: "Luxurious family dining and cafe experience overlooking park greenery with premium service.", mn: "Цэцэрлэгт хүрээлэн харагдах цонхтой, дээд зэргийн үйлчилгээтэй гэр бүлийн кафе.", zh: "俯瞰公园绿景、提供优质服务的奢华家庭餐饮和咖啡体验。", ko: "공원 녹지가 내려다보이는 프리미엄 서비스의 럭셔리 패밀리 다이닝 카페." }, 
                tableVibe: { en: "Expansive circular family tables with panoramic park views and attentive white-glove service.", mn: "Цэцэрлэгийн сайхан харагдах том дугуй гэр бүлийн ширээнүүдтэй.", zh: "拥有全景公园景观和周到尊贵服务的宽敞圆形家庭餐桌。", ko: "탁 트인 공원 전망과 세심한 서비스가 제공되는 널찍한 원형 가족 테이블." }, 
                tags: ["Shangri-La", "Luxury", "Greenery"] 
            },
            { 
                name: "Coffee Fellows", type: "Cafe", vibe: "studying", rating: "4.7", 
                address: { en: "Central Plaza", mn: "Төв Плаза", zh: "中央广场", ko: "센트럴 플라자" }, 
                mapsQuery: "Coffee Fellows Ulaanbaatar",
                desc: { en: "Relaxed European-style coffee house offering generous seating and reliable study nooks.", mn: "Өргөн уудам суудалтай, европ загварын тайван кофе шоп.", zh: "轻松的欧式咖啡馆，提供宽敞的座位和可靠的学习角落。", ko: "여유로운 좌석과 쾌적한 공부 공간을 제공하는 편안한 유럽풍 카페." }, 
                tableVibe: { en: "Deep armchair clusters and wide communal wooden tables popular among university student groups.", mn: "Оюутнуудын дунд алдартай гүн түшлэгтэй сандал болон том модон ширээнүүдтэй.", zh: "深色扶手椅群和宽大的公共木桌，深受大学生群体的欢迎。", ko: "대학생 그룹에게 인기 있는 깊은 암체어 군집과 넓은 공용 원목 테이블." }, 
                tags: ["European", "Spacious", "Nooks"] 
            },
            { 
                name: "Caffe Ti Amo", type: "Cafe", vibe: "chill", rating: "4.7", 
                address: { en: "Commercial Center", mn: "Худалдааны төв", zh: "商业中心", ko: "상업 중심가" }, 
                mapsQuery: "Caffe Ti Amo Ulaanbaatar",
                desc: { en: "Cozy Italian-inspired cafe corner ideal for casual chats and sweet treats with friends.", mn: "Итали хэв маягийн амттан идэн ярихад тухтай булан.", zh: "温馨的意式咖啡角落，是与朋友休闲聊天和享用甜点的理想场所。", ko: "친구들과 달콤한 디저트를 즐기며 담소 나누기 좋은 아늑한 이탈리아풍 카페." }, 
                tableVibe: { en: "Intimate two-person bistro tables nestled against warm brick feature walls.", mn: "Дулаан өнгөтэй тоосгон хананы дэргэдэх хоёр хүний жижиг ширээнүүдтэй.", zh: "紧邻温暖砖墙的私密双人小酒馆桌子。", ko: "따뜻한 벽돌 벽에 붙어 있는 아담한 2인용 비스트로 테이블." }, 
                tags: ["Italian Style", "Treats", "Casual"] 
            },
            { 
                name: "Jur Ur Bakery", type: "Cafe", vibe: "family", rating: "4.8", 
                address: { en: "Multiple Locations across Ulaanbaatar", mn: "Улаанбаатар хот даяар салбаруудтай", zh: "乌兰巴托多处分店", ko: "울란바토르 전역 여러 지점" }, 
                mapsQuery: "Jur Ur Bakery Ulaanbaatar",
                desc: { en: "Local staple famous for fresh traditional pastries, breads, and family-sized dessert boxes.", mn: "Шинэ талх нарийн боов, гэр бүлийн амттангүйгээр төсөөлөхийн аргагүй газар.", zh: "本地知名老字号，以新鲜传统糕点、面包和家庭装甜点盒闻名。", ko: "신선한 전통 페이스트리, 빵, 대용량 디저트 박스로 유명한 현지 베이커리." }, 
                tableVibe: { en: "Brightly lit family tables designed for quick, cheerful morning and afternoon pastry gatherings.", mn: "Өглөө болон өдрийн амттанг хамтдаа идэхэд тохиромжтой гэрэл гэгээтэй ширээнүүдтэй.", zh: "明亮的家庭餐桌，专为快捷愉快的早晨和下午糕点聚会而设计。", ko: "밝고 활기찬 아침 및 오후 베이커리 모임을 위한 환한 가족용 테이블." }, 
                tags: ["Local Staple", "Fresh Bread", "Family"] 
            },
            { 
                name: "Tous Les Jours", type: "Cafe", vibe: "family", rating: "4.9", 
                address: { en: "Major Shopping Centers", mn: "Томоохон худалдааны төвүүд", zh: "各大购物中心", ko: " 주요 쇼핑 센터" }, 
                mapsQuery: "Tous Les Jours Ulaanbaatar",
                desc: { en: "French-Asian bakery franchise offering wide variety of cakes and spacious family seating.", mn: "Төрөл бүрийн бялуу болон өргөн зайтай гэр бүлийн суудал бүхий франц-ази нарийн боов.", zh: "法亚面包连锁店，提供各种蛋糕和宽敞的家庭座位。", ko: "다양한 케이크와 넓은 가족 좌석을 제공하는 프랑스-아시아 베이커리 체인." }, 
                tableVibe: { en: "Spacious modern seating layouts with large display counters and family-sized booths.", mn: "Том лангуу болон гэр бүлийн булан бүхий орчин үеийн зайтай суудалтай.", zh: "宽敞现代的座位布局，配有大型展示柜和家庭大小的隔间。", ko: "큰 진열대와 패밀리 사이즈 부스가 있는 넓고 현대적인 좌석 배치." }, 
                tags: ["Bakery", "Cakes", "Spacious"] 
            },

            // --- RESTAURANTS (26 to 50) ---
            { 
                name: "Arig & Anya", type: "Restaurant", vibe: "family", rating: "4.8", 
                address: { en: "Central Ulaanbaatar", mn: "Улаанбаатар хотын төв", zh: "乌兰巴托市中心", ko: "울란바토르 중심가" }, 
                mapsQuery: "Arig Anya Ulaanbaatar",
                desc: { en: "Traditional and modern comfort dishes served in a warm, welcoming family environment.", mn: "Уламжлалт болон орчин үеийн амттай хоолыг гэр бүлийн дулаан орчинд үйлчилдэг.", zh: "在温馨热情的家庭环境中提供传统与现代舒适美食。", ko: "따뜻하고 아늑한 패밀리 분위기 속에서 제공되는 전통 및 현대식 컴포트 푸드." }, 
                tableVibe: { en: "Warm wooden banquet tables tailored for sharing large traditional platters across family generations.", mn: "Үе үеийн гэр бүлээрээ цуглаж хоолоо хуваан идэхэд зориулсан модон ширээтэй.", zh: "温馨的木质宴会桌，专为跨代家庭共享大型传统拼盘而量身定制。", ko: "대가족이 모여 커다란 전통 플래터를 함께 나누기 좋은 따뜻한 원목 식탁." }, 
                tags: ["Traditional", "Comfort Food", "Family"] 
            },
            { 
                name: "Modern Nomads", type: "Restaurant", vibe: "family", rating: "4.9", 
                address: { en: "Peace Avenue", mn: "Энхтайвны өргөн чөлөө", zh: "和平大街", ko: "평화의 거리" }, 
                mapsQuery: "Modern Nomads Ulaanbaatar",
                desc: { en: "Iconic Mongolian restaurant featuring authentic nomadic heritage cuisine and large family banquet tables.", mn: "Нүүдэлчдийн өв соёл шингэсэн амттай хоол, томоохон гэр бүлийн ширээтэй ресторан.", zh: "标志性的蒙古餐厅，提供正宗的游牧传统美食和大型家庭宴会桌。", ko: "정통 유목민 전통 요리와 넓은 가족 연회석을 갖춘 상징적인 몽골 레스토랑." }, 
                tableVibe: { en: "Traditional yurt-inspired private alcoves and heavy timber tables built for festive family reunions.", mn: "Гэрийн загвартай хувийн булангууд болон баярын цуглаанд зориулсан бат бөх модон ширээтэй.", zh: "受传统蒙古包启发而设计的私人包厢和厚重木桌，专为欢庆家庭聚会而建。", ko: "명절 가족 모임을 위해 전통 게르 영감을 받아 제작된 프라이빗 좌석과 묵직한 원목 테이블." }, 
                tags: ["Nomadic Heritage", "Banquet Tables", "Iconic"] 
            },
            { 
                name: "Rosewood Kitchen + Enoteca", type: "Restaurant", vibe: "chill", rating: "4.9", 
                address: { en: "Seoul Street Area", mn: "Сөүлийн гудамжны орчим", zh: "首尔街区", ko: "서울 거리 지역" }, 
                mapsQuery: "Rosewood Kitchen Enoteca Ulaanbaatar",
                desc: { en: "Upscale rustic bistro offering organic comfort food, fine wines, and craft beers.", mn: "Органик хоол, дарс болон гар аргаар хийсэн шар айраг санал болгодог газар.", zh: "高档田园风格小酒馆，提供有机舒适美食、精选葡萄酒和精酿啤酒。", ko: "유기농 컴포트 푸드, 와인, 수제 맥주를 제공하는 고급스러운 소박한 비스트로." }, 
                tableVibe: { en: "Rustic butcher-block community tables and cozy leather bar seats ideal for wine tasting and cold beers.", mn: "Дарс амтлах болон хүйтэн шар айраг уухад тохиромжтой арьсан сандалтай.", zh: "乡村风味砧板社区桌和舒适的皮革吧台座位，是品酒和冰镇啤酒的理想选择。", ko: "와인 시음과 시원한 맥주를 즐기기에 좋은 소박한 커뮤니티 테이블과 가죽 바 좌석." }, 
                tags: ["Fine Wines", "Organic", "Gastropub Vibe"] 
            },
            { 
                name: "Veranda Restaurant", type: "Restaurant", vibe: "family", rating: "4.8", 
                address: { en: "Near Bogd Khan Palace Museum", mn: "Богд Хааны Ордон Музейн ойролцоо", zh: "博格多汗宫博物馆附近", ko: "복드 칸 궁전 박물관 인근" }, 
                mapsQuery: "Veranda Restaurant Ulaanbaatar",
                desc: { en: "Chingeltei charming multi-level restaurant with scenic views and Italian-Mediterranean dishes suited for gatherings.", mn: "Сайхан орчинтой, гэр бүлийн цуглаанд тохирсон Итали-Газар дундын тэнгисийн хоолтой.", zh: "迷人的多层餐厅，拥有美景和适合聚会的意式地中海菜肴。", ko: "멋진 전망과 모임에 어울리는 이탈리안-지중해 요리를 제공하는 다층 구조의 레스토랑." }, 
                tableVibe: { en: "Sunlit veranda tables with panoramic glass windows overlooking green gardens for family dinners.", mn: "Цэцэрлэг харагдсан цэлгэр цонхтой, нарны гэрэл тусдаг веранда ширээтэй.", zh: "阳光充足的阳台桌，配有可俯瞰绿色花海的全景玻璃窗，适合家庭晚宴。", ko: "초록빛 정원이 내려다보이는 파노라마 통유리창과 햇살 가득한 베란다 테이블." }, 
                tags: ["Scenic Views", "Italian-Mediterranean", "Gatherings"] 
            },
            { 
                name: "Monet Fine Dining", type: "Restaurant", vibe: "family", rating: "4.9", 
                address: { en: "Art Gallery Wing", mn: "Урлагийн галерей", zh: "艺术画廊侧翼", ko: "미술관 구역" }, 
                mapsQuery: "Monet Fine Dining Ulaanbaatar",
                desc: { en: "Art-inspired fine dining restaurant offering exquisite tasting menus for special family milestones.", mn: "Урлагаас санаа авсан, гэр бүлийн онцгой мөчүүдэд зориулсан дээд зэрэглэлийн ресторан.", zh: "艺术灵感的高级餐厅，为特殊的家庭里程碑提供精致的品尝菜单。", ko: "특별한 가족 기념일을 위한 정교한 테이스팅 코스를 제공하는 예술적 파인 다이닝." }, 
                tableVibe: { en: "White-tablecloth dining setups spaced widely apart for private, elegant family celebrations.", mn: "Цэвэрхэн цагаан бүтээлэгтэй, хоорондоо зайтай байрласан тухтай ширээнүүдтэй.", zh: "白色桌布用餐布置，间距宽敞，适合私密、优雅的家庭庆祝活动。", ko: "프라이빗하고 우아한 가족 축하를 위해 넓은 간격으로 배치된 화이트 식탁 세팅." }, 
                tags: ["Fine Dining", "Artistic", "Milestones"] 
            },
            { 
                name: "Bluefin", type: "Restaurant", vibe: "chill", rating: "4.8", 
                address: { en: "Sukhbaatar District", mn: "Сүхбаатар дүүрэг", zh: "苏赫巴托区", ko: "수흐바타르 구" }, 
                mapsQuery: "Bluefin Restaurant Ulaanbaatar",
                desc: { en: "Premier seafood restaurant and bar featuring a sophisticated atmosphere and cold imported beers.", mn: "Чамин тансаг орчин, хүйтэн импортын шар айрагтай далайн хоолны ресторан.", zh: "顶级海鲜餐厅兼酒吧，拥有精致的氛围和冰镇进口啤酒。", ko: "세련된 분위기와 시원한 수입 맥주를 자랑하는 최고급 해산물 레스토랑 겸 바." }, 
                tableVibe: { en: "Sleek marine-themed booths and high-stool cocktail counters perfect for seafood and evening beers.", mn: "Далайн загварын булан болон оройн шар айраг уухад тохиромжтой өндөр сандалтай.", zh: "时尚的海洋主题隔间和高脚凳鸡尾酒柜台，非常适合海鲜和晚间啤酒。", ko: "해산물과 저녁 맥주를 즐기기에 완벽한 세련된 해양 테마 부스와 하이체어 카운터." }, 
                tags: ["Seafood", "Sophisticated", "Bar"] 
            },
            { 
                name: "Hutong (Shangri-La)", type: "Restaurant", vibe: "family", rating: "4.9", 
                address: { en: "Shangri-La Hotel Level 2", mn: "Шангри-Ла Зочид Буудал, 2-р давхар", zh: "香格里拉大饭店2层", ko: "샹그릴라 호텔 2층" }, 
                mapsQuery: "Hutong Shangri La Ulaanbaatar",
                desc: { en: "High-end Chinese dining experience with opulent private dining rooms for family banquets.", mn: "Гэр бүлийн томоохон цуглаанд зориулсан тансаг хувийн өрөө бүхий хятад хоолны газар.", zh: "高端中餐体验，设有富丽堂皇的家庭宴会包厢。", ko: "가족 연회를 위한 화려한 프라이빗 룸을 갖춘 고급 중식당." }, 
                tableVibe: { en: "Opulent round tables with central lazy-susan rotators designed for large family feast sharing.", mn: "Хоолоо хуваан идэхэд зориулсан эргэдэг төвтэй тансаг дугуй ширээтэй.", zh: "配有中央旋转盘的豪华圆桌，专为大型家庭盛宴共享而设计。", ko: "대가족이 함께 요리를 나눠 먹을 수 있도록 중앙 회전판이 있는 럭셔리 원형 테이블." }, 
                tags: ["Shangri-La", "Private Rooms", "Chinese"] 
            },
            { 
                name: "Route 22 Restaurant & Lounge", type: "Restaurant", vibe: "chill", rating: "4.8", 
                address: { en: "Highway Route Corridor", mn: "Хурдны замын чиглэл", zh: "高速公路走廊", ko: "고속도로 인근" }, 
                mapsQuery: "Route 22 Restaurant Lounge Ulaanbaatar",
                desc: { en: "Highway-themed lounge serving hearty grill platters and ice-cold draft beers with friends.", mn: "Шар айраг, махсан таваг амтлан найзуудтайгаа суухад тохиромжтой амьд орчин.", zh: "公路主题酒廊，与朋友共享丰盛的烤肉拼盘和冰镇扎啤。", ko: "친구들과 든든한 그릴 플래터와 시원한 생맥주를 즐길 수 있는 고속도로 테마 라운지." }, 
                tableVibe: { en: "Industrial metal-accented booths and rugged picnic tables built for group beer nights.", mn: "Бүлгээрээ шар айраг уухад тохиромжтой төмөр хийцтэй бат бөх ширээнүүдтэй.", zh: "工业风金属点缀的隔间和专为集体啤酒之夜打造的坚固野餐桌。", ko: "단체 맥주 모임을 위해 제작된 인더스트리얼 메탈 부스와 튼튼한 피크닉 테이블." }, 
                tags: ["Grill", "Draft Beer", "Lounge"] 
            },
            { 
                name: "Los Bandidos", type: "Restaurant", vibe: "chill", rating: "4.8", 
                address: { en: "Central Entertainment Hub", mn: "Төв цэнгээний төв", zh: "市中心娱乐中心", ko: "중앙 엔터테인먼트 허브" }, 
                mapsQuery: "Los Bandidos Ulaanbaatar",
                desc: { en: "Lively Tex-Mex eatery known for vibrant tacos, margaritas, and social weekend vibes.", mn: "Тако, маргарита болон амралтын өдрийн хөгжилтэй уур амьсгалаараа алдартай газар.", zh: "热闹的德州墨西哥餐厅，以色彩缤纷的玉米饼、玛格丽特酒和社交周末氛围闻名。", ko: "다채로운 타코, 마가리타, 활기찬 주말 분위기로 유명한 텍스멕스 레스토랑." }, 
                tableVibe: { en: "Colorful, festive booths and high-energy bar tables packed with groups enjoying drinks.", mn: "Хөгжилтэй өнгө төрх бүхий булангууд болон дүүрэн хүмүүстэй бар ширээтэй.", zh: "色彩缤纷、充满节日气氛的隔间和挤满享用饮品人群的高能量吧台桌。", ko: "음료를 즐기는 사람들로 가득 찬 화려하고 축제 분위기의 부스와 바 테이블." }, 
                tags: ["Tex-Mex", "Tacos", "Vibrant"] 
            },
            { 
                name: "Hazara Restaurant", type: "Restaurant", vibe: "family", rating: "4.9", 
                address: { en: "Zaisan Area", mn: "Зайсан орчим", zh: "宰桑地区", ko: "자이산 지역" }, 
                mapsQuery: "Hazara Restaurant Ulaanbaatar",
                desc: { en: "Renowned authentic Mughlai and Indian restaurant with spacious seating for large family dinners.", mn: "Гэр бүлээрээ олуулаа сууж амттай энэтхэг хоол идэхэд тохиромжтой алдартай газар.", zh: "著名的正宗莫卧儿和印度餐厅，拥有适合大型家庭晚宴的宽敞座位。", ko: "대가족 저녁 식사를 위한 넉넉한 좌석이 있는 유명 정통 무굴 및 인도 요리 전문점." }, 
                tableVibe: { en: "Luxurious cushioned divans and spacious tables ideal for grand multi-generational family feasts.", mn: "Том хэмжээний гэр бүлийн цуглаанд зориулсан зөөлөн түшлэгтэй тухтай ширээнүүдтэй.", zh: "豪华软垫长椅和宽敞的餐桌，是盛大跨代家庭聚餐的理想选择。", ko: "대규모 세대별 가족 모임에 이상적인 럭셔리 쿠션 소파와 널찍한 식탁." }, 
                tags: ["Indian", "Mughlai", "Spacious"] 
            },
            { 
                name: "Sura Korean Restaurant", type: "Restaurant", vibe: "family", rating: "4.8", 
                address: { en: "Korean Town Sector", mn: "Солонгос хороолол", zh: "韩国城地带", ko: "코리아 타운 구역" }, 
                mapsQuery: "Sura Korean Restaurant Ulaanbaatar",
                desc: { en: "Authentic Korean BBQ experience featuring built-in grill tables and sharing meat platters.", mn: "Ширээндээ мах шарах төхөөрөмжтэй, солонгос хоолны амтыг мэдрэх газар.", zh: "正宗韩式烤肉体验，设有内置烤炉桌和共享肉盘。", ko: "붙박이 그릴 테이블과 모둠 고기를 갖춘 정통 한식 바비큐 경험." }, 
                tableVibe: { en: "Interactive stainless steel grill tables where families cook and bond over shared meat cuts.", mn: "Гэр бүлээрээ мах шаран сууж яриа өрнүүлэхэд тохиромжтой ширээнүүдтэй.", zh: "互动式不锈钢烤炉桌，家庭成员可以在此烹饪并通过分享肉块增进感情。", ko: "가족들이 함께 고기를 구우며 정을 나눌 수 있는 인터랙티브 스테인리스 그릴 테이블." }, 
                tags: ["Korean BBQ", "Meat Platters", "Interactive"] 
            },
            { 
                name: "Nagomi Kaitensushi", type: "Restaurant", vibe: "chill", rating: "4.7", 
                address: { en: "City Mall Floor 3", mn: "Сити Молл, 3-р давхар", zh: "城市购物中心3层", ko: "시티 몰 3층" }, 
                mapsQuery: "Nagomi Kaitensushi Ulaanbaatar",
                desc: { en: "Fun conveyor-belt sushi restaurant popular for casual group dinners and Japanese bites.", mn: "Найзуудтайгаа сууж суши идэхэд тохиромжтой хөгжилтэй эргэдэг суши ресторан.", zh: "趣味回转寿司餐厅，深受休闲集体晚餐和日本小吃的喜爱。", ko: "캐주얼한 단체 저녁 식사와 일본 요리로 인기 있는 회전초밥 전문점." }, 
                tableVibe: { en: "Curved counter bar seating wrapped around the sushi conveyor belt for casual dining with friends.", mn: "Суши явагч туузан дамжуулагчийг тойрсон муруй бар суудалтай.", zh: "环绕寿司回转带的弧形吧台座位，适合与朋友轻松就餐。", ko: "친구들과 캐주얼한 식사를 즐길 수 있도록 초밥 레일을 두른 곡선형 바 좌석." }, 
                tags: ["Sushi", "Conveyor Belt", "Casual"] 
            },
            { 
                name: "Little Sheep Hot Pot", type: "Restaurant", vibe: "family", rating: "4.9", 
                address: { en: "Chingeltei District", mn: "Чингэлтэй дүүрэг", zh: "青格尔泰区", ko: "칠겔테이 구" }, 
                mapsQuery: "Little Sheep Hot Pot Ulaanbaatar",
                desc: { en: "Interactive hot pot dining featuring communal broth bowls perfect for family bonding.", mn: "Гэр бүлийнхнээрээ халуун шөл хамтдаа идэж тухлахад тохиромжтой халуун тогооны газар.", zh: "互动式火锅餐饮，提供适合家庭凝聚力的公共汤锅。", ko: "가족 화목에 안성맞춤인 공동 탕 그릇을 갖춘 인터랙티브 훠궈 다이닝." }, 
                tableVibe: { en: "Large circular tables featuring built-in dual-flavor boiling hot pot burners for shared family meals.", mn: "Хоёр төрлийн шөл буцлах төхөөрөмж суурилуулсан том дугуй ширээтэй.", zh: "大型圆桌，配有内置双拼口味火锅炉，适合家庭共享大餐。", ko: "온 가족이 함께 식사할 수 있도록 듀얼 탕 버너가 내장된 대형 원형 테이블." }, 
                tags: ["Hot Pot", "Communal", "Family Bonding"] 
            },
            { 
                name: "Torres Restaurant", type: "Restaurant", vibe: "chill", rating: "4.8", 
                address: { en: "Downtown Commercial Strip", mn: "Төв худалдааны гудамж", zh: "市中心商业街", ko: "도심 상업 지구" }, 
                mapsQuery: "Torres Restaurant Ulaanbaatar",
                desc: { en: "Cozy European diner offering hearty steaks, pastas, and ice-cold beers on tap.", mn: "Амттай стейк, паста болон хүйтэн пиво санал болгодог европ зоогийн газар.", zh: "温馨的欧式餐厅，提供丰盛的牛排、意面和冰镇生啤酒。", ko: "푸짐한 스테이크, 파스타, 시원한 생맥주를 제공하는 아늑한 유럽풍 다이너." }, 
                tableVibe: { en: "Dark wood tavern tables and relaxed bar seating designed for unwinding over steaks and draft beers.", mn: "Стейк, шар айраг амтлан алжаалаа тайлахад тохиромжтой модон ширээнүүдтэй.", zh: "深色木质酒馆桌椅和轻松的吧台座位，专为享用牛排和生啤而放松。", ko: "스테이크와 생맥주를 즐기며 긴장을 풀기에 좋은 어두운 원목 태번 테이블과 바 좌석." }, 
                tags: ["Steaks", "European", "Beer on Tap"] 
            },
            { 
                name: "Naadam Bar & Restaurant", type: "Restaurant", vibe: "chill", rating: "4.9", 
                address: { en: "Shangri-La Hotel Rooftop", mn: "Шангри-Ла зочид буудлын дээвэр", zh: "香格里拉大饭店屋顶", ko: "샹그릴라 호텔 루프탑" }, 
                mapsQuery: "Naadam Bar Restaurant Ulaanbaatar",
                desc: { en: "Contemporary restaurant and bar offering local fusion dishes and craft beers overlooking the city.", mn: "Хот харагдах дээвэр дээр байрлах, амттай хоол, шар айрагтай орчин үеийн ресторан.", zh: "现代餐厅兼酒吧，俯瞰城市风光，提供本地融合菜肴和精酿啤酒。", ko: "도시가 내려다보이는 현대적인 레스토랑 겸 바, 로컬 퓨전 요리와 수제 맥주 제공." }, 
                tableVibe: { en: "Sleek modern lounge couches and window-facing high tables with stunning skyline views and beers.", mn: "Хот харагдсан цонхны дэргэдэх өндөр ширээ болон тухтай буйдантай.", zh: "时尚现代的休息室沙发和面向窗户的高脚桌，可欣赏迷人的天际线景致和啤酒。", ko: "멋진 스카이라인 뷰와 맥주를 즐길 수 있는 세련된 모던 라운지 소파와 창가 고정 테이블." }, 
                tags: ["Fusion", "City View", "Craft Beer"] 
            },
            { 
                name: "MB Beer Plus", type: "Restaurant", vibe: "chill", rating: "4.9", 
                address: { en: "Entertainment District", mn: "Зугаа цэнгэлийн бүс", zh: "娱乐区", ko: "엔터테인먼트 구역" }, 
                mapsQuery: "MB Beer Plus Ulaanbaatar",
                desc: { en: "Dedicated beer haven featuring massive draught selections, pub grub, and sports screens for friends.", mn: "Олон төрлийн шар айраг, спортын дэлгэцтэй найзуудаараа суухад тохиромжтой газар.", zh: "专为朋友打造的啤酒天堂，拥有丰富的生啤选择、酒吧小吃和体育转播屏幕。", ko: "다양한 생맥주와 펍 안주, 스포츠 화면이 준비된 맥주 애호가들의 천국." }, 
                tableVibe: { en: "Spacious wooden beer hall tables surrounded by large screens playing sports matches for lively groups.", mn: "Спортын тэмцээн гарах дэлгэцийг тойрсон том модон ширээнүүдтэй.", zh: "宽敞的木质啤酒大厅桌椅，周围环绕着播放体育赛事的巨型屏幕，适合热闹的团队。", ko: "활기찬 모임을 위해 스포츠 경기가 나오는 대형 화면으로 둘러싸인 넓은 원목 맥주 홀 테이블." }, 
                tags: ["Beer Haven", "Pub Grub", "Sports"] 
            },
            { 
                name: "Shulundu (Шөлөндө)", type: "Restaurant", vibe: "family", rating: "4.7", 
                address: { en: "Residential Hub", mn: "Орон сууцны төв бүс", zh: "居民区中心", ko: "주거 중심지" }, 
                mapsQuery: "Shulundu Ulaanbaatar",
                desc: { en: "Cozy local soup and traditional comfort food house favored for warming family lunches.", mn: "Гэр бүлээрээ ирж халуун шөл ууж дулаацах дуртай орон нутгийн зоогийн газар.", zh: "温馨的本地汤品和传统舒适食品馆，是温暖家庭午餐的首选。", ko: "따뜻한 가족 점심 식사로 인기 있는 아늑한 현지 국물 요리 및 전통 음식점." }, 
                tableVibe: { en: "Simple, clean family dining tables providing quick, comforting hot meals for all ages.", mn: "Бүх насныханд тохирсон түргэн шуурхай үйлчилгээтэй цэвэрхэн гэр бүлийн ширээтэй.", zh: "简单洁净的家庭餐桌，为各年龄段提供快捷、温暖的热食。", ko: "모든 연령대가 따뜻한 음식을 빠르게 즐길 수 있는 심플하고 깨끗한 패밀리 테이블." }, 
                tags: ["Traditional soups", "Comfort", "Local"] 
            },
            { 
                name: "Zochin Mongol Zoog", type: "Restaurant", vibe: "family", rating: "4.8", 
                address: { en: "Cultural Center Vicinity", mn: "Соёлын төвийн орчим", zh: "文化中心附近", ko: "문화 센터 인근" }, 
                mapsQuery: "Zochin Mongol Zoog Ulaanbaatar",
                desc: { en: "Authentic Mongolian hospitality restaurant serving traditional meat dishes in a cultural setting.", mn: "Монгол ёс заншил, уламжлалт махтай хоолоор үйлчилдэг зочломтгой газар.", zh: "正宗的蒙古待客餐厅，在文化氛围中供应传统肉类菜肴。", ko: "문화적인 분위기 속에서 전통 육류 요리를 선보이는 정통 몽골 환대 레스토랑." }, 
                tableVibe: { en: "Traditional heritage-themed wooden booths designed for warm, cozy family dining.", mn: "Дулаан уур амьсгал бүхий үндэсний хэв маягийн модон булангуудтай.", zh: "传统遗产主题木质隔间，专为温馨舒适的家庭用餐而设计。", ko: "따뜻하고 아늑한 가족 식사를 위해 전통 문화 테마로 디자인된 원목 부스." }, 
                tags: ["Mongolian Cuisine", "Cultural", "Authentic"] 
            },
            { 
                name: "Mandu House", type: "Restaurant", vibe: "family", rating: "4.8", 
                address: { en: "Central Market Zone", mn: "Төв захын бүс", zh: "中央市场区", ko: "중앙 시장 구역" }, 
                mapsQuery: "Mandu House Ulaanbaatar",
                desc: { en: "Warm dumpling house specializing in handmade regional dumplings made for sharing.", mn: "Хуваан идэхэд зориулсан амттай гар хийцийн банш буузтай газрууд.", zh: "温馨的饺子馆，专营手工制作供分享的地区特色饺子。", ko: "함께 나눠 먹기 좋은 수제 지역 만두를 전문으로 하는 아늑한 만두 전문점." }, 
                tableVibe: { en: "Cozy family-style tables where steaming steamer baskets of handmade dumplings are shared communally.", mn: "Халуун банштай уурын сагсыг хамтдаа хуваан идэх тухтай гэр бүлийн ширээтэй.", zh: "温馨的家庭式餐桌，热气腾腾的手工饺子蒸笼在此共同分享。", ko: "김이 모락모락 나는 수제 만두 찜기를 공동으로 나누어 먹는 아늑한 패밀리 스타일 테이블." }, 
                tags: ["Dumplings", "Handmade", "Sharing"] 
            },
            { 
                name: "BD's Mongolian Grill", type: "Restaurant", vibe: "family", rating: "4.8", 
                address: { en: "Max Mall Area", mn: "Макс Молл орчим", zh: "马克西购物中心区", ko: "맥스 몰 지역" }, 
                mapsQuery: "BDs Mongolian Grill Ulaanbaatar",
                desc: { en: "Interactive stir-fry restaurant where families can customize their bowls right in front of the grill.", mn: "Өөрийн хүссэн орцоор хоолоо өөрөө сонгон бэлтгүүлдэг хөгжилтэй ресторан.", zh: "互动式炒菜餐厅，家庭成员可以在烤炉前直接定制自己的碗。", ko: "가족들이 그릴 앞에서 직접 재료를 골라 커스텀할 수 있는 인터랙티브 철판요리점." }, 
                tableVibe: { en: "Large open-hall tables situated close to the giant circular grill station for family meal excitement.", mn: "Том дугуй мах шарах хэсгийн дэргэдэх өргөн танхимын ширээнүүдтэй.", zh: "大型开放式大厅餐桌，靠近巨大的圆形烤炉区，增添家庭用餐的兴奋感。", ko: "가족 식사의 즐거움을 더하기 위해 거대한 원형 그릴 스테이션 근처에 위치한 넓은 홀 테이블." }, 
                tags: ["Interactive", "Stir-Fry", "Customizable"] 
            },
            { 
                name: "Genghis Khan Irish Pub", type: "Restaurant", vibe: "chill", rating: "4.9", 
                address: { en: "Peace Avenue", mn: "Энхтайвны өргөн чөлөө", zh: "和平大街", ko: "평화의 거리" }, 
                mapsQuery: "Genghis Khan Irish Pub Ulaanbaatar",
                desc: { en: "Classic Irish pub atmosphere offering stouts, lagers, hearty pub meals, and live match screenings.", mn: "Амттай хар пиво, амьд тэмцээн гаргадаг сонгодог ирланд паб.", zh: "经典的爱尔兰酒吧氛围，提供黑啤酒、拉格啤酒、丰盛的酒吧餐点和现场比赛转播。", ko: "스타우트, 라거, 든든한 펍 메뉴, 생중계 화면을 제공하는 클래식한 아일랜드 펍." }, 
                tableVibe: { en: "Classic dark mahogany pub booths and a lively central bar counter packed with friends drinking pints.", mn: "Найзуудаараа сууж пиво уухад тохиромжтой бар болон модон булангуудтай.", zh: "经典的深色红木酒吧隔间和挤满畅饮朋友的热闹中央吧台。", ko: "파인트 맥주를 마시는 친구들로 가득 찬 클래식한 다크 마호가니 부스와 활기찬 중앙 바." }, 
                tags: ["Irish Pub", "Stouts", "Live Sports"] 
            },
            { 
                name: "Asiana Central Restaurant", type: "Restaurant", vibe: "family", rating: "4.8", 
                address: { en: "Downtown Ulaanbaatar", mn: "Улаанбаатар хотын төв", zh: "乌兰巴托市中心", ko: "울란바토르 도심" }, 
                mapsQuery: "Asiana Central Restaurant Ulaanbaatar",
                desc: { en: "Pan-Asian restaurant with broad menu options ensuring every family member finds a favorite.", mn: "Бүх гэр бүлийн гишүүдийн дуртай хоолыг олох боломжтой олон төрлийн цэс бүхий газар.", zh: "泛亚洲餐厅，提供丰富的菜单选择，确保每个家庭成员都能找到最爱。", ko: "모든 가족 구성원이 좋아하는 메뉴를 찾을 수 있는 다양한 범아시아 요리점." }, 
                tableVibe: { en: "Spacious multi-seat dining booths that easily accommodate large family gatherings.", mn: "Томоохон гэр бүлийн цуглааныг хялбархан багтаах өргөн суудалтай булангуудтай.", zh: "宽敞的多人用餐隔间，可轻松容纳大型家庭聚会。", ko: "대규모 가족 모임을 쉽게 수용할 수 있는 널찍한 다인용 다이닝 부스." }, 
                tags: ["Pan-Asian", "Broad Menu", "Family"] 
            },
            { 
                name: "Namaste Restaurant", type: "Restaurant", vibe: "family", rating: "4.7", 
                address: { en: "Sukhbaatar District", mn: "Сүхбаатар дүүрэг", zh: "苏赫巴托区", ko: "수흐바타르 구" }, 
                mapsQuery: "Namaste Restaurant Ulaanbaatar",
                desc: { en: "Warm Indian eatery famous for rich curries, garlic nans, and hospitable family service.", mn: "Баялаг амттай карри, сармистай нан болон халуун дулаан үйлчилгээтэй энэтхэг хоолны газар.", zh: "温暖的印度餐厅，以浓郁的咖喱、大蒜馕和热情的家庭服务闻名。", ko: "진한 커리, 갈릭 난, 친절한 가족 서비스로 유명한 따뜻한 인도 요리 전문점." }, 
                tableVibe: { en: "Vibrant ethnic-themed booths with comfortable seating arrangements for family sharing.", mn: "Гэр бүлээрээ хуваан идэхэд тохиромжтой үндэсний хэв маягийн тухтай суудалтай.", zh: "充满活力的民族主题隔间，配有舒适的座位安排，适合家庭分享。", ko: "가족이 함께 나누기 좋은 편안한 좌석 배치의 활기찬 에스닉 테마 부스." }, 
                tags: ["Indian Curry", "Naan", "Hospitable"] 
            },
            { 
                name: "Ali Baba Arabian Cuisine", type: "Restaurant", vibe: "chill", rating: "4.8", 
                address: { en: "Bayanzurkh District", mn: "Баянзүрх дүүрэг", zh: "巴彦祖尔赫区", ko: "바얀주르흐 구" }, 
                mapsQuery: "Ali Baba Arabian Cuisine Ulaanbaatar",
                desc: { en: "Flavorful Middle Eastern dishes, grilled platters, and relaxing social lounge atmosphere.", mn: "Амттай дундад азийн хоол, шарсан мах болон тайван орчин.", zh: "美味的中东菜肴、烤肉拼盘和轻松的社交酒廊氛围。", ko: "풍미 가득한 중동 요리, 그릴 플래터, 편안한 소셜 라운지 분위기." }, 
                tableVibe: { en: "Low cushioned seating lounges and large sharing platters ideal for groups smoking shisha and drinking.", mn: "Усан тамхи татан суухад тохиромжтой намхан зөөлөн суудалтай орчин.", zh: "低矮的软垫座位休息室和大型共享拼盘，非常适合吸水烟和饮酒的团体。", ko: "물담배와 음료를 즐기는 모임에 이상적인 낮은 쿠션 좌석 라운지와 대형 공유 플래터." }, 
                tags: ["Middle Eastern", "Grills", "Relaxed Lounge"] 
            },
            { 
                name: "Pho Café Mongolia", type: "Restaurant", vibe: "chill", rating: "4.7", 
                address: { en: "Seoul Street Corner", mn: "Сөүлийн гудамжны булан", zh: "首尔街拐角", ko: "서울 거리 모퉁이" }, 
                mapsQuery: "Pho Cafe Mongolia Ulaanbaatar",
                desc: { en: "Cozy noodle bar serving steaming bowls of authentic pho and comforting Asian broths.", mn: "Халуун амттай фо шөлөөр үйлчилдэг тухтай гоймонгийн газар.", zh: "温馨的面条吧，供应热气腾腾的正宗河粉和令人慰藉的亚洲高汤。", ko: "김이 모락모락 나는 정통 쌀국수와 아시아식 따뜻한 국물을 제공하는 아늑한 누들 바." }, 
                tableVibe: { en: "Compact wooden noodle bar counters and small tables designed for casual, quick group bites.", mn: "Хурдан шуурхай үйлчлүүлэхэд зориулсан модон бар болон жижиг ширээтэй.", zh: "紧凑的木质面条吧台和小型桌子，专为休闲、快捷的集体小吃设计。", ko: "가볍고 빠른 단체 식사를 위해 디자인된 아담한 원목 누들 바 카운터와 소형 테이블." }, 
                tags: ["Noodle Bar", "Pho", "Warm Broths"] 
            }
        ];
