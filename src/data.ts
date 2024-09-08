export interface State {
  name: string;
  capital: string;
  population: string;
  areaInSquareKm: string;
  region: string;
  description: string;
}

export const germanStates: State[] = [
  {
    name: "Baden-Württemberg",
    capital: "Stuttgart",
    population: "11,1 milhões",
    areaInSquareKm: "35.751",
    region: "Sul",
    description: `**Baden-Württemberg** (Baden-Vurtemberga em português) é um dos estados mais prósperos da Alemanha, localizado no sudoeste do país. Sua capital, Stuttgart, é um importante centro industrial, sendo a sede de grandes empresas automobilísticas como a Mercedes-Benz e a Porsche.

    O estado é conhecido por suas paisagens pitorescas, incluindo a Floresta Negra e o Lago de Constança, que atraem turistas de todo o mundo. Além das belezas naturais, Baden-Württemberg possui cidades históricas como Heidelberg e Freiburg, famosas por suas universidades e arquitetura medieval.

    Culturalmente, Baden-Vurtemberga oferece uma rica mistura de tradição e inovação. Festivais locais, vinícolas renomadas e uma cena artística vibrante fazem parte da vida cotidiana neste estado que combina o melhor da Alemanha moderna com seu rico passado histórico.`
  },
  {
    name: "Bayern",
    capital: "München",
    population: "13,1 milhões",
    areaInSquareKm: "70.550",
    region: "Sudeste",
    description: `**Bayern** (Baviera em português) é o maior estado da Alemanha em área e é famoso por sua cultura única, que inclui o tradicional Oktoberfest. A capital, Munique (München), é um importante centro econômico, abrigando empresas como a BMW e a Siemens.

    A Baviera é conhecida por suas paisagens alpinas, castelos históricos como o Neuschwanstein e cidades medievais bem preservadas. O estado é um destino turístico popular tanto no inverno, para esportes na neve, quanto no verão, para trilhas e passeios ao ar livre.

    Além disso, a Baviera mantém vivas muitas tradições culturais, desde trajes típicos até danças folclóricas. A culinária local, com pratos como salsichas brancas e pretzels, também é uma parte importante da identidade bávara.`
  },
  {
    name: "Berlin",
    capital: "Berlin",
    population: "3,6 milhões",
    areaInSquareKm: "891,8",
    region: "Nordeste",
    description: `**Berlin** (Berlim em português) é a capital da Alemanha e uma cidade com uma história rica e complexa. Dividida durante a Guerra Fria, Berlim é hoje um símbolo de reunificação e progresso. Monumentos como o Portão de Brandemburgo e o Muro de Berlim são testemunhas de seu passado.

    A cidade é um importante centro cultural, com inúmeros museus, galerias de arte e uma cena musical vibrante. Berlim também é conhecida por sua diversidade e tolerância, atraindo artistas e profissionais de todo o mundo.

    Economicamente, Berlim tem se destacado no setor de startups e tecnologia, tornando-se um hub para inovação na Europa. A combinação de história, cultura e modernidade faz de Berlim uma das cidades mais dinâmicas do continente.`
  },
  {
    name: "Brandenburg",
    capital: "Potsdam",
    population: "2,5 milhões",
    areaInSquareKm: "29.654",
    region: "Leste",
    description: `**Brandenburg** (Brandemburgo em português) circunda a cidade de Berlim e é conhecido por suas paisagens naturais, com inúmeros lagos, rios e florestas. A capital, Potsdam, é famosa por seus palácios e jardins, como o Palácio de Sanssouci, que foi residência dos reis prussianos.

    O estado tem uma rica herança histórica e cultural, sendo parte fundamental da história prussiana e alemã. Brandemburgo oferece uma combinação de cidades históricas e vilarejos pitorescos, além de oportunidades para atividades ao ar livre.

    Nos últimos anos, Brandemburgo tem se beneficiado de investimentos em infraestrutura e desenvolvimento econômico, aproveitando sua proximidade com Berlim para atrair novas indústrias e turistas.`
  },
  {
    name: "Bremen",
    capital: "Bremen",
    population: "680 mil",
    areaInSquareKm: "419",
    region: "Norte",
    description: `**Bremen** (Bremem em português) é o menor estado da Alemanha, composto pelas cidades de Bremen e Bremerhaven. Bremen, a capital, é uma cidade hanseática histórica com uma rica tradição marítima e comercial.

    A cidade é conhecida pelo conto dos "Músicos de Bremen", dos Irmãos Grimm, e possui uma arquitetura encantadora, com edifícios como a Câmara Municipal de Bremen e a estátua de Rolando, ambos Patrimônios Mundiais da UNESCO.

    Bremerhaven é um importante porto no Mar do Norte, desempenhando um papel crucial no comércio marítimo alemão. O estado combina tradição e modernidade, sendo um centro para a indústria marítima, pesquisa científica e turismo.`
  },
  {
    name: "Hamburg",
    capital: "Hamburg",
    population: "1,8 milhões",
    areaInSquareKm: "755",
    region: "Norte",
    description: `**Hamburg** (Hamburgo em português) é uma cidade-estado no norte da Alemanha e possui um dos maiores portos da Europa. Sua localização estratégica no rio Elba tornou Hamburgo um importante centro comercial e logístico ao longo dos séculos.

    A cidade é famosa por seus canais e pontes, superando em número os de Veneza e Amsterdã. Bairros como Speicherstadt e Hafencity combinam arquitetura histórica com design moderno, refletindo a evolução contínua de Hamburgo.

    Culturalmente, Hamburgo é conhecida por sua vibrante cena musical e teatral, incluindo o renomado bairro de St. Pauli e a Reeperbahn. A cidade oferece uma alta qualidade de vida, com muitos parques, espaços verdes e uma atmosfera cosmopolita.`
  },
  {
    name: "Hessen",
    capital: "Wiesbaden",
    population: "6,2 milhões",
    areaInSquareKm: "21.115",
    region: "Centro",
    description: `**Hessen** (Hesse em português) está localizado no centro da Alemanha e é conhecido por sua forte economia e importância financeira. Frankfurt am Main, a maior cidade do estado, é um dos principais centros financeiros da Europa, sede do Banco Central Europeu e da Bolsa de Frankfurt.

    A capital, Wiesbaden, é famosa por suas fontes termais e arquitetura neoclássica. Hessen combina áreas urbanas dinâmicas com paisagens rurais, incluindo florestas densas e parques naturais como o Bergpark Wilhelmshöhe.

    O estado também é um centro educacional, abrigando universidades renomadas. Hessen possui uma infraestrutura avançada, com um dos maiores aeroportos internacionais do mundo em Frankfurt, conectando a Alemanha ao resto do globo.`
  },
  {
    name: "Mecklenburg-Vorpommern",
    capital: "Schwerin",
    population: "1,6 milhões",
    areaInSquareKm: "23.174",
    region: "Nordeste",
    description: `**Mecklenburg-Vorpommern** (Mecklemburgo-Pomerânia Ocidental em português) é conhecido por suas paisagens costeiras ao longo do Mar Báltico, incluindo praias, ilhas e penínsulas. A capital, Schwerin, é famosa pelo Castelo de Schwerin, situado em uma ilha no meio do lago.

    O estado é menos populoso e mais rural, tornando-o um destino popular para turismo de natureza e atividades ao ar livre. Parques nacionais como o Jasmund, com seus penhascos de giz, são atrações únicas na região.

    Mecklenburg-Vorpommern também tem uma rica herança histórica, com cidades hanseáticas como Rostock e Stralsund, que apresentam arquitetura gótica em tijolos e portos históricos.`
  },
  {
    name: "Niedersachsen",
    capital: "Hannover",
    population: "8 milhões",
    areaInSquareKm: "47.614",
    region: "Noroeste",
    description: `**Niedersachsen** (Baixa Saxônia em português) é o segundo maior estado da Alemanha em área e possui uma economia diversificada, incluindo agricultura, indústria automotiva e energia renovável. A capital, Hannover, é conhecida por sediar importantes feiras e exposições internacionais.

    O estado abriga a sede da Volkswagen em Wolfsburg, destacando sua importância na indústria automotiva. Além disso, possui áreas rurais extensas, com paisagens que vão desde a planície do norte até as montanhas do Harz.

    Culturalmente, Baixa Saxônia tem uma herança rica, com cidades históricas como Göttingen e Hildesheim. O estado também é conhecido por suas tradições folclóricas e festivais locais que celebram sua identidade regional.`
  },
  {
    name: "Nordrhein-Westfalen",
    capital: "Düsseldorf",
    population: "17,9 milhões",
    areaInSquareKm: "34.084",
    region: "Oeste",
    description: `**Nordrhein-Westfalen** (Renânia do Norte-Vestfália em português) é o estado mais populoso da Alemanha e um importante centro industrial. Cidades como Colônia, Düsseldorf e Dortmund desempenham papéis significativos na economia, cultura e política do país.

    A região do Ruhr, anteriormente centrada na mineração de carvão e produção de aço, passou por uma transformação estrutural e agora é um centro para serviços, tecnologia e educação. Colônia é famosa por sua catedral gótica e carnaval animado.

    Nordrhein-Westfalen é também um centro cultural, com uma cena artística diversificada, inúmeros museus e eventos culturais. A mistura de indústrias tradicionais e modernas torna o estado um microcosmo da economia alemã.`
  },
  {
    name: "Rheinland-Pfalz",
    capital: "Mainz",
    population: "4,1 milhões",
    areaInSquareKm: "19.853",
    region: "Sudoeste",
    description: `**Rheinland-Pfalz** (Renânia-Palatinado em português) é conhecido por suas regiões vinícolas ao longo dos rios Reno e Mosela. A capital, Mainz, é uma das cidades mais antigas da Alemanha e um centro cultural e universitário.

    O estado é o maior produtor de vinho da Alemanha, com destaque para o Riesling. As paisagens são marcadas por vinhedos, castelos medievais e vilarejos históricos, tornando-o um destino turístico popular.

    Rheinland-Pfalz também possui uma economia diversificada, incluindo indústria química e manufatureira. A combinação de beleza natural, riqueza histórica e vitalidade econômica faz do estado um lugar único.`
  },
  {
    name: "Saarland",
    capital: "Saarbrücken",
    population: "990 mil",
    areaInSquareKm: "2.570",
    region: "Sudoeste",
    description: `**Saarland** (Sarre em português) é o menor estado da Alemanha em área e população, localizado na fronteira com a França e Luxemburgo. Sua capital, Saarbrücken, é um centro regional para cultura e educação.

    Historicamente, Saarland tem sido influenciado por disputas territoriais entre Alemanha e França, o que se reflete em sua cultura e arquitetura. O estado é conhecido por sua indústria siderúrgica e de mineração, embora essas indústrias tenham diminuído nas últimas décadas.

    Hoje, Saarland está focado em tecnologia da informação e pesquisa, com universidades e institutos dedicados a essas áreas. A proximidade com outros países europeus também fortalece sua posição como ponto de conexão internacional.`
  },
  {
    name: "Sachsen",
    capital: "Dresden",
    population: "4,1 milhões",
    areaInSquareKm: "18.450",
    region: "Leste",
    description: `**Sachsen** (Saxônia em português) está localizado no leste da Alemanha e é conhecido por sua rica herança cultural e histórica. Dresden, a capital, é famosa por sua arquitetura barroca e pelos danos sofridos durante a Segunda Guerra Mundial, seguida de uma impressionante reconstrução.

    Leipzig, outra cidade importante, é um centro para música e artes, associada a figuras como Johann Sebastian Bach. A região tem uma forte tradição industrial, especialmente em engenharia e manufatura.

    Sachsen também oferece paisagens naturais, como a Suíça Saxônica, um parque nacional com formações rochosas únicas. O estado combina tradição e inovação, mantendo-se relevante na Alemanha moderna.`
  },
  {
    name: "Sachsen-Anhalt",
    capital: "Magdeburg",
    population: "2,2 milhões",
    areaInSquareKm: "20.452",
    region: "Leste",
    description: `**Sachsen-Anhalt** (Saxônia-Anhalt em português) está situado no centro-leste da Alemanha e possui um rico patrimônio histórico. A capital, Magdeburg, foi uma importante cidade medieval e é conhecida por sua catedral gótica.

    O estado abriga várias cidades declaradas Patrimônio Mundial da UNESCO, como Quedlinburg, Wittenberg e Dessau, esta última famosa pelo movimento Bauhaus de arquitetura e design.

    Economicamente, Sachsen-Anhalt está se recuperando dos desafios pós-reunificação, com investimentos em indústrias químicas, energia renovável e turismo. As rotas históricas e culturais atraem visitantes interessados na história alemã.`
  },
  {
    name: "Schleswig-Holstein",
    capital: "Kiel",
    population: "2,9 milhões",
    areaInSquareKm: "15.763",
    region: "Norte",
    description: `**Schleswig-Holstein** (Schleswig-Holsteim em português) é o estado mais ao norte da Alemanha, fazendo fronteira com a Dinamarca. A capital, Kiel, é um importante porto marítimo e centro para esportes náuticos.

    O estado é conhecido por suas costas ao longo do Mar do Norte e do Mar Báltico, com ilhas e praias que são destinos populares de verão. A região tem uma mistura de influências culturais alemãs e dinamarquesas.

    Schleswig-Holstein tem uma economia baseada em agricultura, pesca, turismo e indústria naval. Festivais como o Kieler Woche celebram a tradição marítima e atraem visitantes internacionais.`
  },
  {
    name: "Thüringen",
    capital: "Erfurt",
    population: "2,1 milhões",
    areaInSquareKm: "16.172",
    region: "Centro-Leste",
    description: `**Thüringen** (Turíngia em português) está localizado no centro da Alemanha e é frequentemente chamado de "Coração Verde da Alemanha" devido às suas extensas florestas. A capital, Erfurt, é conhecida por sua cidade medieval bem preservada.

    O estado tem uma rica herança cultural, associada a figuras como Johann Wolfgang von Goethe e Friedrich Schiller, que viveram em Weimar. Weimar foi um centro para o movimento Bauhaus e desempenhou um papel importante na história alemã.

    Thüringen tem uma economia baseada em indústrias médias, agricultura e turismo. A combinação de natureza, cultura e história faz do estado um destino atrativo para visitantes e residentes.`
  }
];

export interface CountryInfo {
  name: string;
  capital: string;
  officialLanguage: string;
  currency: string;
  government: string;
  areaInSquareKm: number;
  statesQuantity: number;
  largestCity: string;
  borders: string;
  mainReligion: string;
  gdp: string;
  climage: string;
  states: State[];
}
