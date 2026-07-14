// Dados de Kanji extraídos
const kanjiData = [
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "72",
    "kanji": "&#26085;",
    "onyomi": "NICHI/ SHITSU",
    "kunyomi": "hi/ -bi/ -ka",
    "portugues": "dia, sol, Japão"
  },
  {
    "nivel": "1",
    "tracos": "1",
    "bushu": "1",
    "kanji": "&#19968;",
    "onyomi": "ICHI/ ITSU",
    "kunyomi": "hito-/ hito(tsu)",
    "portugues": "um"
  },
  {
    "nivel": "1",
    "tracos": "2",
    "bushu": "24",
    "kanji": "&#21313;",
    "onyomi": "JUU/ JIT-/ JUT-",
    "kunyomi": "too/ to",
    "portugues": "dez"
  },
  {
    "nivel": "1",
    "tracos": "2",
    "bushu": "7",
    "kanji": "&#20108;",
    "onyomi": "NI/ JI",
    "kunyomi": "futa/ futa(tsu)/ futata(bi)",
    "portugues": "dois"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "37",
    "kanji": "&#22823;",
    "onyomi": "ÚNICA/ TAI",
    "kunyomi": "oo-/ oo(kii)/ -oo(ini)",
    "portugues": "grande,enorme"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "1",
    "kanji": "&#19977;",
    "onyomi": "SAN/ ZOU",
    "kunyomi": "mi/ mi(tsu)/ mit-(tsu)",
    "portugues": "três"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "9",
    "kanji": "&#20418;",
    "onyomi": "KEI",
    "kunyomi": "kaka(ru)/ kakari/ -gakari/ kaka(waru)",
    "portugues": "pessoa em carga, conexão, dever, interessa a si próprio"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20250;",
    "onyomi": "KAI/ E",
    "kunyomi": "a(u)/ a(waseru)/ atsu(maru)",
    "portugues": "encontro, reunião, festa, associação, entrevista, une"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "31",
    "kanji": "&#22269;",
    "onyomi": "KOKU",
    "kunyomi": "kuni",
    "portugues": "país, terra, nação"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "4",
    "kanji": "&#24180;",
    "onyomi": "NEN",
    "kunyomi": "toshi",
    "portugues": "ano"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "2",
    "kanji": "&#20013;",
    "onyomi": "CHUU",
    "kunyomi": "naka/ uchi/ ata(ru)",
    "portugues": "em, interior, médio, meio, centro"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "2",
    "kanji": "&#26412;",
    "onyomi": "HON",
    "kunyomi": "moto",
    "portugues": "livro, presente, real, verdadeiro, principal, sufixo p/ contagem  de coisas longas"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "1",
    "kanji": "&#20116;",
    "onyomi": "GO",
    "kunyomi": "itsu/ itsu(tsu)",
    "portugues": "cinco"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "31",
    "kanji": "&#22235;",
    "onyomi": "SHI",
    "kunyomi": "yo/ yo(tsu)/ yot-(tsu)/ yon",
    "portugues": "quatro"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "2",
    "kanji": "&#20986;",
    "onyomi": "SHUTSU/ SUI",
    "kunyomi": "de(ru)/ -de/ da(su)/ -da(su)/ i(deru)/ i(dasu)",
    "portugues": "saída, deixa"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "25",
    "kanji": "&#19978;",
    "onyomi": "JOU/ SHOU/ SHAN",
    "kunyomi": "única/ -única/ uwa-/ kami/ a(geru)/ -a(geru)/ a(garu)/ -a(garu)/ a(gari)/ -a(gari)/ nobo(ru)/ nobo(ri)/ nobo(seru)/ nobo(su)/ yo(su)",
    "portugues": "acima, para cima, sobre, subir, galgar, em cima, escalar"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "72",
    "kanji": "&#26178;",
    "onyomi": "JI",
    "kunyomi": "toki/ -doki",
    "portugues": "tempo, hora"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "13",
    "kanji": "&#21516;",
    "onyomi": "DOU",
    "kunyomi": "ona(ji)",
    "portugues": "mesmo, concorda, igual"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "168",
    "kanji": "&#38263;",
    "onyomi": "CHOU",
    "kunyomi": "naga(i)/ osa",
    "portugues": "longo, ambicionar, líder, chefe"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "4",
    "kanji": "&#26481;",
    "onyomi": "TOU",
    "kunyomi": "higashi",
    "portugues": "oriente"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "144",
    "kanji": "&#34892;",
    "onyomi": "KOU/ GYOU/ AN",
    "kunyomi": "i(ku)/ yu(ku)/ -yu(ki)/ -yuki/ -i(ki)/ -iki/ okona(u)/ oko(nau)",
    "portugues": "ir, viagem, viajar"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "6",
    "kanji": "&#20107;",
    "onyomi": "JI/ ZU",
    "kunyomi": "koto/ tsuka(u)/ tsuka(eru)",
    "portugues": "matéria, coisa, fato, negócios, razão, possivelmente"
  },
  {
    "nivel": "1",
    "tracos": "8",
    "bushu": "39",
    "kanji": "&#23398;",
    "onyomi": "GAKU",
    "kunyomi": "mana(bu)",
    "portugues": "estudo, aprendizagem, ciência"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "100",
    "kanji": "&#29983;",
    "onyomi": "SEI/ SHOU",
    "kunyomi": "i(kiru)/ i(kasu)/ i(keru)/ u(mareru)/ u(mare)/ umare/ u(um)/ o(u)/ um(eru)/ um(yasu)/ ki/ nama/ nama-/ na(ru)/ na(su)/ um(su)/ -u",
    "portugues": "vida, genuína, nascimento"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "74",
    "kanji": "&#26376;",
    "onyomi": "GETSU/ GATSU",
    "kunyomi": "tsuki",
    "portugues": "mês, lua"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "125",
    "kanji": "&#32773;",
    "onyomi": "SHA",
    "kunyomi": "mono",
    "portugues": "alguém, pessoa"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "8",
    "kanji": "&#20845;",
    "onyomi": "ROKU/ RIKU",
    "kunyomi": "mu/ mu(tsu)/ mut-(tsu)/ mui",
    "portugues": "seis"
  },
  {
    "nivel": "2",
    "tracos": "12",
    "bushu": "169",
    "kanji": "&#38291;",
    "onyomi": "KAN/ KEN",
    "kunyomi": "aida/ ma/ ai",
    "portugues": "intervalo, espaço"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "70",
    "kanji": "&#26041;",
    "onyomi": "HOU",
    "kunyomi": "kata/ -kata/ -gata",
    "portugues": "direção, pessoa, alternativa"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "12",
    "kanji": "&#20998;",
    "onyomi": "BUN/ FUN/ BU",
    "kunyomi": "wa(keru)/ wa(ke)/ wa(kareru)/ wa(karu)/ wa(katsu)",
    "portugues": "parte, minuto, segmento, parte, grau, dever, compreender, saber, valor, 1%, oportunidades, shaku/ 10"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "12",
    "kanji": "&#21069;",
    "onyomi": "ZEN",
    "kunyomi": "mae/ -mae",
    "portugues": "em frente, antes"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "60",
    "kanji": "&#24460;",
    "onyomi": "GO/ KOU",
    "kunyomi": "nochi/ ushi(ro)/ ushiro/ ato/ oku(reru)",
    "portugues": "atrás, costas, mais tarde"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "32",
    "kanji": "&#22320;",
    "onyomi": "CHI/ JI",
    "kunyomi": " ",
    "portugues": "terra, chão"
  },
  {
    "nivel": "2",
    "tracos": "12",
    "bushu": "32",
    "kanji": "&#22580;",
    "onyomi": "JOU/ CHOU",
    "kunyomi": "ba",
    "portugues": "localização, lugar"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "64",
    "kanji": "&#25163;",
    "onyomi": "SHU/ ZU",
    "kunyomi": "te/ te-/ -te/ ta-",
    "portugues": "mão"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "66",
    "kanji": "&#25919;",
    "onyomi": "SEI/ SHOU",
    "kunyomi": "matsurigoto/ man",
    "portugues": "política, governo"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "106",
    "kanji": "&#30340;",
    "onyomi": "TEKI",
    "kunyomi": "mato",
    "portugues": "centro do alvo, marca, alvo, objeto"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "105",
    "kanji": "&#30330;",
    "onyomi": "HATSU/ HOTSU",
    "kunyomi": "ta(tsu)/ aba(ku)/ oko(ru)/ tsuka(wasu)/ hana(tsu)",
    "portugues": "liberar, partida, publicar, emitir, a partir de, revelar"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#21512;",
    "onyomi": "GOU/ GAT-/ KAT-",
    "kunyomi": "a(u)/ -a(u)/ a(i)/ ai-/ -a(i)/ -ai/ a(wasu)/ a(waseru)/ -a(waseru)",
    "portugues": "encaixe, unir"
  },
  {
    "nivel": "1",
    "tracos": "2",
    "bushu": "12",
    "kanji": "&#20843;",
    "onyomi": "HACHI",
    "kunyomi": "ya/ ya(tsu)/ yat-(tsu)/ yo_",
    "portugues": "oito"
  },
  {
    "nivel": "4",
    "tracos": "20",
    "bushu": "149",
    "kanji": "&#35696;",
    "onyomi": "GI",
    "kunyomi": " ",
    "portugues": "deliberação, consulta, debate, consideração"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "163",
    "kanji": "&#37096;",
    "onyomi": "BU",
    "kunyomi": "-be",
    "portugues": "seção, biro, departamento, classe, cópia, parte, porção, sufixo para contagem de jornais ou revistas"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "115",
    "kanji": "&#31282;",
    "onyomi": "TOU/ TE",
    "kunyomi": "ine/ ina-",
    "portugues": "planta de arroz"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "30",
    "kanji": "&#21729;",
    "onyomi": "IN",
    "kunyomi": " ",
    "portugues": "empregado, membro, número, encarregado"
  },
  {
    "nivel": "1",
    "tracos": "7",
    "bushu": "147",
    "kanji": "&#35211;",
    "onyomi": "KEN",
    "kunyomi": "mi(ru)/ mi(eru)/ mi(seru)",
    "portugues": "ver, esperanças, oportunidades, idéia, opinião, olhar, visíveis"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "8",
    "kanji": "&#20140;",
    "onyomi": "KYOU/ KEI/ KIN",
    "kunyomi": "miyako",
    "portugues": "capital, 10 elevado a 16"
  },
  {
    "nivel": "1",
    "tracos": "2",
    "bushu": "4",
    "kanji": "&#20061;",
    "onyomi": "KYUU/ KU",
    "kunyomi": "kokono/ kokono(tsu)",
    "portugues": "nove"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "113",
    "kanji": "&#31038;",
    "onyomi": "SHA",
    "kunyomi": "yashiro",
    "portugues": "companhia, firme, escritório, associação, templo"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "67",
    "kanji": "&#23550;",
    "onyomi": "TAI/ TSUI",
    "kunyomi": "aite/ kota(eru)/ soro(i)/ tsurea(i)/ nara(bu)/ muka(u)",
    "portugues": "vis-um-vis, contrário, até mesmo, igual, versus, anti-, compara"
  },
  {
    "nivel": "3",
    "tracos": "13",
    "bushu": "3",
    "kanji": "&#26989;",
    "onyomi": "GYOU/ GOU",
    "kunyomi": "waza",
    "portugues": "negócios, vocação, artes, performance"
  },
  {
    "nivel": "1",
    "tracos": "2",
    "bushu": "5",
    "kanji": "&#19971;",
    "onyomi": "SHICHI",
    "kunyomi": "nana/ nana(tsu)/ nano",
    "portugues": "sete"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "39",
    "kanji": "&#23376;",
    "onyomi": "SHI/ SU/ TSU",
    "kunyomi": "ko/ -ko/ -t-(ko)/ ne",
    "portugues": "criança"
  },
  {
    "nivel": "2",
    "tracos": "13",
    "bushu": "69",
    "kanji": "&#26032;",
    "onyomi": "SHIN",
    "kunyomi": "atara(shii)/ ara(ta)/ ara-/ nii-",
    "portugues": "novo"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "132",
    "kanji": "&#33258;",
    "onyomi": "JI/ SHI",
    "kunyomi": "mizuka(ra)/ ono(zukara)/ ono(zuto)",
    "portugues": "a si próprio"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "189",
    "kanji": "&#39640;",
    "onyomi": "KOU",
    "kunyomi": "taka(i)/ taka/ -daka/ taka(maru)/ taka(meru)",
    "portugues": "caro, alto"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "2",
    "kanji": "&#20869;",
    "onyomi": "NAI/ DAI",
    "kunyomi": "uchi",
    "portugues": "interior, dentro, entre, dentre, casa, casa"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "117",
    "kanji": "&#31435;",
    "onyomi": "RITSU/ RYUU/ RITTORU",
    "kunyomi": "ta(tsu)/ -ta(tsu)/ ta(chi-)/ ta(teru)/ -ta(teru)/ ta(te-)/ tate-/ -ta(te)/ -da(te)/ -da(teru)",
    "portugues": "ficar de pé, levantar-se"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "75",
    "kanji": "&#30456;",
    "onyomi": "SOU/ SHOU",
    "kunyomi": "ai-",
    "portugues": "inter-, mútuo, juntamente, mutuamente, ministro de estado, conselheiro, aspecto, face, fisionomia"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "53",
    "kanji": "&#24230;",
    "onyomi": "DO/ TO/ TAKU",
    "kunyomi": "tabi/ -ta(i)",
    "portugues": "graus, ocorrência, tempo, sufixo para contagem de  para ocorrências"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "31",
    "kanji": "&#22238;",
    "onyomi": "KAI/ E",
    "kunyomi": "mawa(ru)/ -mawa(ru)/ -mawa(ri)/ mawa(su)/ -mawa(su)/ mawa(shi-)/ -mawa(shi)/ motoo(ru)/ ka(eru)",
    "portugues": "vêzes, redondo, jogo, revolver, sufixo para contagem de  para ocorrências, girar"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "169",
    "kanji": "&#21839;",
    "onyomi": "MON",
    "kunyomi": "to(u)/ to(i)/ ton",
    "portugues": "perguntar, pergunta, problema"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "40",
    "kanji": "&#23450;",
    "onyomi": "TEI/ JOU",
    "kunyomi": "sada(meru)/ sada(maru)/ sada(ka)",
    "portugues": "determinar, fixar, estabelecer, decidir"
  },
  {
    "nivel": "4",
    "tracos": "15",
    "bushu": "9",
    "kanji": "&#20740;",
    "onyomi": "OKU",
    "kunyomi": " ",
    "portugues": "cem milhões, 10 elevado a 8"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "109",
    "kanji": "&#30446;",
    "onyomi": "MOKU/ BOKU",
    "kunyomi": "me/ -me/ ma-",
    "portugues": "olho, classe, olhar, visão, experiência, atenção, favor"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "42",
    "kanji": "&#23567;",
    "onyomi": "SHOU",
    "kunyomi": "chii(sai)/ ko-/ o-/ única-",
    "portugues": "pequeno, pouco"
  },
  {
    "nivel": "1",
    "tracos": "2",
    "bushu": "19",
    "kanji": "&#21147;",
    "onyomi": "RYOKU/ RIKI/ RII",
    "kunyomi": "chikara",
    "portugues": "força, forte, esforço, suportar, exercer"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20840;",
    "onyomi": "ZEN",
    "kunyomi": "matta(ku)/ sube(te)",
    "portugues": "inteiro, todo, tudo, completar, preencher"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "13",
    "kanji": "&#20870;",
    "onyomi": "EN",
    "kunyomi": "maru(i)/ maru/ mado/ mado(ka)/ maro(yaka)",
    "portugues": "círculo, iene, redondo"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "84",
    "kanji": "&#27671;",
    "onyomi": "KI/ KE",
    "kunyomi": "iki",
    "portugues": "espírito, mente"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "46",
    "kanji": "&#23776;",
    "onyomi": "-",
    "kunyomi": "to_ge",
    "portugues": "pico de montanha, passagem de montanha, clímax, cume, (kokuji)"
  },
  {
    "nivel": "1",
    "tracos": "8",
    "bushu": "167",
    "kanji": "&#37329;",
    "onyomi": "KIN/ KON/ GON",
    "kunyomi": "kane/ kana-/ -gane",
    "portugues": "ouro"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "162",
    "kanji": "&#36890;",
    "onyomi": "TSUU/ TSU",
    "kunyomi": "too(ru)/ too(ri)/ -too(ri)/ -doo(ri)/ too(su)/ too(shi)/ -doo(shi)/ kayo(u)",
    "portugues": "tráfego, passar através de, avenida, comutar, sufixo para contagem de  letras"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "169",
    "kanji": "&#38283;",
    "onyomi": "KAI",
    "kunyomi": "hira(ku)/ hira(ki)/ -bira(ki)/ hira(keru)/ a(ku)/ a(keru)",
    "portugues": "abrir, desdobrar, deslacrar"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "62",
    "kanji": "&#25126;",
    "onyomi": "SEN",
    "kunyomi": "ikusa/ tataka(u)/ onono(ku)/ soyogu/ wanana(ku)",
    "portugues": "guerra, batalha, disputa"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "8",
    "kanji": "&#24066;",
    "onyomi": "SHI",
    "kunyomi": "ichi",
    "portugues": "mercado, cidade, cidade"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "119",
    "kanji": "&#31859;",
    "onyomi": "BEI/ MAI/ MEUTORU",
    "kunyomi": "kome/ yone",
    "portugues": "arroz, EUA"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "1",
    "kanji": "&#27665;",
    "onyomi": "MIN",
    "kunyomi": "tami",
    "portugues": "pessoas, nação, assuntos"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "4",
    "kanji": "&#21315;",
    "onyomi": "SEN",
    "kunyomi": "chi",
    "portugues": "mil"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "162",
    "kanji": "&#36899;",
    "onyomi": "REN",
    "kunyomi": "tsura(naru)/ tsura(neru)/ tsu(reru)/ -dzu(re)",
    "portugues": "levar pelo caminho, primazia, unir, conectar, partido, gangue, grupo"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "85",
    "kanji": "&#27770;",
    "onyomi": "KETSU",
    "kunyomi": "ki(meru)/ -gi(me)/ ki(maru)/ um(ku)",
    "portugues": "decida, fixar, concordar sobre, nomear"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "96",
    "kanji": "&#29694;",
    "onyomi": "GEN",
    "kunyomi": "arawa(reru)/ arawa(su)",
    "portugues": "presente, exist6encia, realidade"
  },
  {
    "nivel": "1",
    "tracos": "2",
    "bushu": "11",
    "kanji": "&#20837;",
    "onyomi": "NYUU/ NIT-",
    "kunyomi": "i(ru)/ -i(ru)/ -i(ri)/ i(reru)/ -i(re)/ hai(ru)/ hama(ru)",
    "portugues": "entrar, inserir"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "4",
    "kanji": "&#21320;",
    "onyomi": "GO",
    "kunyomi": "uma",
    "portugues": "meio-dia"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "9",
    "kanji": "&#20195;",
    "onyomi": "UM/ TAI",
    "kunyomi": "ka(waru)/ kawa(ru)/ kawa(ri)/ -gawa(ri)/ ka(eru)/ yo/ shiro",
    "portugues": "substituto, mudança, convertido, repor, período, idade, geração, carga, valor, taxa"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "118",
    "kanji": "&#31532;",
    "onyomi": "JÁ/ TEI",
    "kunyomi": " ",
    "portugues": "prefixo p/ números ordinais, residência"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "40",
    "kanji": "&#23455;",
    "onyomi": "JITSU/ SHITSU",
    "kunyomi": "mi/ mino(ru)/ makoto/ makotoni/ mino/ michi(ru)/ jit-",
    "portugues": "realidade, verdade"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "8",
    "kanji": "&#20027;",
    "onyomi": "SHU/ SU/ SHUU",
    "kunyomi": "nushi/ omo/ aruji",
    "portugues": "senhor, chefe, mestre, coisa principal, principal"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "19",
    "kanji": "&#21205;",
    "onyomi": "DOU",
    "kunyomi": "ugo(ku)/ ugo(kasu)",
    "portugues": "mover, movimento, mudança, jáfusão, trocar, agitar"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "72",
    "kanji": "&#26126;",
    "onyomi": "MEI/ MYOU/ MIN",
    "kunyomi": "a(kari)/ aka(rui)/ aka(rumu)/ aka(ramu)/ aki(raka)/ a(keru)/ -a(ke)/ a(ku)/ a(kuru)/ a(kasu)",
    "portugues": "brilhante, luz"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "42",
    "kanji": "&#20826;",
    "onyomi": "TOU",
    "kunyomi": "nakama/ mura",
    "portugues": "partido, facção, claque"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "42",
    "kanji": "&#24403;",
    "onyomi": "TOU",
    "kunyomi": "a(taru)/ a(tari)/ a(teru)/ a( te)/ masa(ni)/ masa(nibeshi)",
    "portugues": "golpear, direita, apropriada, ele próprio"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "1",
    "kanji": "&#19979;",
    "onyomi": "KA/ GE",
    "kunyomi": "shita/ shimo/ moto/ única(geru)/ única(garu)/ kuda(ru)/ kuda(ri)/ kuda(su)/ -kuda(su)/ kuda(saru)/ o(rosu)/ o( riru)",
    "portugues": "baixo, abaixo, descende, inferior, baixo,sub, sob"
  },
  {
    "nivel": "4",
    "tracos": "14",
    "bushu": "169",
    "kanji": "&#38306;",
    "onyomi": "KAN",
    "kunyomi": "seki/ -zeki/ kaka(waru)/ karakuri/ kannuki",
    "portugues": "conexão, obstáculo, passagem, emvolver, concernente"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "40",
    "kanji": "&#23478;",
    "onyomi": "KA/ KE",
    "kunyomi": "ie/ ya/ uchi",
    "portugues": "casa, lar"
  },
  {
    "nivel": "3",
    "tracos": "15",
    "bushu": "149",
    "kanji": "&#35519;",
    "onyomi": "CHOU",
    "kunyomi": "shira(beru)/ shira(be)/ totono(u)/ totono(eru)",
    "portugues": "canção, tom, métrica, clave (música), estilo de escrever, preparar, exorcisar, investigar"
  },
  {
    "nivel": "3",
    "tracos": "18",
    "bushu": "72",
    "kanji": "&#38988;",
    "onyomi": "DAÍ",
    "kunyomi": " ",
    "portugues": "tópico, assunto"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "66",
    "kanji": "&#25945;",
    "onyomi": "KYOU",
    "kunyomi": "oshi(eru)/ oso(waru)",
    "portugues": "ensinar, fé, doutrina"
  },
  {
    "nivel": "3",
    "tracos": "13",
    "bushu": "180",
    "kanji": "&#24847;",
    "onyomi": "I",
    "kunyomi": " ",
    "portugues": "idéia, mente, coração, gosto, pensamento, desejo, atenção, gosto"
  },
  {
    "nivel": "3",
    "tracos": "4",
    "bushu": "22",
    "kanji": "&#21306;",
    "onyomi": "KU/ OU/ KOU",
    "kunyomi": " ",
    "portugues": "waº, distrito"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "21",
    "kanji": "&#21271;",
    "onyomi": "HOKU",
    "kunyomi": "kita",
    "portugues": "norte"
  },
  {
    "nivel": "4",
    "tracos": "16",
    "bushu": "75",
    "kanji": "&#27231;",
    "onyomi": "KI",
    "kunyomi": "hata",
    "portugues": "mecanismo, oportunidade, ocasião, máquina, avião"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "146",
    "kanji": "&#35201;",
    "onyomi": "YOU",
    "kunyomi": "I(ru)",
    "portugues": "necessidade, ponto principal, essência, pivô, chave para"
  },
  {
    "nivel": "3",
    "tracos": "4",
    "bushu": "9",
    "kanji": "&#21270;",
    "onyomi": "KA/ KE",
    "kunyomi": "ba(keru)/ ba(kasu)/ fu(keru)/ ke(C132suru)",
    "portugues": "mudança, tomar a forma de, influência, encantar, iludir,seduzir, -isação"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "166",
    "kanji": "&#37326;",
    "onyomi": "YA/ SHO",
    "kunyomi": "no/ no-",
    "portugues": "planícies, campo, rústico, vida de civil"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "4",
    "kanji": "&#26469;",
    "onyomi": "RAI/ TAI",
    "kunyomi": "ku(ru)/ kita(ru)/ kita(su)/ ki(tasu)/ ki(taru)/ ki/ ko",
    "portugues": "vir, devido, próximo, causa, tornar-se"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "96",
    "kanji": "&#29702;",
    "onyomi": "RI",
    "kunyomi": "kotowari",
    "portugues": "lógica, arranjo, razão, justiça, verdade"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20307;",
    "onyomi": "TAI/ TEI",
    "kunyomi": "karada/ katachi",
    "portugues": "corpo, substância, objeto, realidade, sufixo para contagem de  para imagens"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "57",
    "kanji": "&#24375;",
    "onyomi": "KYOU/ GOU",
    "kunyomi": "tsuyo(i)/ tsuyo(maru)/ tsuyo(meru)/ shi(iru)/ kowa(i)",
    "portugues": "forte, poderoso, forçar"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "62",
    "kanji": "&#25104;",
    "onyomi": "SEI/ JOU",
    "kunyomi": "na(ru)/ na(su)/ -na(su)",
    "portugues": "tornar-se, obter, crescer, passar, alcançar"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "36",
    "kanji": "&#22806;",
    "onyomi": "GAI/ GE",
    "kunyomi": "soto/ hoka/ hazu(su)/ hazu(reru)+C190/ to-",
    "portugues": "exterior"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "163",
    "kanji": "&#37117;",
    "onyomi": "TO/ TSU",
    "kunyomi": "miyako",
    "portugues": "metropole, capital"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20316;",
    "onyomi": "SAKU/ UM",
    "kunyomi": "tsuku(ru)/ tsuku(ri)/ -dzuku(ri)",
    "portugues": "fazer, produção, preparar, construção"
  },
  {
    "nivel": "4",
    "tracos": "15",
    "bushu": "162",
    "kanji": "&#36984;",
    "onyomi": "SEN",
    "kunyomi": "era(bu)",
    "portugues": "eleger, selecionar, escolher, preferir"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "63",
    "kanji": "&#25152;",
    "onyomi": "SHO",
    "kunyomi": "tokoro/ -tokoro/ dokoro/ toko",
    "portugues": "lugar"
  },
  {
    "nivel": "2",
    "tracos": "3",
    "bushu": "1",
    "kanji": "&#19975;",
    "onyomi": "MAN/ BAN",
    "kunyomi": "yorozu",
    "portugues": "dez mil"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "12",
    "kanji": "&#20844;",
    "onyomi": "KOU/ KU",
    "kunyomi": "ooyake",
    "portugues": "público, príncipe, oficial, governamental"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "2",
    "kanji": "&#34920;",
    "onyomi": "HYOU",
    "kunyomi": "omote/ -omote/ arawa(su)/ arawa(reru)/ ara(wasu)",
    "portugues": "superfície, tabela, gráfico, diagrama"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "72",
    "kanji": "&#26368;",
    "onyomi": "SAI/ SHU",
    "kunyomi": "motto(mo)/ tsuma",
    "portugues": "capacidade máxima, maior, extremo"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "162",
    "kanji": "&#36817;",
    "onyomi": "KIN/ KON",
    "kunyomi": "chika(i)",
    "portugues": "perto, cedo, consangüíneo, equivalente"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "130",
    "kanji": "&#26399;",
    "onyomi": "KI/ GO",
    "kunyomi": " ",
    "portugues": "período, tempo, data, termo"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "102",
    "kanji": "&#24605;",
    "onyomi": "SHI",
    "kunyomi": "omo(u)/ omoera(ku)/ obo(su)",
    "portugues": "pensar"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "1",
    "kanji": "&#27491;",
    "onyomi": "SEI/ SHOU",
    "kunyomi": "tada(shii)/ tada(su)/ masa/ masa(ni)",
    "portugues": "corrigir, justiça, correto, direito, 10 elevado a  40"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "93",
    "kanji": "&#29289;",
    "onyomi": "BUTSU/ MOTSU",
    "kunyomi": "mono/ mono-",
    "portugues": "coisa, objeto, matéria"
  },
  {
    "nivel": "2",
    "tracos": "12",
    "bushu": "162",
    "kanji": "&#36947;",
    "onyomi": "DOU/ TOU",
    "kunyomi": "michi",
    "portugues": "caminho, estrada, rua, distrito, viagem, curso, moral, ensinamentos, filosofia"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "53",
    "kanji": "&#24220;",
    "onyomi": "FU",
    "kunyomi": " ",
    "portugues": "burgo, região urbana, altocomissariado, corpo representativo, depósito"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27861;",
    "onyomi": "HOU/ HAT-/ HOT-/ FURAN",
    "kunyomi": "nori",
    "portugues": "método, lei, regra, princípio, modelo, sistema"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "120",
    "kanji": "&#32004;",
    "onyomi": "YOU",
    "kunyomi": " ",
    "portugues": "promessa, aproximadamente, recuar"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "101",
    "kanji": "&#29992;",
    "onyomi": "YOU",
    "kunyomi": "mochi(iru)",
    "portugues": "utilizar, negócios, serviço, usar, empregar"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "25",
    "kanji": "&#28857;",
    "onyomi": "TEN",
    "kunyomi": "tsu(keru)/ tsu(ku)/ ta(teru)/ sa(su)/ tobo(su)/ tomo(su)/ bochi",
    "portugues": "ponto, marca, ponto decimal"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "40",
    "kanji": "&#23433;",
    "onyomi": "AN",
    "kunyomi": "yasu(i)/ yasu(maru)/ yasu/ yasu( raka)",
    "portugues": "relaxar, calmo, baixo, barato, descansado, pacífico, satisfeito"
  },
  {
    "nivel": "4",
    "tracos": "4",
    "bushu": "1",
    "kanji": "&#19981;",
    "onyomi": "FU/ BU",
    "kunyomi": " ",
    "portugues": "prefixo negativo, negativa, não, feia, ruim, deselegante"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "110",
    "kanji": "&#21209;",
    "onyomi": "JÁ",
    "kunyomi": "tsuto(meru)",
    "portugues": "tarefa, deveres"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "61",
    "kanji": "&#24515;",
    "onyomi": "SHIN",
    "kunyomi": "kokoro/ -gokoro",
    "portugues": "coração, mente, espírito"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "117",
    "kanji": "&#29987;",
    "onyomi": "SAN",
    "kunyomi": "u(mu)/ u(mareru)/ ubu-/ mu(su)",
    "portugues": "produtos, dar a luz, nascer, dar crias, nascimento, nativo, bens"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "9",
    "kanji": "&#20170;",
    "onyomi": "KON/ KIN",
    "kunyomi": "ima",
    "portugues": "agora"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "47",
    "kanji": "&#24029;",
    "onyomi": "SEN",
    "kunyomi": "kawa",
    "portugues": "corrente, rio"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "120",
    "kanji": "&#32076;",
    "onyomi": "KEI/ KYOU",
    "kunyomi": "he(ru)/ ta(tsu)/ tateito/ jáka(ru)/ nori",
    "portugues": "sutra, longitude, passar através de, expirar, empenar"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "115",
    "kanji": "&#22996;",
    "onyomi": "I",
    "kunyomi": "yuda(neru)",
    "portugues": "comitê, confiar a, deixar para, dedicar, descartar"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "9",
    "kanji": "&#20197;",
    "onyomi": "I",
    "kunyomi": "mot-(te)",
    "portugues": "por meios de, porque, em visão de, comparada com"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "12",
    "kanji": "&#20849;",
    "onyomi": "KYOU",
    "kunyomi": "tomo/ tomo(ni)/ -domo",
    "portugues": "juntamente, ambos (em afirm.), nenhum (em neg.), todo, e, da mesma forma, com"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "27",
    "kanji": "&#21407;",
    "onyomi": "GEN",
    "kunyomi": "hara",
    "portugues": "prado, original, primitivo, campo, planície, pradaria, tundra, sertão"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "4",
    "kanji": "&#37325;",
    "onyomi": "JUU/ CHOU",
    "kunyomi": "e/ omo(i)/ omo(ri)/ omo(nau)/ kasa(neru)/ kaum(naru)/ omo",
    "portugues": "pesado, empilhar, pilha de caixas, -dobrar"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "120",
    "kanji": "&#32080;",
    "onyomi": "KETSU/ KECHI",
    "kunyomi": "musu(bu)/ yu(u)/ yu(waeru)",
    "portugues": "laço, unir, contrato, união, organizar, pentear, fechar"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "85",
    "kanji": "&#28023;",
    "onyomi": "KAI",
    "kunyomi": "umi",
    "portugues": "oceano, mar"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "85",
    "kanji": "&#27700;",
    "onyomi": "SUI",
    "kunyomi": "mizu/ mizu-",
    "portugues": "água"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "64",
    "kanji": "&#25171;",
    "onyomi": "DA/ DAASU",
    "kunyomi": "u(tsu)/ u(chi-)",
    "portugues": "bater, acesso, batida, libra, dúzia"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "36",
    "kanji": "&#21517;",
    "onyomi": "MEI/ MYOU",
    "kunyomi": "na/ -na",
    "portugues": "nome, fama, distinção, reputação"
  },
  {
    "nivel": "1",
    "tracos": "7",
    "bushu": "102",
    "kanji": "&#30010;",
    "onyomi": "CHOU",
    "kunyomi": "machi",
    "portugues": "aldeia, cidade, bloco, rua"
  },
  {
    "nivel": "3",
    "tracos": "4",
    "bushu": "6",
    "kanji": "&#20104;",
    "onyomi": "YO/ SHA",
    "kunyomi": "arakaji(me)",
    "portugues": "de antemão, prévio, eu mesmo, Eu"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "36",
    "kanji": "&#22810;",
    "onyomi": "TA",
    "kunyomi": "oo(i)/ masa(ni)/ masa(ru)",
    "portugues": "muitos, frequentar, muito"
  },
  {
    "nivel": "2",
    "tracos": "13",
    "bushu": "149",
    "kanji": "&#35441;",
    "onyomi": "WA",
    "kunyomi": "hana(su)/ hanashi",
    "portugues": "conversar, falar uma língua, conto"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "120",
    "kanji": "&#32207;",
    "onyomi": "SOU",
    "kunyomi": "su(bete)/ sube(te)/ fusa",
    "portugues": "geral, inteiro, todo, cheio, total"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "149",
    "kanji": "&#35373;",
    "onyomi": "SETSU",
    "kunyomi": "mo_(keru)",
    "portugues": "estabelecimento, provisão, preparar"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "14",
    "kanji": "&#36557;",
    "onyomi": "GUN",
    "kunyomi": " ",
    "portugues": "exército, força, tropas, guerra, batalha"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "176",
    "kanji": "&#38754;",
    "onyomi": "MEN/ BEN",
    "kunyomi": "omo/ omote/ tsura",
    "portugues": "máscara, rosto, recursos, superfície"
  },
  {
    "nivel": "3",
    "tracos": "4",
    "bushu": "27",
    "kanji": "&#21453;",
    "onyomi": "HAN/ HON/ TAN/ HO",
    "kunyomi": "so(ru)/ so(rasu)/ kae(su)/ kae(ru)/ -kae(ru)",
    "portugues": "anti"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "75",
    "kanji": "&#26408;",
    "onyomi": "BOKU/ MOKU",
    "kunyomi": "ki/ ko-",
    "portugues": "árvore, madeira"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "162",
    "kanji": "&#36939;",
    "onyomi": "UN",
    "kunyomi": "hako(bu)",
    "portugues": "carregar, sorte, destino, objetivo, transportar, progresso, avanço"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "149",
    "kanji": "&#35352;",
    "onyomi": "KI",
    "kunyomi": "shiru(su)",
    "portugues": "escriba, contar, narrativa, narrar"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "1",
    "kanji": "&#24179;",
    "onyomi": "HEI/ BYOU/ HYOU",
    "kunyomi": "tai(ra)/ -daira/ hira/ hira-",
    "portugues": "até mesmo, apartamento, paz"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "129",
    "kanji": "&#26360;",
    "onyomi": "SHO",
    "kunyomi": "ka(ku)/ -ga(ki)/ -gaki",
    "portugues": "escrever"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "64",
    "kanji": "&#25345;",
    "onyomi": "JI",
    "kunyomi": "mo(tsu)/ -mo(chi)/ mo(teru)",
    "portugues": "segurar, ter"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "120",
    "kanji": "&#32011;",
    "onyomi": "MON",
    "kunyomi": " ",
    "portugues": "brazão de família, figuras"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "67",
    "kanji": "&#25991;",
    "onyomi": "BUN/ MON",
    "kunyomi": "fumi/ aya",
    "portugues": "sentença, literatura, estilo, arte, decoração, figuras, plano"
  },
  {
    "nivel": "5",
    "tracos": "6",
    "bushu": "31",
    "kanji": "&#22243;",
    "onyomi": "DAN/ TON",
    "kunyomi": "katamari/ maru(i)",
    "portugues": "grupo, associação"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "115",
    "kanji": "&#21644;",
    "onyomi": "WA/ O/ KA",
    "kunyomi": "yawa(ragu)/ yawa(rageru)/ nago(mu)/ nago(yaka)",
    "portugues": "harmonia, estilo Japonês, paz, amaciar, Japão"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "130",
    "kanji": "&#21213;",
    "onyomi": "SHOU",
    "kunyomi": "ka(tsu)/ -ga(chi)/ masa(ru)/ sugu(reru)/ katsu",
    "portugues": "vitória, vencer, prevalecer, superar"
  },
  {
    "nivel": "1",
    "tracos": "10",
    "bushu": "75",
    "kanji": "&#26657;",
    "onyomi": "KOU/ KYOU",
    "kunyomi": " ",
    "portugues": "exame, escola, impressão, prova, correção"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "162",
    "kanji": "&#36914;",
    "onyomi": "SHIN",
    "kunyomi": "susu(já)/ susu(meru)",
    "portugues": "avanço, continuar, progresso, promover"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "125",
    "kanji": "&#32771;",
    "onyomi": "KOU",
    "kunyomi": "kanga(eru)/ kanga(e)",
    "portugues": "considerar, refletir"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "120",
    "kanji": "&#32068;",
    "onyomi": "SO",
    "kunyomi": "ku(mu)/ kumi/ -gumi",
    "portugues": "associação, trança, trançart, construir, montar, unir-se, cooperar, agarrar"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "2",
    "kanji": "&#19990;",
    "onyomi": "SEI/ SE/ SOU",
    "kunyomi": "yo/ sanju_",
    "portugues": "geração, mundo, sociedade, pública"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "9",
    "kanji": "&#20445;",
    "onyomi": "HO/ HOU",
    "kunyomi": "tamo(tsu)",
    "portugues": "proteger garantia, guarda, preservar, sustentar, apoiar"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "18",
    "kanji": "&#21046;",
    "onyomi": "SEI",
    "kunyomi": " ",
    "portugues": "sistema, lei, regra"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "185",
    "kanji": "&#39318;",
    "onyomi": "SHU",
    "kunyomi": "kubi",
    "portugues": "pescoço"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "1",
    "kanji": "&#30011;",
    "onyomi": "GA/ KAKU/ E/ KAI",
    "kunyomi": "ega(ku)/ kaku(suru)/ kagi(ru)/ hakarigoto/ haka(ru)",
    "portugues": "gravura"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "19",
    "kanji": "&#21152;",
    "onyomi": "KA",
    "kunyomi": "kuwa(eru)/ kuwa(waru)",
    "portugues": "somar, adição, aumento, unir, incluir, Canadá"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "8",
    "kanji": "&#20132;",
    "onyomi": "KOU",
    "kunyomi": "maji(waru)/ maji(eru)/ ma(jiru)/ maji(ru)/ ma(zaru)/ ma(zeru)/ -ka(u)",
    "portugues": "Misturar-se, misturando, associação, vindo & indo"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "4",
    "kanji": "&#23798;",
    "onyomi": "TOU",
    "kunyomi": "shima",
    "portugues": "ilha"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27835;",
    "onyomi": "JI/ CHI",
    "kunyomi": "osa(meru)/ osa(maru)/ nao(ru)/ nao(su)",
    "portugues": "reino, estar em paz, acalmar-se, subjugar, domar, governo, cura, regra, conservar"
  },
  {
    "nivel": "1",
    "tracos": "7",
    "bushu": "159",
    "kanji": "&#36554;",
    "onyomi": "SHA",
    "kunyomi": "kuruma",
    "portugues": "carro"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "42",
    "kanji": "&#30476;",
    "onyomi": "KEN",
    "kunyomi": "ka(keru)",
    "portugues": "condado, prefeitura (região)"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "146",
    "kanji": "&#35199;",
    "onyomi": "SEI/ SAI/ SU",
    "kunyomi": "nishi",
    "portugues": "oeste, Espanha"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "128",
    "kanji": "&#21462;",
    "onyomi": "SHU",
    "kunyomi": "to(ru)/ to(ri)/ to(ri-)/ tori/ -do(ri)",
    "portugues": "tomar, trazer, recolher"
  },
  {
    "nivel": "2",
    "tracos": "13",
    "bushu": "66",
    "kanji": "&#25968;",
    "onyomi": "SUU/ SU/ SAKU/ SOKU/ SHU",
    "kunyomi": "kazu/ kazo(eru)/ shibashiba/ se(meru)/ wazurawa(shii)",
    "portugues": "número, vigor, destino, lei, figuras"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "24",
    "kanji": "&#21332;",
    "onyomi": "KYOU",
    "kunyomi": " ",
    "portugues": "co-, cooperação"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "102",
    "kanji": "&#30028;",
    "onyomi": "KAI",
    "kunyomi": " ",
    "portugues": "mundo"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "44",
    "kanji": "&#23616;",
    "onyomi": "KYOKU",
    "kunyomi": "tsubone",
    "portugues": "junta, escritório, caso, conclusão, dama da corte, amante, apartamento dela"
  },
  {
    "nivel": "2",
    "tracos": "3",
    "bushu": "48",
    "kanji": "&#24037;",
    "onyomi": "KOU/ KU/ GU",
    "kunyomi": " ",
    "portugues": "ofício, construção"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "2",
    "kanji": "&#21521;",
    "onyomi": "KOU",
    "kunyomi": "mu(ku)/ mu(i)/ -mu(ki)/ mu(keru)/ -mu(ke)/ mu(kau)/ mu(kai)/ mu(ko_)/ mu(ko_-)/ muko/ muka(i)",
    "portugues": "aquele lá, em frente, além de, confronta, desafia, tende para, aproximação"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "148",
    "kanji": "&#35299;",
    "onyomi": "KAI/ GE",
    "kunyomi": "to(ku)/ to(kasu)/ to(keru)/ hodo( ku)/ hodo(keru)/ waka(ru)/ sato(ru)",
    "portugues": "solucionar, notas, chave, explicação, compreensão, desamarrar, desfazer, resolveer, resposta, cancelar, absolver, explicar, detalhar"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "10",
    "kanji": "&#20808;",
    "onyomi": "SEN",
    "kunyomi": "saki/ ma(zu)",
    "portugues": "antes, prévio, na frente, futuro, precedência"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "149",
    "kanji": "&#35336;",
    "onyomi": "KEI",
    "kunyomi": "haka(ru)/ haka(rau)",
    "portugues": "desenho, plano, esquema, medida"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "24",
    "kanji": "&#21335;",
    "onyomi": "NAN/ NA",
    "kunyomi": "minami",
    "portugues": "sul"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "40",
    "kanji": "&#23448;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "burocracia, o governo"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "120",
    "kanji": "&#32154;",
    "onyomi": "ZOKU/ SHOKU/ KOU/ KYOU",
    "kunyomi": "tsudzu(ku)/ tsudzu(keru)/ tsugu(nai)",
    "portugues": "continuar, série, sequela, sequência"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "18",
    "kanji": "&#20999;",
    "onyomi": "SETSU/ SAI",
    "kunyomi": "ki(ru)/ -ki(ru)/ ki(ri)/ -ki(ri)/ -gi(ri)/ ki(reru)/ -ki(reru)/ ki(re)/ -ki(re)/ -gi(re)",
    "portugues": "corte, talho, afiar"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "9",
    "kanji": "&#20596;",
    "onyomi": "SOKU",
    "kunyomi": "kawa/ gawa/ soba",
    "portugues": "lado, inclinação, opõe, pesar"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "40",
    "kanji": "&#26696;",
    "onyomi": "AN",
    "kunyomi": " ",
    "portugues": "plano, sugestão, esboço, ponderar, medo, proposição, idéia, expectativa, conta, preocupar"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "4",
    "kanji": "&#23569;",
    "onyomi": "SHOU",
    "kunyomi": "suku(nai)/ suko(shi)",
    "portugues": "poucos, pequenos"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "38",
    "kanji": "&#22899;",
    "onyomi": "JO/ NYO/ NYOU",
    "kunyomi": "onna/ me",
    "portugues": "mulher, fêmea"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "120",
    "kanji": "&#32113;",
    "onyomi": "TOU",
    "kunyomi": "su(beru)/ hobi(ru)",
    "portugues": "global, relacionamento, controlar, governante"
  },
  {
    "nivel": "6",
    "tracos": "7",
    "bushu": "115",
    "kanji": "&#31169;",
    "onyomi": "SHI",
    "kunyomi": "watakushi/ watashi",
    "portugues": "particular, Eu, me"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "4",
    "kanji": "&#30465;",
    "onyomi": "SEI/ SHOU",
    "kunyomi": "kaeri(miru)/ habu(ku)",
    "portugues": "foco, ministério de governo, umservar"
  },
  {
    "nivel": "2",
    "tracos": "13",
    "bushu": "173",
    "kanji": "&#38651;",
    "onyomi": "DEN",
    "kunyomi": " ",
    "portugues": "eletricidade"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "30",
    "kanji": "&#21697;",
    "onyomi": "HIN/ HON",
    "kunyomi": "shina",
    "portugues": "bens, refinamento, dignidade, artigo, sufixo para contagem de  para pratos de refeição"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "32",
    "kanji": "&#22770;",
    "onyomi": "BAI",
    "kunyomi": "u(ru)/ u(reru)",
    "portugues": "vender"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "111",
    "kanji": "&#30693;",
    "onyomi": "CHI",
    "kunyomi": "shi(ru)/ shi(raseru)",
    "portugues": "saber, sabedoria"
  },
  {
    "nivel": "5",
    "tracos": "6",
    "bushu": "32",
    "kanji": "&#22312;",
    "onyomi": "ZAI",
    "kunyomi": "a(ru)",
    "portugues": "existir, arredores, subúrbios, localizados em"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "57",
    "kanji": "&#24341;",
    "onyomi": "IN",
    "kunyomi": "hi(ku)/ hi(ki)/ hi(ki-)/ -bi(ki) / hi(keru)",
    "portugues": "puxar, rebocar, sacudir, permitir, instalar, citação, referir-se"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "170",
    "kanji": "&#38498;",
    "onyomi": "IN",
    "kunyomi": " ",
    "portugues": "instituição, templo, mansão, escola"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "3",
    "kanji": "&#21322;",
    "onyomi": "HAN",
    "kunyomi": "naka(ba)",
    "portugues": "metade, médio, número ímpar, semi, parte"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "34",
    "kanji": "&#21508;",
    "onyomi": "KAKU",
    "kunyomi": "onoono",
    "portugues": "cada, todo, um ou outro"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "118",
    "kanji": "&#31574;",
    "onyomi": "SAKU",
    "kunyomi": " ",
    "portugues": "esquema, plano, política, passo, meios"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "93",
    "kanji": "&#29305;",
    "onyomi": "TOKU",
    "kunyomi": " ",
    "portugues": "especial"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "15",
    "kanji": "&#27425;",
    "onyomi": "JI/ SHI",
    "kunyomi": "tsu(gu)/ tsugi",
    "portugues": "próximo, pedido, seqüência"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "154",
    "kanji": "&#36039;",
    "onyomi": "SHI",
    "kunyomi": " ",
    "portugues": "bens, recursos, capital, fundos, dados, se levado a, contribuir para"
  },
  {
    "nivel": "1",
    "tracos": "7",
    "bushu": "75",
    "kanji": "&#26449;",
    "onyomi": "SON",
    "kunyomi": "mura",
    "portugues": "cidade, aldeia"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "172",
    "kanji": "&#38598;",
    "onyomi": "SHUU",
    "kunyomi": "atsu(maru)/ atsu(meru)/ tsudo(u)",
    "portugues": "juntar, reunião, congregar, enxame, bando"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "85",
    "kanji": "&#28436;",
    "onyomi": "EN",
    "kunyomi": " ",
    "portugues": "performance, ato, jogo, fazer, estágio"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "78",
    "kanji": "&#27515;",
    "onyomi": "SHI",
    "kunyomi": "shi(nu)/ shi(ni-)",
    "portugues": "morte, dados"
  },
  {
    "nivel": "6",
    "tracos": "15",
    "bushu": "75",
    "kanji": "&#27177;",
    "onyomi": "KEN/ GON",
    "kunyomi": "omori/ kari/ haka(ru)",
    "portugues": "autoridade, força, direitos"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "87",
    "kanji": "&#21463;",
    "onyomi": "JU",
    "kunyomi": "u(keru)/ -u(ke)/ u(karu)",
    "portugues": "aceitar, sofrer, atender (telefone), tomar, obter, pegar, receber"
  },
  {
    "nivel": "1",
    "tracos": "8",
    "bushu": "116",
    "kanji": "&#31354;",
    "onyomi": "KUU",
    "kunyomi": "sora/ a(ku)/ a(ki)/ a(keru)/ kara/ su(ku)/ su(kasu)/ muna(shii)",
    "portugues": "esvaziar, ceú, desocupado, vazio, vácuo"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "85",
    "kanji": "&#27963;",
    "onyomi": "KATSU",
    "kunyomi": "I(kiru)/ I(kasu)/ I(keru)",
    "portugues": "vivo, resuscitação, existência, ser ajudado, vida"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#20351;",
    "onyomi": "SHI",
    "kunyomi": "tsuka(u)/ tsuka(i)/ -tsuka(i)/ -dzuka(i)",
    "portugues": "uso, usar"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "64",
    "kanji": "&#25237;",
    "onyomi": "TOU",
    "kunyomi": "na(geru)/ -na(ge)",
    "portugues": "arremessar, descartar, desembaraçar, lançar, unir, investir, atirar, desistir, vender com perdas"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "28",
    "kanji": "&#21488;",
    "onyomi": "UM/ TAI",
    "kunyomi": "utena/ ware/ tsukasa",
    "portugues": "pedestal, stand, sufixo para contagem de  para máquinas e veículos"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "4",
    "kanji": "&#20105;",
    "onyomi": "SOU",
    "kunyomi": "araso(u)/ ika(deka)",
    "portugues": "lutar, disputar, discutir"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "9",
    "kanji": "&#20449;",
    "onyomi": "SHIN",
    "kunyomi": " ",
    "portugues": "fé, verdade, fidelidade, confiança"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "86",
    "kanji": "&#28961;",
    "onyomi": "MU/ BU",
    "kunyomi": "na(i)",
    "portugues": "sem valor, nada, não sou/ estou, nada, nihil, não"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "8",
    "kanji": "&#32946;",
    "onyomi": "IKU",
    "kunyomi": "soda(tsu)/ soda(chi)/ soda(teru)/ haguku(mu)",
    "portugues": "educar, crescer, levantar, elevar"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "64",
    "kanji": "&#25351;",
    "onyomi": "SHI",
    "kunyomi": "yubi/ sa(su)/ -sa(shi)",
    "portugues": "dedo, apontar para, indicar, colocar dentro, jogo (xadrez), medida (governantal)"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "61",
    "kanji": "&#24615;",
    "onyomi": "SEI/ SHOU",
    "kunyomi": "saga",
    "portugues": "sexo, gênero, natureza"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "54",
    "kanji": "&#24314;",
    "onyomi": "KEN/ KON",
    "kunyomi": "ta(teru)/ ta(te)/ -da(te)/ ta(tsu)",
    "portugues": "construção"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "162",
    "kanji": "&#36865;",
    "onyomi": "SOU",
    "kunyomi": "oku(ru)",
    "portugues": "acompanhante, enviar"
  },
  {
    "nivel": "1",
    "tracos": "7",
    "bushu": "102",
    "kanji": "&#30007;",
    "onyomi": "DAN/ NAN",
    "kunyomi": "otoko/ o",
    "portugues": "masculino"
  },
  {
    "nivel": "2",
    "tracos": "15",
    "bushu": "120",
    "kanji": "&#32218;",
    "onyomi": "UM",
    "kunyomi": "suji",
    "portugues": "linha, trilha"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "1",
    "kanji": "&#20001;",
    "onyomi": "RYOU",
    "kunyomi": "teru/ futatsu",
    "portugues": "ambos, moeda Japonesa antiga, nº de veículos, dois"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "182",
    "kanji": "&#39080;",
    "onyomi": "FUU/ FU",
    "kunyomi": "kaze/ kaza-/ -kaze",
    "portugues": "vento, ar, estilo, maneira"
  },
  {
    "nivel": "1",
    "tracos": "2",
    "bushu": "9",
    "kanji": "&#20154;",
    "onyomi": "JIN/ NIN",
    "kunyomi": "hito/ -ri/ -to",
    "portugues": "pessoa"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "75",
    "kanji": "&#26619;",
    "onyomi": "UM",
    "kunyomi": " ",
    "portugues": "investigar"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "119",
    "kanji": "&#26009;",
    "onyomi": "RYOU",
    "kunyomi": " ",
    "portugues": "taxa, materiais"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "30",
    "kanji": "&#21475;",
    "onyomi": "KOU/ KU",
    "kunyomi": "kuchi",
    "portugues": "boca"
  },
  {
    "nivel": "6",
    "tracos": "15",
    "bushu": "149",
    "kanji": "&#35542;",
    "onyomi": "RON",
    "kunyomi": " ",
    "portugues": "argumento, discurso"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "72",
    "kanji": "&#26089;",
    "onyomi": "SOU/ SAT-",
    "kunyomi": "haya(i)/ haya/ haya-/ haya(maru)/ haya(meru)/ sa-",
    "portugues": "cedo, rápido"
  },
  {
    "nivel": "2",
    "tracos": "14",
    "bushu": "169",
    "kanji": "&#32862;",
    "onyomi": "BUN/ MON",
    "kunyomi": "ki(ku)/ ki(koeru)",
    "portugues": "escutar, perguntar, escuta"
  },
  {
    "nivel": "2",
    "tracos": "12",
    "bushu": "130",
    "kanji": "&#26397;",
    "onyomi": "CHOU",
    "kunyomi": "asa",
    "portugues": "manhã, disnastia, regime, época, período, Coréia do Norte"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "149",
    "kanji": "&#35328;",
    "onyomi": "GEN/ GON",
    "kunyomi": "i(u)/ koto",
    "portugues": "dizer, palavras"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "70",
    "kanji": "&#25918;",
    "onyomi": "HOU",
    "kunyomi": "hana(su)/ -ppana(shi)/ hana(tsu)/ hana(reru)/ ho_(ru)",
    "portugues": "libertar, liberação, fogo, disparar, emitir, banir, liberar"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "85",
    "kanji": "&#27966;",
    "onyomi": "UM",
    "kunyomi": " ",
    "portugues": "facção, grupo, partido, claque, seita, escola"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "115",
    "kanji": "&#21033;",
    "onyomi": "RI",
    "kunyomi": "ki(ku)",
    "portugues": "lucro, vantagem, benefício"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "123",
    "kanji": "&#32681;",
    "onyomi": "GI",
    "kunyomi": " ",
    "portugues": "retidão, justiça, moralidade, honra, lealdade, significado"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "56",
    "kanji": "&#24335;",
    "onyomi": "SHIKI",
    "kunyomi": " ",
    "portugues": "estilo, cerimônia, rito, método, sistema, formulário"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "8",
    "kanji": "&#22812;",
    "onyomi": "YA",
    "kunyomi": "yo/ yoru",
    "portugues": "noite,à  noite"
  },
  {
    "nivel": "5",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20214;",
    "onyomi": "KEN",
    "kunyomi": "kudan",
    "portugues": "romance, caso, matéria, item"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "49",
    "kanji": "&#25913;",
    "onyomi": "KAI",
    "kunyomi": "arata(meru)/ arata(maru)",
    "portugues": "reforma, mudança, modificar, umsertar, renovar, examinar, inspecionar, pesquisar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20304;",
    "onyomi": "UM",
    "kunyomi": " ",
    "portugues": "assistente, ajuda"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "113",
    "kanji": "&#31070;",
    "onyomi": "SHIN/ JIN",
    "kunyomi": "kami/ kan-/ ko_-",
    "portugues": "deus, mente, alma, divindade, divino"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "75",
    "kanji": "&#26494;",
    "onyomi": "SHOU",
    "kunyomi": "matsu",
    "portugues": "pinheiro"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "61",
    "kanji": "&#24773;",
    "onyomi": "JOU/ SEI",
    "kunyomi": "nasa(ke)",
    "portugues": "sentimentos, emoção, paixão, simpatia, circunstâncias, fatos"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "2",
    "kanji": "&#26524;",
    "onyomi": "KA",
    "kunyomi": "ha(tasu)/ hata(su)/ -ha(tasu)/ ha(teru)/ -ha(teru)/ ha(te)",
    "portugues": "fruta, recompensa, levar a cabo, alcançar, completar, fim, bem-sucedido"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "61",
    "kanji": "&#24613;",
    "onyomi": "KYUU",
    "kunyomi": "um(gu)/ um(gi)",
    "portugues": "apressar, emergência, repentina"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "3",
    "kanji": "&#24517;",
    "onyomi": "HITSU",
    "kunyomi": "kanara(zu)",
    "portugues": "invariavelmente, inevitável, certo"
  },
  {
    "nivel": "2",
    "tracos": "14",
    "bushu": "149",
    "kanji": "&#35486;",
    "onyomi": "GO",
    "kunyomi": "kata(ru)/ kata(rau)",
    "portugues": "palavra, discurso, língua"
  },
  {
    "nivel": "2",
    "tracos": "13",
    "bushu": "75",
    "kanji": "&#27005;",
    "onyomi": "GAKU/ RAKU/ GOU",
    "kunyomi": "tano(shii)/ tano(shimu)/ kono(há)",
    "portugues": "música, conforto, facilidade"
  },
  {
    "nivel": "3",
    "tracos": "13",
    "bushu": "61",
    "kanji": "&#24863;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "emoção, sentimento, sensação"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "4",
    "kanji": "&#20117;",
    "onyomi": "SEI/ SHOU",
    "kunyomi": "i",
    "portugues": "bem"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#20385;",
    "onyomi": "KA/ KE",
    "kunyomi": "atai",
    "portugues": "valor, preço"
  },
  {
    "nivel": "5",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20219;",
    "onyomi": "NIN",
    "kunyomi": "maka(seru)/ maka(su)",
    "portugues": "responsabilidade, dever, termo, confiar para, nomear"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "162",
    "kanji": "&#36796;",
    "onyomi": "KON/ KIN",
    "kunyomi": "-ko(mu)/ ko(mu)/ ko(mi)/ -ko(mi)/ ko(meru)",
    "portugues": "apinhado, misturar, em volume, incluido, (kokuji)"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "137",
    "kanji": "&#33337;",
    "onyomi": "SEN",
    "kunyomi": "fune/ funa-",
    "portugues": "barco"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28168;",
    "onyomi": "SAI/ SEI",
    "kunyomi": "su(mu)/ -zu(mi)/ -zumi/ su(manai)/ su(masu)/ -su(masu)/ suku(u)/ na(su)/ watashi/ wata(ru)",
    "portugues": "fim, terminar, desculpável, não necessário"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "32",
    "kanji": "&#22577;",
    "onyomi": "HOU",
    "kunyomi": "muku(iru)",
    "portugues": "relatório, notícias, recompensa, retribuição"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "145",
    "kanji": "&#21021;",
    "onyomi": "SHO",
    "kunyomi": "haji(me)/ haji(mete)/ hatsu/ hatsu-/ ui-/ -so(meru)/ -zo(me)",
    "portugues": "primeiros tempos, começo"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "18",
    "kanji": "&#21028;",
    "onyomi": "HAN/ BAN",
    "kunyomi": "waka(ru)",
    "portugues": "julgamento, assinatura, selo, carimbo"
  },
  {
    "nivel": "1",
    "tracos": "7",
    "bushu": "157",
    "kanji": "&#36275;",
    "onyomi": "SOKU",
    "kunyomi": "ashi/ ta(riru)/ ta(ru)/ ta(su)",
    "portugues": "perna, pé, ser suficiente"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "18",
    "kanji": "&#21029;",
    "onyomi": "BETSU",
    "kunyomi": "waka(reru)/ wa(keru)",
    "portugues": "separar, ramo desligado, divergir, garfo, outro, extra, especialmente"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "122",
    "kanji": "&#32622;",
    "onyomi": "CHI",
    "kunyomi": "o(ku)/ -o(ki)",
    "portugues": "colocação, por, colocar, depositar, abandonar, manter, empregar, hipotecar"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20303;",
    "onyomi": "JUU/ DJUU/ CHUU",
    "kunyomi": "su(mu)/ su(mau)/ -zu(mai)",
    "portugues": "reside, vida, habita"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "112",
    "kanji": "&#30707;",
    "onyomi": "SEKI/ SHAKU/ KOKU",
    "kunyomi": "ishi",
    "portugues": "pedra"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "32",
    "kanji": "&#22679;",
    "onyomi": "ZOU",
    "kunyomi": "ma(su)/ ma(shi)/ fu(eru)/ fu(yasu)",
    "portugues": "aumentar, somar, aumentar, ganhar, promover"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "130",
    "kanji": "&#26377;",
    "onyomi": "YUU/ U",
    "kunyomi": "a(ru)",
    "portugues": "possuir, ter, existir, acontecer, ocorrer, aproximadamente, haver"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "181",
    "kanji": "&#38936;",
    "onyomi": "RYOU",
    "kunyomi": " ",
    "portugues": "jurisdição, domínio, território, feudo, reino"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "19",
    "kanji": "&#21172;",
    "onyomi": "ROU",
    "kunyomi": "ro_(suru)/ itawa(ru)/ ita(zuki)/ negira/ tsuka(reru)/ negira(u)",
    "portugues": "trabalho, agradecer, recompensar,  dificuldade"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "170",
    "kanji": "&#38555;",
    "onyomi": "SAI",
    "kunyomi": "kiwa/ -giwa",
    "portugues": "ocasião, lado, margem, limite, indecente, ousado, perigoso, vez, quando"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "30",
    "kanji": "&#21578;",
    "onyomi": "KOKU",
    "kunyomi": "tsu(geru)",
    "portugues": "revelação, contar, informar, anuncia"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "72",
    "kanji": "&#26152;",
    "onyomi": "SAKU",
    "kunyomi": " ",
    "portugues": "ontem, prévio, anterior"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "184",
    "kanji": "&#39135;",
    "onyomi": "SHOKU/ JIKI",
    "kunyomi": "ku(u)/ ku(rau)/ ta(beru)/ ha(mu)",
    "portugues": "comer, comida, alimento"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "150",
    "kanji": "&#35895;",
    "onyomi": "KOKU",
    "kunyomi": "tani/ kiwa(maru)",
    "portugues": "vale"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "120",
    "kanji": "&#32066;",
    "onyomi": "SHUU",
    "kunyomi": "o(waru)/ -o(waru)/ owa(ru)/ o(eru)/ tsui/ tsui(ni)",
    "portugues": "fim, terminar"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "170",
    "kanji": "&#38450;",
    "onyomi": "BOU",
    "kunyomi": "fuse(gu)",
    "portugues": "desligar, defender, proteger, resistir"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "163",
    "kanji": "&#37070;",
    "onyomi": "ROU/ RYOU",
    "kunyomi": "otoko",
    "portugues": "filho, sufixo para contagem de filhos"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "60",
    "kanji": "&#24441;",
    "onyomi": "YAKU/ EKI",
    "kunyomi": " ",
    "portugues": "dever, guerra, campanha, esboço, escritório, serviço, papel"
  },
  {
    "nivel": "3",
    "tracos": "13",
    "bushu": "167",
    "kanji": "&#37444;",
    "onyomi": "TETSU",
    "kunyomi": "kurogane",
    "portugues": "ferro"
  },
  {
    "nivel": "3",
    "tracos": "4",
    "bushu": "4",
    "kanji": "&#22827;",
    "onyomi": "FU/ FUU/ BU",
    "kunyomi": "otto/ so(re)",
    "portugues": "marido, homem"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "75",
    "kanji": "&#26908;",
    "onyomi": "KEN",
    "kunyomi": "shira(beru)",
    "portugues": "examinar, investigar"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "106",
    "kanji": "&#30333;",
    "onyomi": "HAKU/ BYAKU",
    "kunyomi": "shiro/ shira-/ shiro(i)",
    "portugues": "branco"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "77",
    "kanji": "&#27497;",
    "onyomi": "HO/ BU/ FU",
    "kunyomi": "aru(ku)/ ayu(mu)",
    "portugues": "passeio"
  },
  {
    "nivel": "2",
    "tracos": "14",
    "bushu": "118",
    "kanji": "&#31639;",
    "onyomi": "SAN",
    "kunyomi": "soro",
    "portugues": "calcular, advinhar, número, ábaco, probabilidade"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "85",
    "kanji": "&#27969;",
    "onyomi": "RYUU/ RU",
    "kunyomi": "naga(reru)/ naga(re)/ naga(su)/ -naga(su)",
    "portugues": "corrente, afundar, fluxo, derrocada"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "203",
    "kanji": "&#40658;",
    "onyomi": "KOKU",
    "kunyomi": "kuro/ kuro(zumu)/ kuro(i)",
    "portugues": "preto"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "8",
    "kanji": "&#22793;",
    "onyomi": "HEN",
    "kunyomi": "ka(waru)/ ka(wari)/ ka(eru)",
    "portugues": "raro, mudança, estranhar"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "154",
    "kanji": "&#36027;",
    "onyomi": "HI",
    "kunyomi": "tsui(yasu)/ tsui(eru)",
    "portugues": "despesa, custo, gastar, consumir, perder"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "158",
    "kanji": "&#36523;",
    "onyomi": "SHIN",
    "kunyomi": "mi",
    "portugues": "alguém, pessoa, fase da vida"
  },
  {
    "nivel": "6",
    "tracos": "14",
    "bushu": "149",
    "kanji": "&#35469;",
    "onyomi": "NIN",
    "kunyomi": "mito(meru)/ shitata(meru)",
    "portugues": "reconhecer, testemunhar, discernir, reconhecer, apreciar, acreditar"
  },
  {
    "nivel": "5",
    "tracos": "4",
    "bushu": "65",
    "kanji": "&#25903;",
    "onyomi": "SHI",
    "kunyomi": "sasa(eru)/ tsuka(eru)/ ka(u)",
    "portugues": "ramo, apoio, sustentar"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "61",
    "kanji": "&#24907;",
    "onyomi": "TAI",
    "kunyomi": "waza(to)",
    "portugues": "atitude, condição, figura, aparecimento, voz (de verbos)"
  },
  {
    "nivel": "3",
    "tracos": "13",
    "bushu": "161",
    "kanji": "&#36786;",
    "onyomi": "NOU",
    "kunyomi": " ",
    "portugues": "agricultura, fazendeiros"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "24",
    "kanji": "&#30495;",
    "onyomi": "SHIN",
    "kunyomi": "ma/ ma-/ makoto",
    "portugues": "verdadeiro, realidade, seita do Budismo"
  },
  {
    "nivel": "5",
    "tracos": "18",
    "bushu": "128",
    "kanji": "&#32887;",
    "onyomi": "SHOKU/ SOKU",
    "kunyomi": " ",
    "portugues": "posto, emprego, trabalho"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "159",
    "kanji": "&#36578;",
    "onyomi": "JÁ",
    "kunyomi": "koro(garu)/ koro(geru)/ koro(gasu)/ koro(bu)/ maro(bu)/ utata/ utsu(ru)",
    "portugues": "revolver, voltar a ser, mudança"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "75",
    "kanji": "&#26666;",
    "onyomi": "SHU",
    "kunyomi": "kabu",
    "portugues": "tora, tronco, sufixo para contagem de  para pequenas plantas"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "24",
    "kanji": "&#30452;",
    "onyomi": "CHOKU/ JIKI/ JIKA",
    "kunyomi": "tada(chini)/ nao(su)/ -nao(su)/ nao(ru)/ nao(ki)/ su(gu)",
    "portugues": "retidão, honestidade, franqueza, consertar, reparo"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "79",
    "kanji": "&#27573;",
    "onyomi": "DAN/ TAN",
    "kunyomi": " ",
    "portugues": "grau, passos, escada"
  },
  {
    "nivel": "2",
    "tracos": "12",
    "bushu": "122",
    "kanji": "&#36023;",
    "onyomi": "BAI",
    "kunyomi": "ka(u)",
    "portugues": "comprar"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "9",
    "kanji": "&#20633;",
    "onyomi": "BI",
    "kunyomi": "sona(eru)/ sona(waru)/ tsubusa(ni)",
    "portugues": "equipe, provisão, preparação"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "44",
    "kanji": "&#23627;",
    "onyomi": "OKU",
    "kunyomi": "ya",
    "portugues": "teto, casa, loja, negociante, vendedor"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "164",
    "kanji": "&#37197;",
    "onyomi": "HAI",
    "kunyomi": "kuba(ru)",
    "portugues": "distribuir, cônjuge, exílio, racionamento"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20516;",
    "onyomi": "CHI",
    "kunyomi": "ne/ atai",
    "portugues": "preço, custo, valor"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "60",
    "kanji": "&#24471;",
    "onyomi": "TOKU",
    "kunyomi": "e(ru)/ u(ru)",
    "portugues": "ganho, obtem, achado, ganhar, adquirir, poder, capacidade, lucro, vantagem, benefício"
  },
  {
    "nivel": "5",
    "tracos": "6",
    "bushu": "1",
    "kanji": "&#20877;",
    "onyomi": "SAI/ SA",
    "kunyomi": "futata(bi)",
    "portugues": "outra vez, duas vezes, segundo tempo"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "40",
    "kanji": "&#23529;",
    "onyomi": "SHIN",
    "kunyomi": "tsumabi(raka)/ tsubusa(ni)",
    "portugues": "Inquérito, juiz, julgamento"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "53",
    "kanji": "&#24195;",
    "onyomi": "KOU",
    "kunyomi": "hiro(i)/ hiro(maru)/ hiro(meru)/ hiro(garu)/ hiro(geru)",
    "portugues": "largo,vasto, espaçoso"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "96",
    "kanji": "&#29699;",
    "onyomi": "KYUU",
    "kunyomi": "tama",
    "portugues": "bola, esfera"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "9",
    "kanji": "&#20184;",
    "onyomi": "FU",
    "kunyomi": "tsu(keru)/ -tsu(keru)/ -dzu(keru)/ tsu(ke)/ tsu(ke-)/ -tsu(ke)/ -dzu(ke)/ -dzuke/ tsu(ku)/ -dzu(ku)/ tsu(ki)/ -tsu(ki)/ -tsuki/ -dzu(ki)/ -dzuki",
    "portugues": "aderir, anexar"
  },
  {
    "nivel": "3",
    "tracos": "15",
    "bushu": "149",
    "kanji": "&#35527;",
    "onyomi": "DAN",
    "kunyomi": " ",
    "portugues": "discutir, conversar"
  },
  {
    "nivel": "2",
    "tracos": "12",
    "bushu": "165",
    "kanji": "&#30058;",
    "onyomi": "BAN",
    "kunyomi": "tsuga(i)",
    "portugues": "vez, número em uma série"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "1",
    "kanji": "&#30334;",
    "onyomi": "HYAKU/ BYAKU",
    "kunyomi": "momo",
    "portugues": "cem"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "19",
    "kanji": "&#21218;",
    "onyomi": "SEI/ ZEI",
    "kunyomi": "ikio(i)/ hazumi",
    "portugues": "forças, energia, vigor militar"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "77",
    "kanji": "&#27490;",
    "onyomi": "SHI",
    "kunyomi": "to(maru)/ -do(mari)/ to(meru)/ -to(meru)/ -do(me)/ todo(meru)/ todo(me)/ todo(maru)/ ya(meru)/ ya(mu)/ -ya(mu)/ yo(su)/ -sa(su)/ -sa(shi)",
    "portugues": "parada, parada"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "85",
    "kanji": "&#28040;",
    "onyomi": "SHOU",
    "kunyomi": "ki(eru)/ ke(su)",
    "portugues": "extinguir, apagar, desligar, neutralizar, cancelar"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "4",
    "kanji": "&#20055;",
    "onyomi": "JOU/ SHOU",
    "kunyomi": "no(ru)/ -no(ri)/ no(seru)",
    "portugues": "viagem, força, multiplicação,  De veículos, juntar, unir"
  },
  {
    "nivel": "4",
    "tracos": "14",
    "bushu": "149",
    "kanji": "&#35500;",
    "onyomi": "SETSU/ ZEI",
    "kunyomi": "to(ku)",
    "portugues": "rumor, opinião, teoria"
  },
  {
    "nivel": "6",
    "tracos": "19",
    "bushu": "149",
    "kanji": "&#35686;",
    "onyomi": "KEI",
    "kunyomi": "imashi(meru)",
    "portugues": "advertir, mandamentos"
  },
  {
    "nivel": "5",
    "tracos": "16",
    "bushu": "60",
    "kanji": "&#34907;",
    "onyomi": "EI/ E",
    "kunyomi": " ",
    "portugues": "defesa, proteção"
  },
  {
    "nivel": "2",
    "tracos": "16",
    "bushu": "147",
    "kanji": "&#35242;",
    "onyomi": "SHIN",
    "kunyomi": "oya/ oya-/ shita(shii)/ shita( shimu)",
    "portugues": "pai, intimidade, parente, familiaridade, crupiê"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "53",
    "kanji": "&#24109;",
    "onyomi": "SEKI",
    "kunyomi": "mushiro",
    "portugues": "assento, esteira, ocasião, lugar"
  },
  {
    "nivel": "3",
    "tracos": "16",
    "bushu": "75",
    "kanji": "&#27211;",
    "onyomi": "KYOU",
    "kunyomi": "hashi",
    "portugues": "ponte"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "96",
    "kanji": "&#26395;",
    "onyomi": "BOU/ MOU",
    "kunyomi": "nozo(já)/ mochi",
    "portugues": "ambição, lua cheia, esperança, desejo, aspirar, esperar"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "30",
    "kanji": "&#21619;",
    "onyomi": "MI",
    "kunyomi": "aji/ aji(wau)",
    "portugues": "sabor, gosto"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "8",
    "kanji": "&#21830;",
    "onyomi": "SHOU",
    "kunyomi": "akina(u)",
    "portugues": "fazer um acordo, vender, comerciante"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "38",
    "kanji": "&#22909;",
    "onyomi": "KOU",
    "kunyomi": "kono(mu)/ su(ku)/ yo(i)/ i(i)",
    "portugues": "apaixonado, agradável, gostar"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "42",
    "kanji": "&#24120;",
    "onyomi": "JOU",
    "kunyomi": "tsune/ toko-",
    "portugues": "regular, normal, comum,usual"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "32",
    "kanji": "&#22522;",
    "onyomi": "KI",
    "kunyomi": "moto/ motoi",
    "portugues": "fundamentais, radicais (Quim.), comtador para máquinas, fundação"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "28",
    "kanji": "&#21442;",
    "onyomi": "SAN/ SHIN",
    "kunyomi": "mai(ru)/ mai-/ majiwaru/ mitsu",
    "portugues": "confuso, visitando, visitar, derrotar, dados, apaixonados"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "140",
    "kanji": "&#33853;",
    "onyomi": "RAKU",
    "kunyomi": "o(chiru)/ o(chi)/ o(tosu)",
    "portugues": "cair, gotejar, descer"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "60",
    "kanji": "&#34899;",
    "onyomi": "JUTSU",
    "kunyomi": "sube",
    "portugues": "arte, técnica, habilidade, meios, truque, recursos, mágica"
  },
  {
    "nivel": "5",
    "tracos": "15",
    "bushu": "112",
    "kanji": "&#30906;",
    "onyomi": "KAKU/ KOU",
    "kunyomi": "tashi(ka)/ tashi(kameru)",
    "portugues": "garantia, firme, sólido, duradouro, apertado, confirmar, limpar, evidente"
  },
  {
    "nivel": "3",
    "tracos": "13",
    "bushu": "61",
    "kanji": "&#24819;",
    "onyomi": "SOU/ SO",
    "kunyomi": "omo(u)",
    "portugues": "conceito, pensar, idéia, pensamento"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "123",
    "kanji": "&#30528;",
    "onyomi": "CHAKU/ JAKU",
    "kunyomi": "ki(ru)/ -gi/ ki(seru)/ -ki(se)/ tsu(ku)/ tsu(keru)",
    "portugues": "vestir, chegar, usar, sufixo para contagem de vestuário"
  },
  {
    "nivel": "3",
    "tracos": "16",
    "bushu": "184",
    "kanji": "&#39208;",
    "onyomi": "KAN",
    "kunyomi": "yakata/ tate",
    "portugues": "edifício, mansão, edifício grande, palácio"
  },
  {
    "nivel": "4",
    "tracos": "3",
    "bushu": "33",
    "kanji": "&#22763;",
    "onyomi": "SHI",
    "kunyomi": " ",
    "portugues": "cavalheiro, samurai"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "75",
    "kanji": "&#26684;",
    "onyomi": "KAKU/ KOU/ KYAKU/ GOU",
    "kunyomi": " ",
    "portugues": "condição, posição, capacidade, caracter, caso (lei, gramática)"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "64",
    "kanji": "&#25552;",
    "onyomi": "TEI/ CHOU/ DAI",
    "kunyomi": "sa(geru)",
    "portugues": "propor, levar junto, carregar na mão"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "7",
    "kanji": "&#20803;",
    "onyomi": "GEN/ GAN",
    "kunyomi": "moto",
    "portugues": "começo, tempo anterior, origem"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "34",
    "kanji": "&#26465;",
    "onyomi": "JOU/ CHOU/ DEKI",
    "kunyomi": "eda/ suji",
    "portugues": "artigo, cláusula, item, listra, camada"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "3",
    "kanji": "&#27714;",
    "onyomi": "KYUU/ GU",
    "kunyomi": "moto(meru)",
    "portugues": "solicitação, desejar, deseja para, requer, demanda"
  },
  {
    "nivel": "3",
    "tracos": "13",
    "bushu": "157",
    "kanji": "&#36335;",
    "onyomi": "RO/ RU",
    "kunyomi": "-ji/ michi",
    "portugues": "caminho, rota, estrada, distância"
  },
  {
    "nivel": "5",
    "tracos": "16",
    "bushu": "159",
    "kanji": "&#36664;",
    "onyomi": "YU/ SHU",
    "kunyomi": " ",
    "portugues": "transportar, enviar, estar inferiorizado"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "64",
    "kanji": "&#25369;",
    "onyomi": "KYO",
    "kunyomi": "a(geru)/ a(garu)/ kozo(ru)",
    "portugues": "levantar, plano, projeto, comportamento, ações"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "72",
    "kanji": "&#26144;",
    "onyomi": "EI",
    "kunyomi": "utsu(ru)/ utsu(su)/ ha(eru)/ -ba(e)",
    "portugues": "reflitir, reflexão, projeção"
  },
  {
    "nivel": "3",
    "tracos": "14",
    "bushu": "167",
    "kanji": "&#37504;",
    "onyomi": "GIN",
    "kunyomi": "shirogane",
    "portugues": "prata"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "19",
    "kanji": "&#21161;",
    "onyomi": "JO",
    "kunyomi": "tasu(keru)/ tasu(karu)/ su(keru)/ suke",
    "portugues": "ajuda, resgate, auxiliar"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "90",
    "kanji": "&#29366;",
    "onyomi": "JOU",
    "kunyomi": " ",
    "portugues": "condicional, condições, circunstâncias, formulário, aparecimento"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "64",
    "kanji": "&#25731;",
    "onyomi": "GEKI",
    "kunyomi": "u(tsu)",
    "portugues": "batida, ataque, derrota, conquista"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "2",
    "kanji": "&#30001;",
    "onyomi": "YU/ YUU/ YUI",
    "kunyomi": "yoshi/ yo(ru)",
    "portugues": "porquanto, por conseguinte, uma razão"
  },
  {
    "nivel": "6",
    "tracos": "18",
    "bushu": "172",
    "kanji": "&#38627;",
    "onyomi": "NAN",
    "kunyomi": "kata(i)/ -gata(i)/ muzuka(shii)/ mudzuka(shii)/ mutsuka(shii)/ -niku(i)",
    "portugues": "impossível, difícil, dificuldade, acidente, defeito"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "156",
    "kanji": "&#36215;",
    "onyomi": "KI",
    "kunyomi": "o(kiru)/ o(koru)/ o(kosu)/ oko(su)/ ta(tsu)",
    "portugues": "despertar, acordar, levantar"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "60",
    "kanji": "&#24453;",
    "onyomi": "TAI",
    "kunyomi": "ma(tsu)/ -ma(chi)",
    "portugues": "esperar, contar com"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "115",
    "kanji": "&#31246;",
    "onyomi": "ZEI",
    "kunyomi": " ",
    "portugues": "imposto, dever"
  },
  {
    "nivel": "5",
    "tracos": "5",
    "bushu": "113",
    "kanji": "&#31034;",
    "onyomi": "JI/ SHI",
    "kunyomi": "shime(su)",
    "portugues": "espetáculo, indicar, apontar, expressar, mostrar"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "183",
    "kanji": "&#39131;",
    "onyomi": "HI",
    "kunyomi": "to(bu)/ to(basu)/ -to(basu)",
    "portugues": "voar, pular (páginas), dispersar"
  },
  {
    "nivel": "3",
    "tracos": "15",
    "bushu": "75",
    "kanji": "&#27178;",
    "onyomi": "OU",
    "kunyomi": "yoko",
    "portugues": "de lado, lado, horizontal, largura, trama (tecidos)"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "18",
    "kanji": "&#21106;",
    "onyomi": "KATSU",
    "kunyomi": "wa(ru)/ wari/ wa(ri)/ wa(reru)/ sa(ku)",
    "portugues": "proporção, comparativamente, divide, corte, separa, parte"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "40",
    "kanji": "&#23475;",
    "onyomi": "GAI",
    "kunyomi": " ",
    "portugues": "dano, injúria"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "162",
    "kanji": "&#36942;",
    "onyomi": "KA",
    "kunyomi": "su(giru)/ -su(giru)/ -su(gi)/ su(gosu)/ ayama(tsu)/ ayama(chi)",
    "portugues": "sobrepujar, exceder, ir além de, erro"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "2",
    "kanji": "&#30003;",
    "onyomi": "SHIN",
    "kunyomi": "mo_(su)/ mo_(shi-)/ saru",
    "portugues": "tem a honra para"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "170",
    "kanji": "&#38542;",
    "onyomi": "KAI",
    "kunyomi": "kizahashi",
    "portugues": "andar de edifícios, grau, sufixo para contagem de  andares de um edifício"
  },
  {
    "nivel": "5",
    "tracos": "15",
    "bushu": "154",
    "kanji": "&#36074;",
    "onyomi": "SHITSU/ SHICHI/ CHI",
    "kunyomi": "tachi/ tada(su)/ moto/ warifu",
    "portugues": "substância, qualidade, matéria, temperamento"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "63",
    "kanji": "&#25144;",
    "onyomi": "KO",
    "kunyomi": "to",
    "portugues": "porta"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "32",
    "kanji": "&#22303;",
    "onyomi": "DO/ TO",
    "kunyomi": "tsuchi",
    "portugues": "solo, terra, chão, Turquia"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "28",
    "kanji": "&#33021;",
    "onyomi": "NOU",
    "kunyomi": "yo(ku)",
    "portugues": "capacidade, talento, habilidade"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "125",
    "kanji": "&#32769;",
    "onyomi": "ROU",
    "kunyomi": "o(iru)/ fu(keru)",
    "portugues": "velho, velhice, envelhecer"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "149",
    "kanji": "&#35342;",
    "onyomi": "TOU",
    "kunyomi": "u(tsu)",
    "portugues": "castigar, atacar, derrotar, destruir, conquistar"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "4",
    "kanji": "&#20853;",
    "onyomi": "HEI/ HYOU",
    "kunyomi": "tsuwamono",
    "portugues": "soldado, particular, tropas, exército, guerra, estratégia, tática"
  },
  {
    "nivel": "6",
    "tracos": "5",
    "bushu": "29",
    "kanji": "&#21454;",
    "onyomi": "SHUU",
    "kunyomi": "osa(meru)/ osa(maru)",
    "portugues": "renda, obter, colheita, pagamento, oferta, loja"
  },
  {
    "nivel": "6",
    "tracos": "5",
    "bushu": "53",
    "kanji": "&#24193;",
    "onyomi": "CHOU/ TEI",
    "kunyomi": "yakusho",
    "portugues": "escritório de governo"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "149",
    "kanji": "&#35430;",
    "onyomi": "SHI",
    "kunyomi": "kokoro(miru)/ tame(su)",
    "portugues": "teste, tentativa, testar, experimento, prova"
  },
  {
    "nivel": "2",
    "tracos": "16",
    "bushu": "151",
    "kanji": "&#38957;",
    "onyomi": "TOU/ ZU/ TO",
    "kunyomi": "atama/ kashira/ -gashira/ kaburi",
    "portugues": "cabeça, sufixo para contagem de animais grandes"
  },
  {
    "nivel": "2",
    "tracos": "12",
    "bushu": "118",
    "kanji": "&#31572;",
    "onyomi": "TOU",
    "kunyomi": "kota(eru)/ kota(e)",
    "portugues": "solução, resposta"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27880;",
    "onyomi": "CHUU",
    "kunyomi": "soso(gu)/ sa(su)/ tsu(gu)",
    "portugues": "derramar, irrigar, verter (lágrimas), desaguar, colocar em(copos), notas, comentário, anotar"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#21629;",
    "onyomi": "MEI/ MYOU",
    "kunyomi": "inochi",
    "portugues": "destino, comando, decreto, vida"
  },
  {
    "nivel": "1",
    "tracos": "8",
    "bushu": "174",
    "kanji": "&#38738;",
    "onyomi": "SEI/ SHOU",
    "kunyomi": "ao/ ao-/ ao(i)",
    "portugues": "verde,azul, imaturo, verde-claro"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "37",
    "kanji": "&#22826;",
    "onyomi": "TAI/ TA",
    "kunyomi": "futo(i)/ futo(ru)",
    "portugues": "gordo, grande, espesso"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "170",
    "kanji": "&#38538;",
    "onyomi": "TAI",
    "kunyomi": " ",
    "portugues": "regimento, partido, companhia, esesquadrão"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "162",
    "kanji": "&#36861;",
    "onyomi": "TSUI",
    "kunyomi": "o(u)",
    "portugues": "caçar, afastar, seguir, perseguir, umquanto isso"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "58",
    "kanji": "&#24112;",
    "onyomi": "KI",
    "kunyomi": "kae(ru)/ kae(su)/ oku(ru)/ totsu(gu)",
    "portugues": "retôrno a casa, chegar em, conduzir-se, resultar"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "40",
    "kanji": "&#23470;",
    "onyomi": "KYUU/ GUU/ KU/ KUU",
    "kunyomi": "miya",
    "portugues": "templo shinto, constelação, palácio, princesa"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "66",
    "kanji": "&#25925;",
    "onyomi": "KO",
    "kunyomi": "yue",
    "portugues": "casualidade, especialmente, intencionalmente, razão, causa, circunstâncias,  portanto, consequentemente"
  },
  {
    "nivel": "4",
    "tracos": "18",
    "bushu": "187",
    "kanji": "&#39443;",
    "onyomi": "KEN/ GEN",
    "kunyomi": "akashi/ shirushi/ tame(su)/ tameshi",
    "portugues": "verificação, efeito, teste"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "149",
    "kanji": "&#35388;",
    "onyomi": "SHOU",
    "kunyomi": "akashi",
    "portugues": "evidência, prova, certificado"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "59",
    "kanji": "&#24418;",
    "onyomi": "KEI/ GYOU",
    "kunyomi": "kata/ -gata/ katachi/ nari",
    "portugues": "forma, formulário, estilo"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "32",
    "kanji": "&#22768;",
    "onyomi": "SEI/ SHOU",
    "kunyomi": "koe/ kowa-",
    "portugues": "voz"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "30",
    "kanji": "&#21942;",
    "onyomi": "EI",
    "kunyomi": "itona(mu)/ itona(mi)",
    "portugues": "ocupação, acampamento, desempenhar, construção, conduta (negócios)"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "123",
    "kanji": "&#32654;",
    "onyomi": "BI/ MI",
    "kunyomi": "utsuku(shii)",
    "portugues": "beleza, bela"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "140",
    "kanji": "&#33509;",
    "onyomi": "JAKU/ NYAKU/ NYA",
    "kunyomi": "waka(i)/ waka-/ mo(shikuwa)/ mo(shi)/ mo(shikuha)",
    "portugues": "jovem, se, talvez, possivelmente, número baixo, imaturo"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "86",
    "kanji": "&#28982;",
    "onyomi": "ZEN/ NEN",
    "kunyomi": "shika/ shika(ri)/ shika(shi)/ sa",
    "portugues": "tipos de objetos, assim, se assim, naquele caso, bem"
  },
  {
    "nivel": "1",
    "tracos": "8",
    "bushu": "75",
    "kanji": "&#26519;",
    "onyomi": "RIN&#12288;",
    "kunyomi": "hayashi",
    "portugues": "bosque, floresta"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "75",
    "kanji": "&#27083;",
    "onyomi": "KOU",
    "kunyomi": "kama(eru)/ kama(u)",
    "portugues": "postura, construção, fingir"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "154",
    "kanji": "&#36000;",
    "onyomi": "FU",
    "kunyomi": "ma(keru)/ ma(kasu)/ o(u)",
    "portugues": "derrotar, negativa, menos, carregar, dever a, assumir uma responsabilidade"
  },
  {
    "nivel": "6",
    "tracos": "15",
    "bushu": "140",
    "kanji": "&#34101;",
    "onyomi": "ZOU/ SOU",
    "kunyomi": "kura/ osa(meru)/ kaku(reru)",
    "portugues": "armazém, esconder, possuir, ter"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "86",
    "kanji": "&#28779;",
    "onyomi": "KA",
    "kunyomi": "hi/ -bi/ ho-",
    "portugues": "fogo"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "70",
    "kanji": "&#26045;",
    "onyomi": "SHI/ SE",
    "kunyomi": "hodoko(su)",
    "portugues": "esmola, aplicar ataduras, adminatração de  1º socorros"
  },
  {
    "nivel": "6",
    "tracos": "14",
    "bushu": "169",
    "kanji": "&#38307;",
    "onyomi": "KAKU",
    "kunyomi": " ",
    "portugues": "torre, edifício alto, palácio"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "85",
    "kanji": "&#27810;",
    "onyomi": "TAKU",
    "kunyomi": "sawa/ usuo(i)/ usuo(su)/ tsuya",
    "portugues": "brejo"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "53",
    "kanji": "&#24215;",
    "onyomi": "TEN",
    "kunyomi": "mise/ tana",
    "portugues": "loja, comércio"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "40",
    "kanji": "&#23481;",
    "onyomi": "YOU",
    "kunyomi": "i(reru)",
    "portugues": "conteúdo, forma, aparência"
  },
  {
    "nivel": "6",
    "tracos": "6",
    "bushu": "40",
    "kanji": "&#23429;",
    "onyomi": "TAKU",
    "kunyomi": " ",
    "portugues": "casa, lar, residência, nossa casa, meu marido"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "1",
    "kanji": "&#22825;",
    "onyomi": "TEN",
    "kunyomi": "amatsu/ ame/ ama-",
    "portugues": "paraíso, ceú, imperiais"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "9",
    "kanji": "&#20685;",
    "onyomi": "DOU/ RYUKU/ RIKI/ ROKU/ RYOKU",
    "kunyomi": "hatara(ku)",
    "portugues": "trabalho"
  },
  {
    "nivel": "2",
    "tracos": "13",
    "bushu": "31",
    "kanji": "&#22290;",
    "onyomi": "EN",
    "kunyomi": "sono",
    "portugues": "parque, jardim, quintal, fazenda"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "115",
    "kanji": "&#31185;",
    "onyomi": "KA",
    "kunyomi": " ",
    "portugues": "departamento, curso, seção"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "104",
    "kanji": "&#30149;",
    "onyomi": "BYOU/ HEI",
    "kunyomi": "ya(mu)/ -ya(mi)/ yamai",
    "portugues": "mal, doente"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "85",
    "kanji": "&#27915;",
    "onyomi": "YOU",
    "kunyomi": " ",
    "portugues": "oceano, estilo ocidental"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "116",
    "kanji": "&#31350;",
    "onyomi": "KYUU/ KU",
    "kunyomi": "kiwa(meru)",
    "portugues": "pesquisa, estudo"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "44",
    "kanji": "&#23637;",
    "onyomi": "TEN",
    "kunyomi": " ",
    "portugues": "desdobrar, expandir"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "86",
    "kanji": "&#29190;",
    "onyomi": "BAKU",
    "kunyomi": "ha(zeru)",
    "portugues": "bomba, explodir, estouro, fender"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "112",
    "kanji": "&#30740;",
    "onyomi": "KEN",
    "kunyomi": "to(gu)",
    "portugues": "polir, estudar, afiar"
  },
  {
    "nivel": "3",
    "tracos": "16",
    "bushu": "77",
    "kanji": "&#25972;",
    "onyomi": "SEI",
    "kunyomi": "totono(eru)/ totono(u)",
    "portugues": "organizar, arranjar, canção, tom, métrica, clave (música)"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "64",
    "kanji": "&#25216;",
    "onyomi": "GI",
    "kunyomi": "waza",
    "portugues": "habilidade, arte, ofício, capacidade, façanha, performance, vocação, artes"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "147",
    "kanji": "&#35215;",
    "onyomi": "KI",
    "kunyomi": " ",
    "portugues": "padrão, medida"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "169",
    "kanji": "&#38272;",
    "onyomi": "MON",
    "kunyomi": "kado/ to",
    "portugues": "portões"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "57",
    "kanji": "&#24373;",
    "onyomi": "CHOU",
    "kunyomi": "ha(ru)/ -ha(ri)/ -ba(ri)",
    "portugues": "alongar, sufixo para contagem de  para arcos & instrumentos de corda, esticar, espalhar, erguer (tenda)"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "38",
    "kanji": "&#22987;",
    "onyomi": "SHI",
    "kunyomi": "haji(meru)/ -haji(meru)/ haji(maru)",
    "portugues": "iniciar, começar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "162",
    "kanji": "&#36949;",
    "onyomi": "I",
    "kunyomi": "chiga(u)/ chiga(i)/ chiga(eru)/ -chiga(eru)/ taga(u)/ taga(eru)",
    "portugues": "diferença, diferir"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "42",
    "kanji": "&#20809;",
    "onyomi": "KOU",
    "kunyomi": "hika(ru)/ hikari",
    "portugues": "raio, luz"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "170",
    "kanji": "&#38480;",
    "onyomi": "GEN",
    "kunyomi": "kagi(ru)/ kagi(ri)/ -kagi(ri)",
    "portugues": "limite, restringir, o melhor possível"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20301;",
    "onyomi": "I",
    "kunyomi": "kurai/ gurai",
    "portugues": "posição, grau, trono, coroa, sobre, alguma"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "175",
    "kanji": "&#38750;",
    "onyomi": "HI",
    "kunyomi": "ara(zu)",
    "portugues": "prefixo negativo in-, erro, negativa, injustiça"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "53",
    "kanji": "&#24540;",
    "onyomi": "OU/ -NOU/ YOU",
    "kunyomi": "ata(ru)/ masani/ kota(eru)",
    "portugues": "candidatar-se, resposta, sim, OK, resposta, aceitar"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28207;",
    "onyomi": "KOU",
    "kunyomi": "minato",
    "portugues": "porto (navios)"
  },
  {
    "nivel": "8",
    "tracos": "3",
    "bushu": "1",
    "kanji": "&#19982;",
    "onyomi": "YO",
    "kunyomi": "ata(eru)/ azuka(ru)/ kumi(suru)/ tomoni",
    "portugues": "conferir, participar em, prêmio, dar, fornecer, causa, presente, dádiva"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20309;",
    "onyomi": "KA",
    "kunyomi": "nani/ nan/ nani-/ nan-",
    "portugues": "que"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20225;",
    "onyomi": "KI",
    "kunyomi": "kuwada(teru)",
    "portugues": "empreenda, esquema, projeto, tentativa, plano"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "69",
    "kanji": "&#26029;",
    "onyomi": "DAN",
    "kunyomi": "ta(tsu)/ kotowa(ru)/ sada(meru)",
    "portugues": "desligamento, decadência, recusa, pedir desculpas, avisar, despedir, proíbir, decisão, julgamento, incisivo"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "78",
    "kanji": "&#27531;",
    "onyomi": "ZAN/ SAN",
    "kunyomi": "noko(ru)/ noko(su)/ sokona(u)/ noko(ri)",
    "portugues": "restante, restos, balança"
  },
  {
    "nivel": "4",
    "tracos": "18",
    "bushu": "147",
    "kanji": "&#35251;",
    "onyomi": "KAN",
    "kunyomi": "mi(ru)/ shime(su)",
    "portugues": "perspectiva, olhar, aparecimento, condição, visão"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "140",
    "kanji": "&#33865;",
    "onyomi": "YOU",
    "kunyomi": "ha",
    "portugues": "folha, avião, ponta, agulha, lâmina, lança, sufixo p/ contagem de coisas chatas"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "48",
    "kanji": "&#24038;",
    "onyomi": "SA/ SHA",
    "kunyomi": "hidari",
    "portugues": "esquerda"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "122",
    "kanji": "&#32626;",
    "onyomi": "SHO",
    "kunyomi": " ",
    "portugues": "assinatura, escritório do govêrno, estação de polícia"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "162",
    "kanji": "&#36913;",
    "onyomi": "SHUU",
    "kunyomi": " ",
    "portugues": "semana"
  },
  {
    "nivel": "6",
    "tracos": "17",
    "bushu": "9",
    "kanji": "&#20778;",
    "onyomi": "YUU/ U",
    "kunyomi": "yasa(shii)/ sugu(reru)/ macom(ru)",
    "portugues": "ternura, superar, superação, ator, superioridade, gentileza"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "137",
    "kanji": "&#33322;",
    "onyomi": "KOU",
    "kunyomi": " ",
    "portugues": "navegar, vela, travessia, voar (de avião)"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "113",
    "kanji": "&#35222;",
    "onyomi": "SHI",
    "kunyomi": "mi(ru)",
    "portugues": "inspeção, avaliar, ver, olhar"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "30",
    "kanji": "&#21495;",
    "onyomi": "GOU",
    "kunyomi": "sake(bu)/ yobina",
    "portugues": "apelido, número, item, título, pseudonimo, nome, chamada"
  },
  {
    "nivel": "1",
    "tracos": "9",
    "bushu": "180",
    "kanji": "&#38899;",
    "onyomi": "ON/ -NON/ IN",
    "kunyomi": "oto/ ne",
    "portugues": "som, barulho"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "24",
    "kanji": "&#35009;",
    "onyomi": "SAI",
    "kunyomi": "ta(tsu)/ saba(ku)",
    "portugues": "alfaiate, juiz, decisão, paradigma"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "40",
    "kanji": "&#23460;",
    "onyomi": "SHITSU",
    "kunyomi": "muro",
    "portugues": "quarto, apartamento, câmara, estufa, porão"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "32",
    "kanji": "&#22411;",
    "onyomi": "KEI",
    "kunyomi": "kata/ -gata",
    "portugues": "bolor, tipo, modelo"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "145",
    "kanji": "&#35069;",
    "onyomi": "SEI",
    "kunyomi": " ",
    "portugues": "feito em..., manufaturado"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "139",
    "kanji": "&#33394;",
    "onyomi": "SHOKU/ SHIKI",
    "kunyomi": "iro",
    "portugues": "cor"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "9",
    "kanji": "&#20182;",
    "onyomi": "TA",
    "kunyomi": "hoka",
    "portugues": "outro, outrem, os outros"
  },
  {
    "nivel": "3",
    "tracos": "13",
    "bushu": "113",
    "kanji": "&#31119;",
    "onyomi": "FUKU",
    "kunyomi": " ",
    "portugues": "benção, fortuna, sorte, riqueza"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#20379;",
    "onyomi": "KYOU/ KU/ KUU/ GU",
    "kunyomi": "sona(eru)/ tomo/ -domo",
    "portugues": "submeter, oferecer, presentear, servir (refeição), acompanhar"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "94",
    "kanji": "&#29420;",
    "onyomi": "DOKU/ TOKU",
    "kunyomi": "hito(ri)",
    "portugues": "solteiro, só, espontaneamente, Alemanha"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "1",
    "kanji": "&#24746;",
    "onyomi": "AKU/ O",
    "kunyomi": "waru(i)/ waru-/ a(shi)/ niku(i)/ -niku(i)/ a_/ izukuni/ izukunzo/ niku(mu)",
    "portugues": "mal, ruim, falso, mau, errado"
  },
  {
    "nivel": "4",
    "tracos": "16",
    "bushu": "167",
    "kanji": "&#37682;",
    "onyomi": "ROKU",
    "kunyomi": " ",
    "portugues": "gravar"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "145",
    "kanji": "&#35036;",
    "onyomi": "HO",
    "kunyomi": "ogina(u)",
    "portugues": "suplemento, oferta, cumprir, indenizar, compensar, assistente, aprendiz"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "9",
    "kanji": "&#20181;",
    "onyomi": "SHI/ JI",
    "kunyomi": "tsuka(eru)",
    "portugues": "atender, ação, oficial, servir"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#24565;",
    "onyomi": "NEN",
    "kunyomi": " ",
    "portugues": "desejo, sentido, idéia, pensamento, sentimento, atenção"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "30",
    "kanji": "&#21491;",
    "onyomi": "U/ YUU",
    "kunyomi": "migi",
    "portugues": "direita"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "2",
    "kanji": "&#24107;",
    "onyomi": "SHI",
    "kunyomi": " ",
    "portugues": "perito, professor, mestre, exército, guerra"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "115",
    "kanji": "&#31243;",
    "onyomi": "TEI",
    "kunyomi": "hodo/ -hodo",
    "portugues": "extensão, grau, lei, fórmula, distância, limites, quantia"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20302;",
    "onyomi": "TEI",
    "kunyomi": "hiku(i)/ hiku(meru)/ hiku(maru)",
    "portugues": "abaixe, humilde, curto"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "162",
    "kanji": "&#36896;",
    "onyomi": "ZOU",
    "kunyomi": "tsuku(ru)/ tsuku(ri)/ -dzuku(ri)",
    "portugues": "criar, fazer, estrutura, psique"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "4",
    "kanji": "&#22833;",
    "onyomi": "SHITSU",
    "kunyomi": "ushina(u)/ u(seru)",
    "portugues": "erro, falta, desvantagem, perda"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "60",
    "kanji": "&#24444;",
    "onyomi": "HI",
    "kunyomi": "kare/ kano/ ka(no)",
    "portugues": "ele, que, o"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "140",
    "kanji": "&#33521;",
    "onyomi": "EI",
    "kunyomi": "hanabusa",
    "portugues": "Inglaterra, inglês"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20253;",
    "onyomi": "DEN",
    "kunyomi": "tsuta(waru)/ tsuta(eru)/ tsuta(u)/ -dzuta(i)/ tsute",
    "portugues": "transmitir, progredir, andar ao longo, seguir, relatório, comunicar, lenda, tradição"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28187;",
    "onyomi": "GEN",
    "kunyomi": "he(ru)/ he(rasu)",
    "portugues": "definhar, decréscimo, reduzir, decadência, encurtar, obter, com fome"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "149",
    "kanji": "&#35413;",
    "onyomi": "HYOU",
    "kunyomi": " ",
    "portugues": "avaliar, críticar, comentário, crítica"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "4",
    "kanji": "&#26411;",
    "onyomi": "MATSU/ BATSU",
    "kunyomi": "sue",
    "portugues": "não ainda, fim, fechar, dica, pó, posteridade"
  },
  {
    "nivel": "4",
    "tracos": "14",
    "bushu": "115",
    "kanji": "&#31278;",
    "onyomi": "SHU",
    "kunyomi": "tane/ -gusa",
    "portugues": "espécie, tipo, classe, variedade, cepa"
  },
  {
    "nivel": "5",
    "tracos": "5",
    "bushu": "1",
    "kanji": "&#21487;",
    "onyomi": "KA/ KOKU",
    "kunyomi": "-be(ki)/ -be(shi)",
    "portugues": "aceitável, não deve não, faz"
  },
  {
    "nivel": "5",
    "tracos": "15",
    "bushu": "41",
    "kanji": "&#23566;",
    "onyomi": "DOU",
    "kunyomi": "michibi(ku)",
    "portugues": "orientação, conduzindo, conduta, organizador"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "46",
    "kanji": "&#23822;",
    "onyomi": "KI",
    "kunyomi": "saki/ sai/ misaki",
    "portugues": "promontorio, cabo, ponta"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#20363;",
    "onyomi": "REI",
    "kunyomi": "tato(eru)",
    "portugues": "exemplo, costume, uso, precedente"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "154",
    "kanji": "&#25943;",
    "onyomi": "HAI",
    "kunyomi": "yabu(reru)",
    "portugues": "falha, derrota, mudança na sorte"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "149",
    "kanji": "&#35370;",
    "onyomi": "HOU",
    "kunyomi": "otozu(reru)/ tazu(neru)/ to(u)",
    "portugues": "invocar, visitar, melhorar, oferecer simpatia"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "143",
    "kanji": "&#34886;",
    "onyomi": "SHUU/ SHU",
    "kunyomi": "oo(i)",
    "portugues": "massas, grandes números, multidão, população"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "1",
    "kanji": "&#27494;",
    "onyomi": "BU/ MU",
    "kunyomi": "take(shi)",
    "portugues": "guerreiro, militar, cavalaria, armas"
  },
  {
    "nivel": "2",
    "tracos": "14",
    "bushu": "76",
    "kanji": "&#27468;",
    "onyomi": "KA",
    "kunyomi": "uta/ uta(u)",
    "portugues": "canção, cantar"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "75",
    "kanji": "&#26681;",
    "onyomi": "KON",
    "kunyomi": "ne/ -ne",
    "portugues": "raiz, radical, verruga"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "32",
    "kanji": "&#21513;",
    "onyomi": "KICHI/ KITSU",
    "kunyomi": "yoshi",
    "portugues": "boa sorte, prazer, congratulações"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "72",
    "kanji": "&#26149;",
    "onyomi": "SHUN",
    "kunyomi": "haru",
    "portugues": "primaveril, primavera (estação)"
  },
  {
    "nivel": "5",
    "tracos": "4",
    "bushu": "81",
    "kanji": "&#27604;",
    "onyomi": "HI",
    "kunyomi": "kura(beru)",
    "portugues": "comparar, corrida, razão, Phillipines"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "90",
    "kanji": "&#23558;",
    "onyomi": "SHOU/ SOU",
    "kunyomi": "masa(ni)/ hata/ masa/ hikii(ru)/ motte",
    "portugues": "líder, comandante, general, almirante, ou, e outra vez, logo, de agora em diante, somente sobre isto"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "120",
    "kanji": "&#32025;",
    "onyomi": "SHI",
    "kunyomi": "kami",
    "portugues": "papel"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "162",
    "kanji": "&#36948;",
    "onyomi": "TATSU/ DA",
    "kunyomi": "-tachi",
    "portugues": "efetuar, alcançar, chegar, atingir"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "152",
    "kanji": "&#35937;",
    "onyomi": "SHOU/ ZOU",
    "kunyomi": "katado(ru)",
    "portugues": "elefante, modelar, imitar, imagem, forma, sinal (dos tempos)"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "167",
    "kanji": "&#37341;",
    "onyomi": "SHIN",
    "kunyomi": "hari",
    "portugues": "agulha, alfinete, grampo, o que pica"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "40",
    "kanji": "&#23432;",
    "onyomi": "SHU/ SU",
    "kunyomi": "mamo(ru)/ mamo(ri)/ mori/ -mori/ kami",
    "portugues": "vigia, protege, defende, obedece"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "40",
    "kanji": "&#23492;",
    "onyomi": "KI",
    "kunyomi": "yo(ru)/ -yo(ri)/ yo(seru)",
    "portugues": "aproximar, aproximar, juntar, colecionar, enviar, adiantar"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28145;",
    "onyomi": "SHIN",
    "kunyomi": "fuka(i)/ -buka(i)/ fuka(maru)/ fuka(meru)/ mi-",
    "portugues": "fundo, aumentar, intensificar, fortalecer"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "80",
    "kanji": "&#27598;",
    "onyomi": "MAI",
    "kunyomi": "goto/ -goto(ni)",
    "portugues": "todo"
  },
  {
    "nivel": "4",
    "tracos": "15",
    "bushu": "149",
    "kanji": "&#35506;",
    "onyomi": "KA",
    "kunyomi": " ",
    "portugues": "capítulo, lição, seção, departamento, divisão, sufixo para contagem de  capítulos (de um livro)"
  },
  {
    "nivel": "1",
    "tracos": "7",
    "bushu": "155",
    "kanji": "&#36196;",
    "onyomi": "SEKI/ SHAKU",
    "kunyomi": "aka/ aka-/ aka(i)/ aka(ramu)/ aka(rameru)",
    "portugues": "vermelho"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "38",
    "kanji": "&#23142;",
    "onyomi": "FU",
    "kunyomi": " ",
    "portugues": "dama, mulher, esposa, noiva"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "8",
    "kanji": "&#29575;",
    "onyomi": "SOTSU/ RITSU/ SHUTSU",
    "kunyomi": "hiki(iru)",
    "portugues": "razão, valor, proporção, %, coeficiente, fator"
  },
  {
    "nivel": "2",
    "tracos": "14",
    "bushu": "149",
    "kanji": "&#35501;",
    "onyomi": "DOKU/ TOKU/ TOU",
    "kunyomi": "yo(mu)/ -yo(mi)",
    "portugues": "leia"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "80",
    "kanji": "&#27597;",
    "onyomi": "BO",
    "kunyomi": "haha/ mo",
    "portugues": "mãe, materno"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "2",
    "kanji": "&#24030;",
    "onyomi": "SHUU/ SU",
    "kunyomi": "su",
    "portugues": "estado, província"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "75",
    "kanji": "&#26680;",
    "onyomi": "KAKU",
    "kunyomi": " ",
    "portugues": "núcleo, centro, cerne"
  },
  {
    "nivel": "2",
    "tracos": "18",
    "bushu": "181",
    "kanji": "&#38996;",
    "onyomi": "GAN",
    "kunyomi": "kao",
    "portugues": "rosto, expressão"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "116",
    "kanji": "&#31361;",
    "onyomi": "TOTSU/ KA",
    "kunyomi": "tsu(ku)",
    "portugues": "apunhalar, perfurar, empurrar, empurrão, furar, perfurar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "64",
    "kanji": "&#25588;",
    "onyomi": "EN",
    "kunyomi": " ",
    "portugues": "encorajar, ajudar, salvar"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "24",
    "kanji": "&#28310;",
    "onyomi": "JUN",
    "kunyomi": "jun(jiru)/ jun(zuru)/ nazora(eru)/ nori/ hito(shii)/ mizumori",
    "portugues": "semi-, corresponder-se, proporcional para, adaptar-se, imitar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "77",
    "kanji": "&#27507;",
    "onyomi": "SAI/ SEI",
    "kunyomi": "toshi/ tose/ yowai",
    "portugues": "Fim de ano, idade, ocasião, oportunidade"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "156",
    "kanji": "&#36234;",
    "onyomi": "ETSU/ OTSU",
    "kunyomi": "ko(su)/ -ko(su)/ -go(shi)/ ko(eru)/ -go(e)",
    "portugues": "superar, exceder, Vietnã"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25276;",
    "onyomi": "OU",
    "kunyomi": "o(su)/ o(shi-)/ o(t--)/ o(saeru)/ osa(eru)",
    "portugues": "empurrar, parada, checar, subjugar, anexar, prender, peso, empurrar, imprensa, carimbo, fazer apesar de"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "87",
    "kanji": "&#24859;",
    "onyomi": "AI",
    "kunyomi": "ito(shii)",
    "portugues": "amor, afeição, favorito"
  },
  {
    "nivel": "5",
    "tracos": "18",
    "bushu": "181",
    "kanji": "&#38989;",
    "onyomi": "GAKU",
    "kunyomi": "hitai",
    "portugues": "testa, tablete, placa, quadro emoldurado, soma, quantia, volume"
  },
  {
    "nivel": "4",
    "tracos": "14",
    "bushu": "118",
    "kanji": "&#31649;",
    "onyomi": "KAN",
    "kunyomi": "kuda",
    "portugues": "flauta, tubo, instrumento de sopro, conversa de bêbados"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "154",
    "kanji": "&#36001;",
    "onyomi": "ZAI/ SAI/ ZOKU",
    "kunyomi": " ",
    "portugues": "propriedade, dinheiro, riqueza, bens"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "40",
    "kanji": "&#23458;",
    "onyomi": "KYAKU/ KAKU",
    "kunyomi": " ",
    "portugues": "convidado, visitante, cliente"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "162",
    "kanji": "&#36820;",
    "onyomi": "HEN",
    "kunyomi": "kae(su)/ -kae(su)/ kae(ru)/ -kae(ru)",
    "portugues": "retornar, responder, desvanecer, pagar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "48",
    "kanji": "&#25915;",
    "onyomi": "KOU",
    "kunyomi": "se(meru)",
    "portugues": "agressão, ataque"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "187",
    "kanji": "&#39340;",
    "onyomi": "BA",
    "kunyomi": "uma/ uma-/ ma",
    "portugues": "cavalo"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25480;",
    "onyomi": "JU",
    "kunyomi": "sazu(keru)/ sazu(karu)",
    "portugues": "comunicar, instruir, bolsa, conferir"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "38",
    "kanji": "&#23039;",
    "onyomi": "SHI",
    "kunyomi": "sugata",
    "portugues": "figura, formulário, forma"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "102",
    "kanji": "&#22593;",
    "onyomi": "RUI/ RAI/ SUI",
    "kunyomi": "toride",
    "portugues": "fundamentos, base, proteção, paredes, basebol"
  },
  {
    "nivel": "6",
    "tracos": "14",
    "bushu": "21",
    "kanji": "&#30097;",
    "onyomi": "GI",
    "kunyomi": "utaga(u)",
    "portugues": "dúvida, desconfiança, é suspeito, pergunta"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "72",
    "kanji": "&#37327;",
    "onyomi": "RYOU",
    "kunyomi": "haka(ru)",
    "portugues": "quantidade, medida, peso, quantia"
  },
  {
    "nivel": "4",
    "tracos": "16",
    "bushu": "115",
    "kanji": "&#31309;",
    "onyomi": "SEKI",
    "kunyomi": "tsu(mu)/ -dzu(mi)/ tsu(moru)/ tsu(mori)",
    "portugues": "volume, produto (x*y), terras, comteúdos, empilhar, pilha, carga, acumular"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "2",
    "kanji": "&#22830;",
    "onyomi": "OU",
    "kunyomi": " ",
    "portugues": "centro, médio"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "22",
    "kanji": "&#21307;",
    "onyomi": "I",
    "kunyomi": "I(yasu)/ I(suru)/ kusushi",
    "portugues": "doutor, remédio"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "85",
    "kanji": "&#27743;",
    "onyomi": "KOU",
    "kunyomi": "e",
    "portugues": "riacho, pequena baía em lagos, baía"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "79",
    "kanji": "&#27578;",
    "onyomi": "SATSU/ SAI/ SETSU",
    "kunyomi": "koro(su)/ -goro(shi)/ so(gu)",
    "portugues": "matar, assassinato, açougueiro, fatiar, partir, diminuir, reduzir, corromper"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "14",
    "kanji": "&#20889;",
    "onyomi": "SHA/ JA",
    "kunyomi": "utsu(su)/ utsu(ru)/ utsu-/ utsu(shi)",
    "portugues": "cópia, foto, descrever"
  },
  {
    "nivel": "4",
    "tracos": "15",
    "bushu": "30",
    "kanji": "&#22120;",
    "onyomi": "KI",
    "kunyomi": "utsuwa",
    "portugues": "utensilio, vasol, receptaculo, implementar, instrumento, capacidade, recipiente, ferramenta, conjunto"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "96",
    "kanji": "&#29579;",
    "onyomi": "OU/ -NOU",
    "kunyomi": " ",
    "portugues": "rei, regra, magnata, governo"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "85",
    "kanji": "&#27996;",
    "onyomi": "HIN",
    "kunyomi": "hama",
    "portugues": "praia, costa"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "120",
    "kanji": "&#32102;",
    "onyomi": "KYUU",
    "kunyomi": "tama(u)/ tamo(u)/ -tama(e)",
    "portugues": "salário, pagamento, presente, permitir, bolsa, prover"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "40",
    "kanji": "&#23436;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "perfeito, acabamento, fim"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "140",
    "kanji": "&#33510;",
    "onyomi": "KU",
    "kunyomi": "kuru(shii)/ -guru(shii)/ kuru(shimu)/ kuru(shimeru)/ niga(i)/ niga(ru)",
    "portugues": "sofrimento, experiência, preocupar, dificuldade, sentir-se amargo, tristeza"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "66",
    "kanji": "&#25955;",
    "onyomi": "SAN",
    "kunyomi": "chi(ru)/ chi(rasu)/ -chi(rasu)/ chi(rakasu)/ chi(rakaru)/ bara",
    "portugues": "dispersar, espalhar, gastar, dissipar"
  },
  {
    "nivel": "3",
    "tracos": "14",
    "bushu": "75",
    "kanji": "&#27096;",
    "onyomi": "YOU/ SHOU",
    "kunyomi": "sama",
    "portugues": "senhor, estilo, modos,sufixo polido para senhor."
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "137",
    "kanji": "&#33324;",
    "onyomi": "HAN",
    "kunyomi": " ",
    "portugues": "carregador, carregar, todo"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "60",
    "kanji": "&#24489;",
    "onyomi": "FUKU",
    "kunyomi": "mata",
    "portugues": "restaurar, retornar, reverter, recomeçar"
  },
  {
    "nivel": "4",
    "tracos": "20",
    "bushu": "117",
    "kanji": "&#31478;",
    "onyomi": "KYOU/ KEI",
    "kunyomi": "kiso(u)/ se(ru)",
    "portugues": "imitar, competir com, oferta, vender em leilão, disputa, competição, corrida"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20491;",
    "onyomi": "KO/ KA",
    "kunyomi": " ",
    "portugues": "indivíduo, sufixo para contagem de  para artigos"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25509;",
    "onyomi": "SETSU/ SHOU",
    "kunyomi": "tsu(gu)",
    "portugues": "tocar, contato, juntar, pedir juntamente"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "40",
    "kanji": "&#23487;",
    "onyomi": "SHUKU",
    "kunyomi": "yado/ yado(ru)/ yado(su)",
    "portugues": "pousada, alojamento, estação de retransmissor, moradia,estar grávida, casa, residência"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28288;",
    "onyomi": "MAN/ BAN",
    "kunyomi": "mi(chiru)/ mi(tsu)/ mi(tasu)",
    "portugues": "cheio, bastante, orgulho, satisfaz"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "138",
    "kanji": "&#33391;",
    "onyomi": "RYOU",
    "kunyomi": "yo(i)/ -yo(i)/ I(i)/ -I(i)",
    "portugues": "bom, agradável, hábil"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "41",
    "kanji": "&#23554;",
    "onyomi": "SEN",
    "kunyomi": "moppa(ra)",
    "portugues": "exclusividade, exclusivo, principalmente, somente"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "29",
    "kanji": "&#21451;",
    "onyomi": "YUU",
    "kunyomi": "tomo",
    "portugues": "amigo"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "10",
    "kanji": "&#20816;",
    "onyomi": "JI/ NI/ GEI",
    "kunyomi": "ko/ -ko/ -kko",
    "portugues": "recém-nascido, criança, filhote"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "3",
    "kanji": "&#21336;",
    "onyomi": "TAN",
    "kunyomi": "hitoe",
    "portugues": "simples, um, solteiro, meramente"
  },
  {
    "nivel": "6",
    "tracos": "15",
    "bushu": "149",
    "kanji": "&#35576;",
    "onyomi": "SHO",
    "kunyomi": "moro",
    "portugues": "vários, muitos, vários, juntamente"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "109",
    "kanji": "&#20855;",
    "onyomi": "GU",
    "kunyomi": "sona(eru)/ tsubusa(ni)",
    "portugues": "ferramenta, utensílio, meios, posses, ingredientes, sufixo para contagem de armaduras, coleção,  mobília"
  },
  {
    "nivel": "6",
    "tracos": "16",
    "bushu": "85",
    "kanji": "&#28608;",
    "onyomi": "GEKI",
    "kunyomi": "hage(shii)",
    "portugues": "violento, obtem excitado, enraged, chafe, incita"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "105",
    "kanji": "&#30331;",
    "onyomi": "TOU/ TO/ DOU/ SHOU/ CHOU",
    "kunyomi": "nobo(ru)/ a(garu)",
    "portugues": "subir, escalar"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "32",
    "kanji": "&#21435;",
    "onyomi": "KYO/ KO",
    "kunyomi": "mu(ru)/ -mu(ru)",
    "portugues": "foi, passado, deixar, passar, eliminar, divórcio"
  },
  {
    "nivel": "1",
    "tracos": "12",
    "bushu": "75",
    "kanji": "&#26862;",
    "onyomi": "SHIN",
    "kunyomi": "mori",
    "portugues": "floresta, mata"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "72",
    "kanji": "&#26157;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "brilhar, brilhante"
  },
  {
    "nivel": "5",
    "tracos": "20",
    "bushu": "149",
    "kanji": "&#35703;",
    "onyomi": "GO",
    "kunyomi": "mamo(ru)/ ka(wasu)/ kawa(su)/ komogomo",
    "portugues": "salvaguardar, proteger"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "53",
    "kanji": "&#24237;",
    "onyomi": "TEI",
    "kunyomi": "niwa",
    "portugues": "jardim, quintal"
  },
  {
    "nivel": "5",
    "tracos": "5",
    "bushu": "27",
    "kanji": "&#22311;",
    "onyomi": "ATSU/ EN/ OU",
    "kunyomi": "o(su)/ he(su)/ osa(eru)",
    "portugues": "pressão, empurrar, inundar, oprimir, dominar"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "120",
    "kanji": "&#32026;",
    "onyomi": "KYUU",
    "kunyomi": " ",
    "portugues": "classe, posição, grau"
  },
  {
    "nivel": "1",
    "tracos": "7",
    "bushu": "140",
    "kanji": "&#33457;",
    "onyomi": "KA/ KE",
    "kunyomi": "hana",
    "portugues": "flor"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "162",
    "kanji": "&#36864;",
    "onyomi": "TAI",
    "kunyomi": "shirizo(ku)/ shirizo(keru)/ hi(ku)/ no(ku)/ no(keru)/ do(ku)",
    "portugues": "retirada, sacar, retirar, pedir demissão, repelir, expelir, rejeitar"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "64",
    "kanji": "&#25429;",
    "onyomi": "HO",
    "kunyomi": "to(raeru)/ to(rawareru)/ to(ru)/ tora(eru)/ tora(wareru)/ tsuka(maeru)/ tsuka(maru)",
    "portugues": "pegar, capturar"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "70",
    "kanji": "&#26063;",
    "onyomi": "ZOKU",
    "kunyomi": " ",
    "portugues": "tribo, família"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "172",
    "kanji": "&#38626;",
    "onyomi": "RI",
    "kunyomi": "hana(reru)/ hana(su)",
    "portugues": "separar, separação, digressão, divagação"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27874;",
    "onyomi": "HA",
    "kunyomi": "nami",
    "portugues": "ondas, vagas, Polônia"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "30",
    "kanji": "&#21628;",
    "onyomi": "KO",
    "kunyomi": "yo(bu)",
    "portugues": "chamada, chamar para, convidar"
  },
  {
    "nivel": "6",
    "tracos": "15",
    "bushu": "4",
    "kanji": "&#21127;",
    "onyomi": "GEKI",
    "kunyomi": " ",
    "portugues": "drama, jogo"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "170",
    "kanji": "&#38520;",
    "onyomi": "RIKU/ ROKU",
    "kunyomi": "oka",
    "portugues": "terra"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "123",
    "kanji": "&#24046;",
    "onyomi": "SA",
    "kunyomi": "sa(su)/ sa(shi)",
    "portugues": "distinção, diferença, variação, discrepancia, margem, equilíbrio"
  },
  {
    "nivel": "3",
    "tracos": "14",
    "bushu": "187",
    "kanji": "&#39365;",
    "onyomi": "EKI",
    "kunyomi": " ",
    "portugues": "estação"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "115",
    "kanji": "&#31179;",
    "onyomi": "SHUU",
    "kunyomi": "aki/ toki",
    "portugues": "outono"
  },
  {
    "nivel": "5",
    "tracos": "6",
    "bushu": "31",
    "kanji": "&#22240;",
    "onyomi": "IN",
    "kunyomi": "yo(ru)/ China(mu)",
    "portugues": "causa, fator, seja associado com, contar com, ser limitado para"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "172",
    "kanji": "&#38596;",
    "onyomi": "YUU",
    "kunyomi": "o-/ osu/ on",
    "portugues": "masculino, másculo, herói, líder, superioridade, excelência"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28193;",
    "onyomi": "TO",
    "kunyomi": "wata(ru)/ -wata(ru)/ wata(su)",
    "portugues": "transito, vau, balsa, cruzar, importar, entregar, diâmetro, emigrar"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "12",
    "kanji": "&#21892;",
    "onyomi": "ZEN",
    "kunyomi": "yo(i)/ i(i)/ yo(ku)/ yoshi(tosuru)",
    "portugues": "bom,virtuoso, bondade"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "169",
    "kanji": "&#38360;",
    "onyomi": "TOU",
    "kunyomi": "tataka(u)/ araso(u)",
    "portugues": "luta, guerra"
  },
  {
    "nivel": "5",
    "tracos": "19",
    "bushu": "149",
    "kanji": "&#35672;",
    "onyomi": "SHIKI",
    "kunyomi": " ",
    "portugues": "discriminação, saber, escrever"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "18",
    "kanji": "&#21103;",
    "onyomi": "FUKU",
    "kunyomi": " ",
    "portugues": "vice-, duplicar, cópia"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "18",
    "kanji": "&#21048;",
    "onyomi": "KEN",
    "kunyomi": " ",
    "portugues": "bilhete"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "59",
    "kanji": "&#24433;",
    "onyomi": "EI",
    "kunyomi": "kage",
    "portugues": "sombra, silhueta, fantasma"
  },
  {
    "nivel": "1",
    "tracos": "8",
    "bushu": "173",
    "kanji": "&#38632;",
    "onyomi": "U",
    "kunyomi": "ame/ ama-/ -same",
    "portugues": "chuva"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "75",
    "kanji": "&#26997;",
    "onyomi": "KYOKU/ GOKU",
    "kunyomi": "kiwa(meru)/ kiwa(maru)/ kiwa(mari)/ kiwa(mi)/ ki(meru)/ -gi(me)/ ki(maru)",
    "portugues": "postes, acordo, conclusão, fim, a mais alta posição, postes elétricos, muitos, extremamente, maior, altamente, 10 elevado a48"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "108",
    "kanji": "&#30435;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "fiscalizar, oficial, escritório do govêrno, governar, administrar"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "75",
    "kanji": "&#26448;",
    "onyomi": "ZAI",
    "kunyomi": " ",
    "portugues": "tábuas, registro, pau, madeira, talento"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "112",
    "kanji": "&#30772;",
    "onyomi": "HA",
    "kunyomi": "yabu(ru)/ yabu(reru)",
    "portugues": "arrancar, rasgar, lágrima, quebrar, destruir, derrotar, frustrar"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27841;",
    "onyomi": "KYOU",
    "kunyomi": "mashi(te)/ iwa(n'ya)/ omomuki",
    "portugues": "condição, situação"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "2",
    "kanji": "&#26354;",
    "onyomi": "KYOKU",
    "kunyomi": "ma(garu)/ ma(geru)",
    "portugues": "tender, música, melodia, composição, prazer, injustiça, falta, curva, tortuoso, perverso, inclinar"
  },
  {
    "nivel": "8",
    "tracos": "20",
    "bushu": "180",
    "kanji": "&#38911;",
    "onyomi": "KYOU",
    "kunyomi": "hibi(ku)",
    "portugues": "eco, som, ressoar, argola, vibrar"
  },
  {
    "nivel": "5",
    "tracos": "4",
    "bushu": "9",
    "kanji": "&#20175;",
    "onyomi": "BUTSU/ FUTSU",
    "kunyomi": "hotoke",
    "portugues": "Buddha, o morto, França"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "64",
    "kanji": "&#25436;",
    "onyomi": "SOU/ SHU/ SHUU",
    "kunyomi": "saga(su)",
    "portugues": "pesquisar, esperar, localizar"
  },
  {
    "nivel": "5",
    "tracos": "15",
    "bushu": "120",
    "kanji": "&#32232;",
    "onyomi": "HEN",
    "kunyomi": "a(mu)/ -a(mi)",
    "portugues": "acumulo, tricotar, trançar, trança, torcer, editar, poema completo, divisão de um livro"
  },
  {
    "nivel": "4",
    "tracos": "15",
    "bushu": "42",
    "kanji": "&#36062;",
    "onyomi": "SHOU",
    "kunyomi": "ho(meru)",
    "portugues": "prêmio, recompensa, elogio"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "70",
    "kanji": "&#26053;",
    "onyomi": "RYO",
    "kunyomi": "tabi",
    "portugues": "viagem, jornada"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "32",
    "kanji": "&#22495;",
    "onyomi": "IKI",
    "kunyomi": " ",
    "portugues": "série, região, limites, estágio, nível"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "2",
    "kanji": "&#21490;",
    "onyomi": "SHI",
    "kunyomi": " ",
    "portugues": "história, crônica"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "53",
    "kanji": "&#24231;",
    "onyomi": "ZA",
    "kunyomi": "suwa(ru)",
    "portugues": "agachar, assento, almofada, reunião, sentar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#21547;",
    "onyomi": "GAN",
    "kunyomi": "fuku(um)/ fuku(meru)",
    "portugues": "incluir, ter em conta, compreender, tratar com carinho"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25285;",
    "onyomi": "TAN",
    "kunyomi": "katsu(gu)/ nina(u)",
    "portugues": "levar nas costas, carregar, levantar, transportar"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "9",
    "kanji": "&#20581;",
    "onyomi": "KEN",
    "kunyomi": "suko(yaka)",
    "portugues": "saudável, saúde, vigor, persistência"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "170",
    "kanji": "&#38522;",
    "onyomi": "KEN",
    "kunyomi": "kewa(shii)",
    "portugues": "íngreme, lugar inacessível, posição inexpugnável, lugar escarpado, olhos agudos"
  },
  {
    "nivel": "4",
    "tracos": "14",
    "bushu": "40",
    "kanji": "&#23519;",
    "onyomi": "SATSU",
    "kunyomi": " ",
    "portugues": "convidado, presumir, conjecturar, juiz, compreender"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "40",
    "kanji": "&#23383;",
    "onyomi": "JI",
    "kunyomi": "aza/ azana/ -na",
    "portugues": "caracter, letra, palavra, seção de aldeia"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "96",
    "kanji": "&#29577;",
    "onyomi": "GYOKU",
    "kunyomi": "tama/ tama-/ -dama",
    "portugues": "jóia, bola, gota"
  },
  {
    "nivel": "5",
    "tracos": "5",
    "bushu": "94",
    "kanji": "&#29359;",
    "onyomi": "HAN/ BON",
    "kunyomi": "oka(su)",
    "portugues": "crime, pecado, ofensa"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "149",
    "kanji": "&#35531;",
    "onyomi": "SEI/ SHIN/ SHOU",
    "kunyomi": "ko(u)/ u(keru)",
    "portugues": "solicitar, convidar, perguntar"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "72",
    "kanji": "&#26223;",
    "onyomi": "KEI",
    "kunyomi": " ",
    "portugues": "cenário, visão"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25512;",
    "onyomi": "SUI",
    "kunyomi": "o(su)",
    "portugues": "conjecturar, inferir, convidado, supor, apoiar"
  },
  {
    "nivel": "3",
    "tracos": "14",
    "bushu": "120",
    "kanji": "&#32244;",
    "onyomi": "REN",
    "kunyomi": "ne(ru)/ ne(ri)",
    "portugues": "prática, brilho, treinar, exercitar, polir, refinar"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28165;",
    "onyomi": "SEI/ SHOU/ SHIN",
    "kunyomi": "kiyo(i)/ kiyo(maru)/ kiyo(meru)",
    "portugues": "puro, purificar, limpar, exorcisar, Disnastia Manchu"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "40",
    "kanji": "&#23500;",
    "onyomi": "FU/ FUU",
    "kunyomi": "to(mu)/ tomi",
    "portugues": "riqueza, enriquecer, abundante"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "120",
    "kanji": "&#31992;",
    "onyomi": "SHI",
    "kunyomi": "ito",
    "portugues": "linha"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20462;",
    "onyomi": "SHUU/ SHU",
    "kunyomi": "osa(meru)/ osa(maru)",
    "portugues": "disciplina, estudo, mestre"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "50",
    "kanji": "&#24133;",
    "onyomi": "FUKU",
    "kunyomi": "haba",
    "portugues": "laço, largura"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "115",
    "kanji": "&#31227;",
    "onyomi": "I",
    "kunyomi": "utsu(ru)/ utsu(su)",
    "portugues": "trocar, mover, mudança, rumo, pegar (fogo), passar (frio), passar"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "30",
    "kanji": "&#21531;",
    "onyomi": "KUN",
    "kunyomi": "kimi/ -gimi",
    "portugues": "rapaz, sufixo p/ nome"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "140",
    "kanji": "&#33464;",
    "onyomi": "GEI/ UN",
    "kunyomi": "u(eru)/ nori/ waza",
    "portugues": "técnica, arte, ofício, performance, representação, truque, façanha"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "9",
    "kanji": "&#20196;",
    "onyomi": "REI",
    "kunyomi": " ",
    "portugues": "pedidos, leis antigas, comando, decreto"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "9",
    "kanji": "&#20663;",
    "onyomi": "SHOU",
    "kunyomi": "kizu/ ita(há)/ ita(meru)",
    "portugues": "machucado, ferido, ferir, danificar, dor, dano, corte, corte profundo, cicatriz, ponto fraco"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "162",
    "kanji": "&#36848;",
    "onyomi": "JUTSU",
    "kunyomi": "no(beru)",
    "portugues": "mencionar, explanar, falar"
  },
  {
    "nivel": "5",
    "tracos": "3",
    "bushu": "4",
    "kanji": "&#20037;",
    "onyomi": "KYUU/ KU",
    "kunyomi": "hisa(shii)",
    "portugues": "tempo longo, estória antiga"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20241;",
    "onyomi": "KYUU",
    "kunyomi": "yasu(mu)/ yasu(maru)/ yasu(meru)",
    "portugues": "descanso, dia desligado, aposentar, sono"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "124",
    "kanji": "&#32722;",
    "onyomi": "SHUU/ JU",
    "kunyomi": "nara(u)/ nara(i)",
    "portugues": "aprender"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27833;",
    "onyomi": "YU/ YUU",
    "kunyomi": "abura",
    "portugues": "petróleo, gordura, óleo"
  },
  {
    "nivel": "6",
    "tracos": "14",
    "bushu": "75",
    "kanji": "&#27169;",
    "onyomi": "MO/ BO",
    "kunyomi": " ",
    "portugues": "imitação, cópia, burla"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "162",
    "kanji": "&#36794;",
    "onyomi": "HEN",
    "kunyomi": "ata(ri)/ hoto(ri)/ -be",
    "portugues": "arredores, limite, borda, vizinhança, (kokuji)"
  },
  {
    "nivel": "6",
    "tracos": "7",
    "bushu": "135",
    "kanji": "&#20081;",
    "onyomi": "RAN/ RON",
    "kunyomi": "mida(reru)/ mida(ru)/ mida(su)/ mida/ osa(meru)/ wata(ru)",
    "portugues": "distúrbio, guerra, desordenar, perturbar"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "31",
    "kanji": "&#22259;",
    "onyomi": "ZU/ TO",
    "kunyomi": "e/ haka(ru)",
    "portugues": "mapa, desenho, plano, inesperado, acidentalmente"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "170",
    "kanji": "&#38500;",
    "onyomi": "JO/ JI",
    "kunyomi": "nozo(ku)/ -yo(ke)",
    "portugues": "excluir, divisão (mat.), remover, abolir, cancelar, exceto"
  },
  {
    "nivel": "4",
    "tracos": "15",
    "bushu": "86",
    "kanji": "&#29105;",
    "onyomi": "NETSU",
    "kunyomi": "atsu(i)",
    "portugues": "calor, temperatura, febre, mania, paixão"
  },
  {
    "nivel": "6",
    "tracos": "5",
    "bushu": "34",
    "kanji": "&#20966;",
    "onyomi": "SHO",
    "kunyomi": "tokoro/ -ko/ o(ru)",
    "portugues": "dispor, administrar, lidar com, semtença, condenar, ato, proceder"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "32",
    "kanji": "&#22338;",
    "onyomi": "HAN",
    "kunyomi": "saka",
    "portugues": "rampa, inclinação, morro"
  },
  {
    "nivel": "6",
    "tracos": "14",
    "bushu": "170",
    "kanji": "&#38556;",
    "onyomi": "SHOU",
    "kunyomi": "sawa(ru)",
    "portugues": "impedir, ferido, dano"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "60",
    "kanji": "&#24467;",
    "onyomi": "JUU/ SHOU/ JU",
    "kunyomi": "shitaga(u)/ shitaga(eru)/ yori",
    "portugues": "acompanhar, obedecer, submeter a, concordar, seguir, subordinado, acidental, secundário"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "44",
    "kanji": "&#23614;",
    "onyomi": "BI",
    "kunyomi": "o",
    "portugues": "rabo, fim, sufixo para contagem de  p/ peixes, fundo de uma rampa"
  },
  {
    "nivel": "2",
    "tracos": "3",
    "bushu": "4",
    "kanji": "&#20024;",
    "onyomi": "GAN",
    "kunyomi": "maru/ maru(meru)/ maru(i)",
    "portugues": "arredondar, cheio, mês, perfeição, nave, pílulas, espiral para cima, seduzir"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "118",
    "kanji": "&#31561;",
    "onyomi": "TOU",
    "kunyomi": "hito(shii)/ nado/ -ra",
    "portugues": "etc., e assim por diante, classe (1º, 2º ), qualidade, igual, semelhante"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "162",
    "kanji": "&#36814;",
    "onyomi": "GEI",
    "kunyomi": "muka(eru)",
    "portugues": "receber bem, reunião, saudar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "64",
    "kanji": "&#25244;",
    "onyomi": "BATSU/ HATSU/ HAI",
    "kunyomi": "nu(ku)/ -nu(ku)/ nu(ki)/ nu(keru)/ nu(kasu)/ nu(karu)",
    "portugues": "deslizar, extrato, arrancar, furtar, citação, remover, omitir"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "149",
    "kanji": "&#35380;",
    "onyomi": "SO",
    "kunyomi": "utta(eru)",
    "portugues": "acusação, processo, queixar-se de dor, apelar para"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "177",
    "kanji": "&#38761;",
    "onyomi": "KAKU",
    "kunyomi": "kawa",
    "portugues": "couro, torna-se sério, pele, esconder, pelêgo"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "32",
    "kanji": "&#22478;",
    "onyomi": "JOU",
    "kunyomi": "shiro",
    "portugues": "castelo"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "1",
    "kanji": "&#22799;",
    "onyomi": "KA/ GA/ GE",
    "kunyomi": "natsu",
    "portugues": "verão"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "119",
    "kanji": "&#31934;",
    "onyomi": "SEI/ SHOU/ SHIYAU",
    "kunyomi": " ",
    "portugues": "refinado, fantasma, fada, energia, vitalidade, sêmen, excelência, pureza, habilidade"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27839;",
    "onyomi": "EN",
    "kunyomi": "so(u)/ -zo(i)",
    "portugues": "correr ao lado, seguir ao longo, beira, estar ao longo"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "193",
    "kanji": "&#34701;",
    "onyomi": "YUU",
    "kunyomi": "to(keru)/ to(kasu)",
    "portugues": "dissolver, derreter"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "88",
    "kanji": "&#29238;",
    "onyomi": "FU",
    "kunyomi": "chichi",
    "portugues": "pai"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "54",
    "kanji": "&#24310;",
    "onyomi": "EN",
    "kunyomi": "no(biru)/ no(beru)/ no(be)/ no(basu)",
    "portugues": "prolongar, esticar"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "108",
    "kanji": "&#30431;",
    "onyomi": "MEI",
    "kunyomi": " ",
    "portugues": "aliança, juramento"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "37",
    "kanji": "&#22863;",
    "onyomi": "SOU",
    "kunyomi": "kana(deru)",
    "portugues": "tocar música, audiência, completar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20280;",
    "onyomi": "SHIN",
    "kunyomi": "no(biru)/ no(basu)/ no(beru)/ no(su)",
    "portugues": "expandir, esticar, extender, alongar, aumentar"
  },
  {
    "nivel": "6",
    "tracos": "7",
    "bushu": "64",
    "kanji": "&#25209;",
    "onyomi": "HI",
    "kunyomi": " ",
    "portugues": "críticar, bater"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "24",
    "kanji": "&#24185;",
    "onyomi": "KAN",
    "kunyomi": "miki",
    "portugues": "tronco de árvore"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "19",
    "kanji": "&#21177;",
    "onyomi": "KOU",
    "kunyomi": "ki(ku)/ kikime/ nara(u)",
    "portugues": "mérito, eficácia, eficiência, benefício"
  },
  {
    "nivel": "5",
    "tracos": "17",
    "bushu": "149",
    "kanji": "&#35611;",
    "onyomi": "KOU",
    "kunyomi": " ",
    "portugues": "conferência, clube, associação"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "162",
    "kanji": "&#36969;",
    "onyomi": "TEKI",
    "kunyomi": "kana(u)",
    "portugues": "raro, ocasional, conveniente, qualificado, capaz"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "86",
    "kanji": "&#28988;",
    "onyomi": "SHOU",
    "kunyomi": "ya(ku)/ ya(ki)/ ya(ki-)/ -ya(ki)/ ya(keru)",
    "portugues": "assar, queimar"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "154",
    "kanji": "&#36035;",
    "onyomi": "CHIN",
    "kunyomi": " ",
    "portugues": "taxa, alugar, aluguel, salários, conta"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "118",
    "kanji": "&#31563;",
    "onyomi": "KIN",
    "kunyomi": "suji",
    "portugues": "músculo, tendão, nervo, fibra, desenho, plano, descendência"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "120",
    "kanji": "&#32224;",
    "onyomi": "TEI",
    "kunyomi": "shi(maru)/ shi(mari)/ shi(meru)/ -shi(me)/ -ji(me)",
    "portugues": "apertar, amarrar, fechar, travar"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "82",
    "kanji": "&#27611;",
    "onyomi": "MOU",
    "kunyomi": "ke",
    "portugues": "peles, cabelo, pena, abaixo"
  },
  {
    "nivel": "6",
    "tracos": "6",
    "bushu": "39",
    "kanji": "&#23384;",
    "onyomi": "SON/ ZON",
    "kunyomi": " ",
    "portugues": "supor, estar atento, acreditar, sentir"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "13",
    "kanji": "&#21608;",
    "onyomi": "SHUU",
    "kunyomi": "mawa(ri)",
    "portugues": "circunferência, circuito, volta"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25299;",
    "onyomi": "TAKU",
    "kunyomi": "hira(ku)",
    "portugues": "limpar (a terra), abrir, abrir (terra)"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "30",
    "kanji": "&#21496;",
    "onyomi": "SHI",
    "kunyomi": "tsukasado(ru)",
    "portugues": "diretor, oficial, escritório do govt, regra, administrar"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "162",
    "kanji": "&#36895;",
    "onyomi": "SOKU",
    "kunyomi": "haya(i)/ haya-/ haya(meru)/ sumi(yaka)",
    "portugues": "rápido,apressar"
  },
  {
    "nivel": "4",
    "tracos": "18",
    "bushu": "181",
    "kanji": "&#39006;",
    "onyomi": "RUI",
    "kunyomi": "tagu(i)",
    "portugues": "espécie, tipo, variedade, classe, gênero"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "154",
    "kanji": "&#36012;",
    "onyomi": "SEKI",
    "kunyomi": "se(meru)",
    "portugues": "culpa, condenar, censurar"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "145",
    "kanji": "&#35013;",
    "onyomi": "SOU/ SHOU",
    "kunyomi": "yosoo(u)/ yosoo(i)",
    "portugues": "vestes, vestido, fingir, disfarce, manifestar"
  },
  {
    "nivel": "4",
    "tracos": "14",
    "bushu": "174",
    "kanji": "&#38745;",
    "onyomi": "SEI/ JOU",
    "kunyomi": "shizu-/ shizu(ka)/ shizu(maru)/ shizu(meru)",
    "portugues": "calmo"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "170",
    "kanji": "&#38477;",
    "onyomi": "KOU/ GO",
    "kunyomi": "o(riru)/ o(rosu)/ fu(ru)/ fu(ri)/ kuda(ru)/ kuda(su)",
    "portugues": "descer, precipitar, queda, rendição"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "64",
    "kanji": "&#25239;",
    "onyomi": "KOU",
    "kunyomi": " ",
    "portugues": "confrontar, resistir, desafiar, opor"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25313;",
    "onyomi": "KAKU/ KOU",
    "kunyomi": "hiro(garu)/ hiro(geru)/ hiro(meru)",
    "portugues": "alargar, extender, expandir"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "143",
    "kanji": "&#34880;",
    "onyomi": "KETSU",
    "kunyomi": "chi",
    "portugues": "sangue"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "159",
    "kanji": "&#36605;",
    "onyomi": "KEI",
    "kunyomi": "karu(i)/ karo(yaka)/ karo(njiru)",
    "portugues": "ligeiramente, insignificante, sem importância"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "85",
    "kanji": "&#27941;",
    "onyomi": "SHIN",
    "kunyomi": "tsu",
    "portugues": "abrigo, porto, balsa"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "108",
    "kanji": "&#30427;",
    "onyomi": "SEI/ JOU",
    "kunyomi": "mo(ru)/ saka(ru)/ saka(n)",
    "portugues": "estrondo, prosperar, copular"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "76",
    "kanji": "&#27431;",
    "onyomi": "OU",
    "kunyomi": "uta(u)/ ha(ku)",
    "portugues": "Europa"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "19",
    "kanji": "&#21162;",
    "onyomi": "DO",
    "kunyomi": "tsuto(meru)",
    "portugues": "trabalho duro, diligente"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "9",
    "kanji": "&#20171;",
    "onyomi": "KAI",
    "kunyomi": " ",
    "portugues": "comprimir em, marisco, meio, interessa a si próprio com"
  },
  {
    "nivel": "5",
    "tracos": "16",
    "bushu": "12",
    "kanji": "&#33288;",
    "onyomi": "KOU/ KYOU",
    "kunyomi": "oko(ru)/ oko(su)",
    "portugues": "entreter, reviver, recuperar, interesse, prazer"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "102",
    "kanji": "&#30064;",
    "onyomi": "I",
    "kunyomi": " ",
    "portugues": "incomum, esquisito, estranho, raro, curioso, maravilhoso"
  },
  {
    "nivel": "5",
    "tracos": "17",
    "bushu": "120",
    "kanji": "&#32318;",
    "onyomi": "SEKI",
    "kunyomi": " ",
    "portugues": "façanhas, casulo intacto (sem desenrolar)"
  },
  {
    "nivel": "6",
    "tracos": "15",
    "bushu": "162",
    "kanji": "&#36986;",
    "onyomi": "I/ YUI&#12288;I",
    "kunyomi": " ",
    "portugues": "legar, deixar para trás, reservar"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "50",
    "kanji": "&#24111;",
    "onyomi": "TAI",
    "kunyomi": "o(biru)/ obi",
    "portugues": "faixa, cinto, obi, zona, região"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "136",
    "kanji": "&#33310;",
    "onyomi": "BU",
    "kunyomi": "ma(u)/ -ma(u)/ mai",
    "portugues": "dançar, fugir, círculo, roda"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "48",
    "kanji": "&#21151;",
    "onyomi": "KOU/ KU",
    "kunyomi": "isao",
    "portugues": "realização, méritos, sucesso, honra, crédito"
  },
  {
    "nivel": "6",
    "tracos": "6",
    "bushu": "4",
    "kanji": "&#21361;",
    "onyomi": "KI",
    "kunyomi": "abu(nai)/ aya(ui)/ aya(bumu)",
    "portugues": "perigoso, medo, desconforto"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "85",
    "kanji": "&#27744;",
    "onyomi": "CHI",
    "kunyomi": "ike",
    "portugues": "lagoa, cisterna, conjunto, reservatório"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "53",
    "kanji": "&#24235;",
    "onyomi": "KO/ KU",
    "kunyomi": "kura",
    "portugues": "depósito, armazém"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "149",
    "kanji": "&#35377;",
    "onyomi": "KYO",
    "kunyomi": "yuru(su)/ moto",
    "portugues": "permitir, aprovar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "9",
    "kanji": "&#20661;",
    "onyomi": "SAI",
    "kunyomi": " ",
    "portugues": "laço, empréstimo, dívida"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20313;",
    "onyomi": "YO",
    "kunyomi": "ama(ru)/ ama(ri)/ ama(su)",
    "portugues": "demais, eu mesmo, excedente, outro, restante"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "8",
    "kanji": "&#35023;",
    "onyomi": "RI",
    "kunyomi": "ura",
    "portugues": "costas, no meio de, em, inverter, interior, palma, atrás, forro, lado errado"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "173",
    "kanji": "&#38663;",
    "onyomi": "SHIN",
    "kunyomi": "furu(u)/ furu(eru)",
    "portugues": "tremor, agitar, tremer, estremecimento, calafrio"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "64",
    "kanji": "&#25173;",
    "onyomi": "FUTSU/ HITSU/ HOTSU",
    "kunyomi": "hara(u)/ -hara(i)/ -bara(i)",
    "portugues": "pagamento, limpar, podar, bamir, livra-se de"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "75",
    "kanji": "&#26495;",
    "onyomi": "HAN/ BAN",
    "kunyomi": "ita",
    "portugues": "prancha, junta, prato, estágio"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "19",
    "kanji": "&#21220;",
    "onyomi": "KIN/ GON",
    "kunyomi": "tsuto(meru)/ -dzuto(me)/ tsuto(maru)/ iso(shimu)",
    "portugues": "diligência, tornar-se empregado, servir"
  },
  {
    "nivel": "4",
    "tracos": "14",
    "bushu": "85",
    "kanji": "&#28417;",
    "onyomi": "GYO/ RYOU",
    "kunyomi": "asa(ru)",
    "portugues": "pesca, pescaria"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25307;",
    "onyomi": "SHOU",
    "kunyomi": "mane(ku)",
    "portugues": "aceno, convidar, encontro, empenhar"
  },
  {
    "nivel": "6",
    "tracos": "6",
    "bushu": "40",
    "kanji": "&#23431;",
    "onyomi": "U",
    "kunyomi": " ",
    "portugues": "beira de telhado, teto, casa, paraíso"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28169;",
    "onyomi": "SHOU",
    "kunyomi": "wata(ru)",
    "portugues": "vau, balsa, porto"
  },
  {
    "nivel": "2",
    "tracos": "3",
    "bushu": "6",
    "kanji": "&#25165;",
    "onyomi": "SAI",
    "kunyomi": " ",
    "portugues": "gênio, anos antigos"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "8",
    "kanji": "&#21330;",
    "onyomi": "SOTSU/ SHUTSU",
    "kunyomi": "sot-(suru)/ o(eru)/ o(waru)/ tsuini/ niwaka",
    "portugues": "soldado, particular, dados"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "9",
    "kanji": "&#20572;",
    "onyomi": "TEI",
    "kunyomi": "to(meru)/ to(maru)",
    "portugues": "parada, parando"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "27",
    "kanji": "&#21402;",
    "onyomi": "KOU",
    "kunyomi": "atsu(i)/ aka",
    "portugues": "rico, pesado,espesso, espécie, de bronze, cordial, desavergonhado"
  },
  {
    "nivel": "5",
    "tracos": "5",
    "bushu": "28",
    "kanji": "&#24321;",
    "onyomi": "BEN/ HEN",
    "kunyomi": "wakima(eru)/ wa(keru)/ hanabira/ araso(u)",
    "portugues": "válvula, petala, trança, discurso, dialeto, discriminação, livrar-se de, distinguir"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27827;",
    "onyomi": "KA",
    "kunyomi": "kawa",
    "portugues": "rio"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "2",
    "kanji": "&#21360;",
    "onyomi": "IN",
    "kunyomi": "shirushi/ -jirushi/ shiru(su)",
    "portugues": "selo, carimbo, marca, símbolo, emblema, marca registrada, evidência, lembrança, Índia"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "124",
    "kanji": "&#32701;",
    "onyomi": "U",
    "kunyomi": "ha/ wa/ hane",
    "portugues": "penas, sufixo para contagem de pássaros, coelhos"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "22",
    "kanji": "&#24040;",
    "onyomi": "KYO",
    "kunyomi": " ",
    "portugues": "grande, enorme, gigantesco"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "32",
    "kanji": "&#22659;",
    "onyomi": "KYOU/ KEI",
    "kunyomi": "sakai",
    "portugues": "limite, borda, região"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "64",
    "kanji": "&#25391;",
    "onyomi": "SHIN",
    "kunyomi": "fu(ru)/ bu(ru)/ fu(ri)/ -bu(ri)/ fu(ru_)",
    "portugues": "agitar, onda, sacudir, balançar"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "120",
    "kanji": "&#32048;",
    "onyomi": "SAI",
    "kunyomi": "hoso(i)/ hoso(ru)/ koma(ka)/ koma(kai)",
    "portugues": "franzino,emagrecer, afinar, delgado, estreito"
  },
  {
    "nivel": "8",
    "tracos": "3",
    "bushu": "4",
    "kanji": "&#21450;",
    "onyomi": "KYUU",
    "kunyomi": "oyo(bu)/ oyo(bi)/ oyobi/ oyo(bosu)",
    "portugues": "alcance fora, exerce, exercício"
  },
  {
    "nivel": "4",
    "tracos": "15",
    "bushu": "123",
    "kanji": "&#39178;",
    "onyomi": "YOU/ RYOU",
    "kunyomi": "yashina(u)",
    "portugues": "alimentar, educar, cultivar, desenvolvee, nutrir"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "38",
    "kanji": "&#22971;",
    "onyomi": "SAI",
    "kunyomi": "tsuma",
    "portugues": "esposa, cônjuge"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "130",
    "kanji": "&#26381;",
    "onyomi": "FUKU",
    "kunyomi": " ",
    "portugues": "vestuário, permitir, obedecer, descarregar"
  },
  {
    "nivel": "6",
    "tracos": "7",
    "bushu": "1",
    "kanji": "&#21542;",
    "onyomi": "HI",
    "kunyomi": "ina/ iya",
    "portugues": "negue, não, recusa, decadência, negar"
  },
  {
    "nivel": "5",
    "tracos": "18",
    "bushu": "120",
    "kanji": "&#32340;",
    "onyomi": "SHOKU/ SHIKI",
    "kunyomi": "o(ru)/ o(ri)/ ori/ -ori/ -o(ri)",
    "portugues": "tecer, tecido"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "44",
    "kanji": "&#23621;",
    "onyomi": "KYO/ KO",
    "kunyomi": "i(ru)/ -i/ o(ru)",
    "portugues": "residir, existir, viver com"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20505;",
    "onyomi": "KOU",
    "kunyomi": "so_ro_",
    "portugues": "clima, estação, tempo"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20489;",
    "onyomi": "SOU",
    "kunyomi": "kura",
    "portugues": "depósito, armazém, porão, tesouraria"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "53",
    "kanji": "&#24213;",
    "onyomi": "TEI",
    "kunyomi": "soko",
    "portugues": "único, fundo, profundidade, preço baixo, base, espécie, tipo"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "32",
    "kanji": "&#24184;",
    "onyomi": "KOU",
    "kunyomi": "saiwa(i)/ sachi/ shiawa(se)",
    "portugues": "felicidade, benção, fortuna"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "148",
    "kanji": "&#35282;",
    "onyomi": "KAKU",
    "kunyomi": "kado/ tsuno",
    "portugues": "ângulo, canto, chifre"
  },
  {
    "nivel": "4",
    "tracos": "15",
    "bushu": "75",
    "kanji": "&#27161;",
    "onyomi": "HYOU",
    "kunyomi": "shirube/ shirushi",
    "portugues": "sinal de tráfego, carimbo, marca, selo, sinal impresso, símbolo, emblema, marca registrada, evidência, lembrança, alvo"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "9",
    "kanji": "&#20652;",
    "onyomi": "SAI",
    "kunyomi": "moyo_(su)/ moyoo(su)",
    "portugues": "patrocinador, manter (um encontro), oferecer (um jantar)"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "9",
    "kanji": "&#20711;",
    "onyomi": "SOU",
    "kunyomi": " ",
    "portugues": "monge budista"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "162",
    "kanji": "&#36884;",
    "onyomi": "TO",
    "kunyomi": " ",
    "portugues": "rota, caminho, estrada"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "46",
    "kanji": "&#23721;",
    "onyomi": "GAN",
    "kunyomi": "iwa",
    "portugues": "rochedo, rocha, penhedo"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "60",
    "kanji": "&#24466;",
    "onyomi": "TO",
    "kunyomi": "itazura/ ada",
    "portugues": "júnior, vazio, vaidade, futilidade, inutilidade, coisa efêmera, gangue, conjunto, festa, pessoas"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "154",
    "kanji": "&#36032;",
    "onyomi": "GA",
    "kunyomi": " ",
    "portugues": "congratulações, prazer"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "38",
    "kanji": "&#23110;",
    "onyomi": "BA",
    "kunyomi": "baba/ baa",
    "portugues": "senhora, avó, ama de leite"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "44",
    "kanji": "&#23646;",
    "onyomi": "ZOKU/ SHOKU",
    "kunyomi": "sakan/ tsuku/ yakara",
    "portugues": "pertencer, gênero, oficial subordinado, afiliado"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "36",
    "kanji": "&#22805;",
    "onyomi": "SEKI",
    "kunyomi": "yu_",
    "portugues": "noite"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "72",
    "kanji": "&#26131;",
    "onyomi": "EKI/ I",
    "kunyomi": "yasa(shii)/ yasu(i)",
    "portugues": "fácil,ler a sorte, pronto para, simples, advinhação"
  },
  {
    "nivel": "4",
    "tracos": "14",
    "bushu": "27",
    "kanji": "&#27508;",
    "onyomi": "REKI/ REKKI",
    "kunyomi": " ",
    "portugues": "currículo, continuação, passagem de tempo"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "75",
    "kanji": "&#26522;",
    "onyomi": "MAI/ BAI",
    "kunyomi": " ",
    "portugues": "folha de..., sufixo para contagem de  para objetos finos, chatos ou folhas"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "167",
    "kanji": "&#37428;",
    "onyomi": "REI/ RIN",
    "kunyomi": "suzu",
    "portugues": "pequeno sino, campainha"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "12",
    "kanji": "&#30410;",
    "onyomi": "EKI/ YAKU",
    "kunyomi": "ma(su)",
    "portugues": "benefício, ganho, lucro, vantagem"
  },
  {
    "nivel": "5",
    "tracos": "15",
    "bushu": "72",
    "kanji": "&#26292;",
    "onyomi": "BOU/ BAKU",
    "kunyomi": "aba(ku)/ aba(reru)",
    "portugues": "explosão, enfurecer, preocupação, força, violência, crueldade, escandalo"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "109",
    "kanji": "&#30563;",
    "onyomi": "TOKU",
    "kunyomi": " ",
    "portugues": "técnico, comando, desejo, primazia, supervisionar"
  },
  {
    "nivel": "5",
    "tracos": "5",
    "bushu": "50",
    "kanji": "&#24067;",
    "onyomi": "FU",
    "kunyomi": "nuno",
    "portugues": "linho, pano"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "111",
    "kanji": "&#30701;",
    "onyomi": "TAN",
    "kunyomi": "mijika(i)",
    "portugues": "curto, brevidade, falta, defeito, ponto fraco"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "24",
    "kanji": "&#21476;",
    "onyomi": "KO",
    "kunyomi": "furu(i)/ furu-/ -furu(su)",
    "portugues": "velho"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "85",
    "kanji": "&#27798;",
    "onyomi": "CHUU",
    "kunyomi": "oki/ okitsu/ chu_(suru)/ waku",
    "portugues": "oceano aberto, mar aberto, subir no ceú"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "118",
    "kanji": "&#31680;",
    "onyomi": "SETSU/ SECHI",
    "kunyomi": "fushi/ -bushi/ notto",
    "portugues": "nó, estação, período, ocasião, verso, cláusula, stanza, honra, junta, nó dos dedos, maçaneta, nó, canção, melodia"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "18",
    "kanji": "&#21009;",
    "onyomi": "KEI",
    "kunyomi": " ",
    "portugues": "punir, penalidade, sentença, punição"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "151",
    "kanji": "&#35914;",
    "onyomi": "HOU/ BU",
    "kunyomi": "yuta(ka)/ toyo",
    "portugues": "abundante, rico, excelente"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "64",
    "kanji": "&#25240;",
    "onyomi": "SETSU",
    "kunyomi": "o(ru)/ ori/ o(ri)/ -o(ri)/ o(reru)",
    "portugues": "dobrar, quebrar, fraturar, curvar, produto, submeter"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "31",
    "kanji": "&#22266;",
    "onyomi": "KO",
    "kunyomi": "kata(meru)/ kata(maru)/ kata(mari)/ kata(i)",
    "portugues": "endurecer, aglomerar, coágulo, coagular"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "42",
    "kanji": "&#22530;",
    "onyomi": "DOU",
    "kunyomi": " ",
    "portugues": "câmara pública, corredor"
  },
  {
    "nivel": "2",
    "tracos": "10",
    "bushu": "15",
    "kanji": "&#24369;",
    "onyomi": "JAKU",
    "kunyomi": "yowa(i)/ yowa(ru)/ yowa(maru)/ yowa(meru)",
    "portugues": "frágil, fraco"
  },
  {
    "nivel": "5",
    "tracos": "5",
    "bushu": "3",
    "kanji": "&#27704;",
    "onyomi": "EI",
    "kunyomi": " ",
    "portugues": "eternidade, ambicionar"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "4",
    "kanji": "&#26410;",
    "onyomi": "MI/ BI",
    "kunyomi": "ima(da)/ ma(da)/ hitsuji",
    "portugues": "já-, não ainda, até aqui, ainda, até mesmo agora"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "163",
    "kanji": "&#37089;",
    "onyomi": "GUN",
    "kunyomi": "ko_ri",
    "portugues": "condado, distrito, comarca"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "102",
    "kanji": "&#30041;",
    "onyomi": "RYUU/ RU",
    "kunyomi": "to(meru)/ to(maru)/ todo(meru)/ todo(maru)/ ru_buru",
    "portugues": "deter, segurar, parar, interromper"
  },
  {
    "nivel": "1",
    "tracos": "9",
    "bushu": "140",
    "kanji": "&#33609;",
    "onyomi": "SOU",
    "kunyomi": "kusa/ kusa-/ -gusa",
    "portugues": "grama, erva daninha, ervas, pasto, escrever, esboçar"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "130",
    "kanji": "&#32905;",
    "onyomi": "NIKU",
    "kunyomi": " ",
    "portugues": "carne"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "130",
    "kanji": "&#32972;",
    "onyomi": "HAI",
    "kunyomi": "se/ sei/ somu(ku)/ soum(keru)",
    "portugues": "estatura, altura, costas, atrás, desobedecer, desafiar, quebrar promesum, rebelar"
  },
  {
    "nivel": "2",
    "tracos": "13",
    "bushu": "162",
    "kanji": "&#36960;",
    "onyomi": "EN/ ON",
    "kunyomi": "too(i)",
    "portugues": "distante, longe"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "9",
    "kanji": "&#20698;",
    "onyomi": "RYOU",
    "kunyomi": " ",
    "portugues": "colega, oficial, companheiro"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "162",
    "kanji": "&#36870;",
    "onyomi": "GYAKU/ GEKI",
    "kunyomi": "saka/ saka(um)/ saka(rau)",
    "portugues": "invertido, inverter, travesso, contrário"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "15",
    "kanji": "&#20919;",
    "onyomi": "REI",
    "kunyomi": "tsume(tai)/ hi(eru)/ hi(ya)/ hi(yayaka)/ hi(yasu)/ hi(yakasu)/ um(meru)/ um(masu)",
    "portugues": "fresco, frio (cerveja, pessoa), calafrio"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "38",
    "kanji": "&#23130;",
    "onyomi": "KON",
    "kunyomi": " ",
    "portugues": "casamento"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "145",
    "kanji": "&#34987;",
    "onyomi": "HI",
    "kunyomi": "ko_mu(ru)/ oo(u)/ kabu(ru)/ kabu(seru)",
    "portugues": "incorrer, cobrir, velar, chocar, proteger, vestir, vestir-se, expor (filme), recepção"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "46",
    "kanji": "&#23736;",
    "onyomi": "GAN",
    "kunyomi": "kishi",
    "portugues": "praia"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "113",
    "kanji": "&#31105;",
    "onyomi": "KIN",
    "kunyomi": " ",
    "portugues": "proibição, proibir, banir"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "181",
    "kanji": "&#38972;",
    "onyomi": "RAI",
    "kunyomi": "tano(mu)/ tano(moshii)/ tayo(ru)",
    "portugues": "confiança, solicitação"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "120",
    "kanji": "&#32032;",
    "onyomi": "SO/ SU",
    "kunyomi": "moto",
    "portugues": "elementar, princípio, descoberto, nu"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "32",
    "kanji": "&#21916;",
    "onyomi": "KI",
    "kunyomi": "yoroko(bu)/ yoroko(basu)",
    "portugues": "alegrar-se, ter prazer em"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "24",
    "kanji": "&#21338;",
    "onyomi": "HAKU/ BAKU",
    "kunyomi": " ",
    "portugues": "Dr., comando, estima, vencedor por aclamação, Ph.D., exposição, feira"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25505;",
    "onyomi": "SAI",
    "kunyomi": "to(ru)",
    "portugues": "escolher, pegar, trazer, erguer"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "146",
    "kanji": "&#31080;",
    "onyomi": "HYOU",
    "kunyomi": " ",
    "portugues": "voto, rótulo, bilhete, signo"
  },
  {
    "nivel": "6",
    "tracos": "7",
    "bushu": "31",
    "kanji": "&#22256;",
    "onyomi": "KON",
    "kunyomi": "koma(ru)",
    "portugues": "dúvida, torna-se angustiado, aborrecido, incerteza, dilema"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "9",
    "kanji": "&#20415;",
    "onyomi": "BEN/ BIN",
    "kunyomi": "tayo(ri)",
    "portugues": "conveniência"
  },
  {
    "nivel": "6",
    "tracos": "7",
    "bushu": "4",
    "kanji": "&#31995;",
    "onyomi": "KEI",
    "kunyomi": " ",
    "portugues": "linhagem, sistema"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28204;",
    "onyomi": "SOKU",
    "kunyomi": "haka(ru)",
    "portugues": "braça, plano, esquema, medida"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "130",
    "kanji": "&#33075;",
    "onyomi": "NOU/ DOU",
    "kunyomi": "no_zuru",
    "portugues": "cérebro, memória"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "170",
    "kanji": "&#38499;",
    "onyomi": "JIN",
    "kunyomi": " ",
    "portugues": "acampamento, arranjo na batalha, posições, posição"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "140",
    "kanji": "&#24149;",
    "onyomi": "MAKU/ BAKU",
    "kunyomi": " ",
    "portugues": "cortina, pano p/ decoração, atuar em peças teatrais"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "162",
    "kanji": "&#36867;",
    "onyomi": "TOU",
    "kunyomi": "ni(geru)/ ni(gasu)/ noga(su)/ noga(reru)",
    "portugues": "escapar, fugir, esquivar, libertar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "162",
    "kanji": "&#36910;",
    "onyomi": "TAI",
    "kunyomi": " ",
    "portugues": "compreender, caçar"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28201;",
    "onyomi": "ON",
    "kunyomi": "atata(ka)/ atata(kai)/ atata(maru)/ atata(meru)/ nuku",
    "portugues": "morno"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "195",
    "kanji": "&#39854;",
    "onyomi": "COM",
    "kunyomi": "aza(yaka)",
    "portugues": "fresca, viva, limpa, brilhante, Coréia"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "50",
    "kanji": "&#24076;",
    "onyomi": "KI/ KE",
    "kunyomi": "mare",
    "portugues": "esperança, pedir, solicitação, implorar, Grécia, diluir (ácido), raro, poucos, fenomenal"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "75",
    "kanji": "&#26413;",
    "onyomi": "SATSU",
    "kunyomi": "fuda",
    "portugues": "etiqueta, dinheiro de papel, número de contratos, letreiro, oferta"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "63",
    "kanji": "&#25151;",
    "onyomi": "BOU",
    "kunyomi": "fusa",
    "portugues": "moita, franja, punhado, mecha (cabelo), gomos (laranja), casa, quarto"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "60",
    "kanji": "&#34903;",
    "onyomi": "GAI/ KAI",
    "kunyomi": "machi",
    "portugues": "bulevar, rua, cidade"
  },
  {
    "nivel": "6",
    "tracos": "16",
    "bushu": "167",
    "kanji": "&#37628;",
    "onyomi": "KOU",
    "kunyomi": "hagane",
    "portugues": "aço"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "85",
    "kanji": "&#28304;",
    "onyomi": "GEN",
    "kunyomi": "minamoto",
    "portugues": "fonte, origem"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "25",
    "kanji": "&#21344;",
    "onyomi": "SEN",
    "kunyomi": "shi(meru)/ urana(u)",
    "portugues": "ler a sorte, advinhar, previsão, ocupar-se, segurar, manter, obter, tomar"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "162",
    "kanji": "&#36843;",
    "onyomi": "HAKU",
    "kunyomi": "sema(ru)",
    "portugues": "urgir, forçar, esporear"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20493;",
    "onyomi": "BAI",
    "kunyomi": " ",
    "portugues": "duplicar, duas vezes, tempos, dobra"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "66",
    "kanji": "&#25937;",
    "onyomi": "KYUU",
    "kunyomi": "suku(u)",
    "portugues": "salvação, salva, ajudar, resgatar, reivindicar"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "47",
    "kanji": "&#38918;",
    "onyomi": "JUN",
    "kunyomi": " ",
    "portugues": "obedecer, pedido, volta, direita, docilidade, ocasião"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "72",
    "kanji": "&#26119;",
    "onyomi": "SHOU",
    "kunyomi": "nobo(ru)",
    "portugues": "ascender"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "162",
    "kanji": "&#36933;",
    "onyomi": "CHI",
    "kunyomi": "oku(reru)/ oku(rasu)/ oso(i)",
    "portugues": "atrasado, lento, costas, mais tarde"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "120",
    "kanji": "&#32118;",
    "onyomi": "ZETSU",
    "kunyomi": "ta(eru)/ ta(yasu)/ ta(tsu)",
    "portugues": "descontinuar, além de, romper, cortar desligar, abster-se, interromper, suprimir"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "162",
    "kanji": "&#36938;",
    "onyomi": "YUU/ YU",
    "kunyomi": "aso(bu)/ aso(basu)",
    "portugues": "jogo, jogar"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "162",
    "kanji": "&#36991;",
    "onyomi": "HI",
    "kunyomi": "sa(keru)/ yo(keru)",
    "portugues": "evadir-se, evitar, prevenir-se, guardar-se, esquivar-se, escapar"
  },
  {
    "nivel": "2",
    "tracos": "18",
    "bushu": "72",
    "kanji": "&#26332;",
    "onyomi": "YOU",
    "kunyomi": " ",
    "portugues": "dia útil"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "32",
    "kanji": "&#24535;",
    "onyomi": "SHI/ SHIRINGU",
    "kunyomi": "kokoroza(su)/ kokorozashi",
    "portugues": "intenção, plano, resolver, aspirar, motivo, esperanças, shilling (din.)"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "172",
    "kanji": "&#38609;",
    "onyomi": "ZATSU/ ZOU",
    "kunyomi": "maji(eru)/ maji(ru)",
    "portugues": "misto"
  },
  {
    "nivel": "6",
    "tracos": "18",
    "bushu": "131",
    "kanji": "&#33256;",
    "onyomi": "RIN",
    "kunyomi": "nozo(mu)",
    "portugues": "considerar, enfrentar, reunião, confrontar, coparecer, invocar"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "32",
    "kanji": "&#22343;",
    "onyomi": "KIN",
    "kunyomi": "nara(su)",
    "portugues": "nível, média"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "64",
    "kanji": "&#25563;",
    "onyomi": "KAN",
    "kunyomi": "ka(eru)/ -ka(eru)/ ka(waru)",
    "portugues": "trocar, turno, carga, mudar"
  },
  {
    "nivel": "6",
    "tracos": "3",
    "bushu": "8",
    "kanji": "&#20129;",
    "onyomi": "BOU/ MOU",
    "kunyomi": "na(i)/ na(ki-)/ horo(biru)/ horo(bu)/ horo(bosu)",
    "portugues": "falecido, agonizante, atrasado, perecer"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "118",
    "kanji": "&#31481;",
    "onyomi": "CHIKU",
    "kunyomi": "take",
    "portugues": "bambu"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "115",
    "kanji": "&#31186;",
    "onyomi": "BYOU",
    "kunyomi": " ",
    "portugues": "segundo (1/ 60 minuto)"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "123",
    "kanji": "&#32676;",
    "onyomi": "GUN",
    "kunyomi": "mu(reru)/ mu(re)/ mura/ mura(garu)",
    "portugues": "bando, grupo, multidão, manada, enxame, cacho"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "104",
    "kanji": "&#30274;",
    "onyomi": "RYOU",
    "kunyomi": " ",
    "portugues": "cura, curar"
  },
  {
    "nivel": "6",
    "tracos": "14",
    "bushu": "44",
    "kanji": "&#23652;",
    "onyomi": "SOU",
    "kunyomi": " ",
    "portugues": "estrato, classe social, camada, estória, andar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25514;",
    "onyomi": "SO",
    "kunyomi": "o(ku)",
    "portugues": "por de lado, desistir, suspender, descontinuar, exceto"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "9",
    "kanji": "&#20670;",
    "onyomi": "KEI",
    "kunyomi": "katamu(ku)/ katamu(keru)/ katabu( ku)/ kata(geru)/ kashi(geru)",
    "portugues": "inclinar, inclinação, tendência, declínio, afundar, ruina, viés"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "75",
    "kanji": "&#26628;",
    "onyomi": "EI/ YOU",
    "kunyomi": "saka(eru)/ um(e)/ -ba(e)/ um( eru)/ e",
    "portugues": "florescer, prosperidade, honra, glória, esplendor"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "154",
    "kanji": "&#21063;",
    "onyomi": "SOKU",
    "kunyomi": "notto(ru)",
    "portugues": "regra, seguir, basear em, ter como modelo"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "120",
    "kanji": "&#32202;",
    "onyomi": "KIN",
    "kunyomi": " ",
    "portugues": "tenso, apertado, de confiança, duro, sólido"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "60",
    "kanji": "&#34909;",
    "onyomi": "SHOU",
    "kunyomi": "tsu(ku)",
    "portugues": "colidir, o mais forte, rodovia, oposição (astronomia), atravessar, furar, apunhalar, picar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "60",
    "kanji": "&#24481;",
    "onyomi": "GYO/ GO",
    "kunyomi": "on-/ o-/ mi-",
    "portugues": "honrado, manipular, governar"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "78",
    "kanji": "&#21015;",
    "onyomi": "RETSU/ RE",
    "kunyomi": " ",
    "portugues": "arquivo, fila, posição, alinhamento, coluna"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28151;",
    "onyomi": "KON",
    "kunyomi": "ma(jiru)/ -ma(jiri)/ ma(zaru)/ ma(zeru)/ ko(já)",
    "portugues": "misturar, mistura, confundir"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "130",
    "kanji": "&#33073;",
    "onyomi": "DATSU",
    "kunyomi": "nu(gu)/ nu(geru)",
    "portugues": "despir, remover, escapar de, livrar-se, ser deixado de fora, decolar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "63",
    "kanji": "&#25147;",
    "onyomi": "REI",
    "kunyomi": "modo(su)/ modo(ru)",
    "portugues": "re-, volta, reverter, recomeçar, restaurar, retornar"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "85",
    "kanji": "&#28006;",
    "onyomi": "HO",
    "kunyomi": "ura",
    "portugues": "baía, riacho, pequena baía, golfo, praia, costa"
  },
  {
    "nivel": "4",
    "tracos": "19",
    "bushu": "4",
    "kanji": "&#39000;",
    "onyomi": "GAN",
    "kunyomi": "nega(u)/ -negai",
    "portugues": "petição, solicitação, voto, desejo, esperança"
  },
  {
    "nivel": "8",
    "tracos": "2",
    "bushu": "6",
    "kanji": "&#20102;",
    "onyomi": "RYOU",
    "kunyomi": " ",
    "portugues": "completar, fim"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "60",
    "kanji": "&#24499;",
    "onyomi": "TOKU",
    "kunyomi": " ",
    "portugues": "benevolência, virtude, bondade, comandando respeito"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "4",
    "kanji": "&#25215;",
    "onyomi": "SHOU",
    "kunyomi": "uketamawa(ru)/ u(keru)",
    "portugues": "aquiescer, escutar, ser informado, receber"
  },
  {
    "nivel": "6",
    "tracos": "18",
    "bushu": "118",
    "kanji": "&#31777;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "simplicidade, brevidade"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "72",
    "kanji": "&#26143;",
    "onyomi": "SEI/ SHOU",
    "kunyomi": "hoshi/ -boshi",
    "portugues": "estrela, ponto, marca"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "32",
    "kanji": "&#22533;",
    "onyomi": "KEN",
    "kunyomi": "kata(i)/ -gata(i)",
    "portugues": "de confiança, apertado, duro, sólido, firme, estrito"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "141",
    "kanji": "&#24942;",
    "onyomi": "RYO",
    "kunyomi": "omonpaku(ru)/ omonpaka(ru)",
    "portugues": "prudência, pensamento, assunto, considera, deliberate, medo"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "140",
    "kanji": "&#33437;",
    "onyomi": "SHI",
    "kunyomi": "shiba",
    "portugues": "gramado, relva"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "163",
    "kanji": "&#37109;",
    "onyomi": "YUU",
    "kunyomi": " ",
    "portugues": "correio, parada de diligência"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "135",
    "kanji": "&#36766;",
    "onyomi": "JI",
    "kunyomi": "ya(meru)",
    "portugues": "pedir demissão, palavra, termo, expressão"
  },
  {
    "nivel": "6",
    "tracos": "17",
    "bushu": "120",
    "kanji": "&#32302;",
    "onyomi": "SHUKU",
    "kunyomi": "chidji(com)/ chidji(maru)/ chidji(meru)/ chidji(reru)/ chidji(rasu)",
    "portugues": "encolher, contrair, enrugar, ruga, reduzir"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "40",
    "kanji": "&#23494;",
    "onyomi": "MITSU",
    "kunyomi": " ",
    "portugues": "segredo, densidade, pormenor, cuidado"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "132",
    "kanji": "&#24687;",
    "onyomi": "SOKU",
    "kunyomi": "iki",
    "portugues": "hálito, respiração, filho, juros"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "122",
    "kanji": "&#32618;",
    "onyomi": "ZAI",
    "kunyomi": "tsumi",
    "portugues": "culpa, pecado, crime, falta, culpa, ofensa"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "64",
    "kanji": "&#25201;",
    "onyomi": "SHOU",
    "kunyomi": "atsuka(ru)/ atsuka(i)/ atsuka(u)",
    "portugues": "cabo, entreter, debulhar, desnudar"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "147",
    "kanji": "&#35226;",
    "onyomi": "KAKU",
    "kunyomi": "obo(eru)/ sa(masu)/ sa(meru)/ sato(ru)",
    "portugues": "memorizar, aprender, recordar, acordar, ficar sóbrio"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "8",
    "kanji": "&#23601;",
    "onyomi": "SHUU/ JU",
    "kunyomi": "tsu(ku)/ tsu(keru)",
    "portugues": "colocar, tomar partido, lado de um contrato, partido"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "118",
    "kanji": "&#31505;",
    "onyomi": "SHOU",
    "kunyomi": "wara(u)/ e(mu)",
    "portugues": "risada"
  },
  {
    "nivel": "5",
    "tracos": "16",
    "bushu": "118",
    "kanji": "&#31689;",
    "onyomi": "CHIKU",
    "kunyomi": "kizu(ku)",
    "portugues": "fabricar, construção, construir"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "57",
    "kanji": "&#24382;",
    "onyomi": "DAN/ TAN",
    "kunyomi": "hi(ku)/ -hi(ki)/ hazu(mu)/ tama/ haji(ku)/ haji(keru)/ tada(su)/ haji( kiyumi)",
    "portugues": "bala (arma), fanhoso, sacudidela, estalo"
  },
  {
    "nivel": "3",
    "tracos": "2",
    "bushu": "1",
    "kanji": "&#19969;",
    "onyomi": "CHO/ TEI/ CHIN/ TOU/ TE",
    "kunyomi": "hinoto",
    "portugues": "rua, departamento, cidade, sufixo para contagem de  para armas, ferramentas, folhas ou bolos de alguma coisa, número par, 4º signo do calendário chinês"
  },
  {
    "nivel": "6",
    "tracos": "4",
    "bushu": "91",
    "kanji": "&#29255;",
    "onyomi": "HEN",
    "kunyomi": "kata-/ kata",
    "portugues": "unilateral, folha de papel, folha (árvore)"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "72",
    "kanji": "&#26311;",
    "onyomi": "DON",
    "kunyomi": "kumo(ru)",
    "portugues": "tempo nublado, nublar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "108",
    "kanji": "&#30423;",
    "onyomi": "TOU",
    "kunyomi": "nusu(mu)/ nusu(mi)",
    "portugues": "roubar, roubo, furtar"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "140",
    "kanji": "&#33618;",
    "onyomi": "KOU",
    "kunyomi": "ara(i)/ ara-/ a(reru)/ a(rasu)/ -a(rashi)/ susa(um)",
    "portugues": "abandonado no mato, selvagem, rude"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "102",
    "kanji": "&#30053;",
    "onyomi": "RYAKU",
    "kunyomi": "hobo/ oka(su)/ osa(meru)/ hakarigoto/ haka(ru)/ jábu(ku)/ ryaku(su)/ ryaku(suru)",
    "portugues": "abreviação, omissão, contornar, capturar, saquear"
  },
  {
    "nivel": "6",
    "tracos": "16",
    "bushu": "40",
    "kanji": "&#25010;",
    "onyomi": "KEN",
    "kunyomi": " ",
    "portugues": "constituição, lei"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "120",
    "kanji": "&#32097;",
    "onyomi": "RAKU",
    "kunyomi": "kara(mu)/ kara(maru)",
    "portugues": "enroscar, enrolar, ser apanhado em"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "140",
    "kanji": "&#33590;",
    "onyomi": "CHA/ UM",
    "kunyomi": " ",
    "portugues": "chá"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "187",
    "kanji": "&#39376;",
    "onyomi": "CHUU",
    "kunyomi": " ",
    "portugues": "viajar com paradas, residir em, residente"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20210;",
    "onyomi": "CHUU",
    "kunyomi": "naka",
    "portugues": "relacionamento, entre (algo)"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "1",
    "kanji": "&#20114;",
    "onyomi": "GO",
    "kunyomi": "taga(i)/ katami(ni)",
    "portugues": "mutuamente, reciprocamente, juntamente"
  },
  {
    "nivel": "4",
    "tracos": "4",
    "bushu": "76",
    "kanji": "&#27424;",
    "onyomi": "KETSU/ KEN",
    "kunyomi": "ka(keru)/ ka(ku)",
    "portugues": "falta, intervalo, falha"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "32",
    "kanji": "&#22618;",
    "onyomi": "CHOU",
    "kunyomi": "tsuka/ -dzuka",
    "portugues": "morro, monte"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "108",
    "kanji": "&#30436;",
    "onyomi": "BAN",
    "kunyomi": " ",
    "portugues": "bandeija, taça rasa, tijela, galão, tábua p/ mesa, disco (fon.)"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "120",
    "kanji": "&#32173;",
    "onyomi": "I",
    "kunyomi": " ",
    "portugues": "fibra, laço, corda"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "106",
    "kanji": "&#30343;",
    "onyomi": "KOU/ OU",
    "kunyomi": " ",
    "portugues": "imperador"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "53",
    "kanji": "&#24247;",
    "onyomi": "KOU",
    "kunyomi": " ",
    "portugues": "facilidade, paz"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "53",
    "kanji": "&#24950;",
    "onyomi": "KEI",
    "kunyomi": "yoroko(bi)",
    "portugues": "júbilo, congratular, regozijar-se, estar feliz"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25312;",
    "onyomi": "KYO/ KO",
    "kunyomi": "yo(ru)",
    "portugues": "apoio para os pés, baseado em, segue, portanto"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "173",
    "kanji": "&#38634;",
    "onyomi": "SETSU",
    "kunyomi": "yuki",
    "portugues": "neve"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "75",
    "kanji": "&#26441;",
    "onyomi": "SAN",
    "kunyomi": "sugi",
    "portugues": "cedro"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "133",
    "kanji": "&#33268;",
    "onyomi": "CHI",
    "kunyomi": "ita(su)",
    "portugues": "fazer, enviar, transmitir, causar, exercer, incorrer, empenhar"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "31",
    "kanji": "&#22258;",
    "onyomi": "I",
    "kunyomi": "kako(mu)/ kako(u)/ kako(i)",
    "portugues": "circundar, sitiar, loja, paliçada, cerca, cerca, preservar, guardar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "120",
    "kanji": "&#32153;",
    "onyomi": "KEI",
    "kunyomi": "tsu(gu)/ mama-",
    "portugues": "herdar, ser bem-sucedido, remendo, enxerto (árvore)"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20511;",
    "onyomi": "SHAKU",
    "kunyomi": "ka(riru)",
    "portugues": "pedir emprestado, aluguel"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28171;",
    "onyomi": "JUU/ SHUU",
    "kunyomi": "shibu/ shibu(i)/ shibu(ru)",
    "portugues": "adstringente, hesitar, relutante, ter diarréia"
  },
  {
    "nivel": "2",
    "tracos": "9",
    "bushu": "1",
    "kanji": "&#26172;",
    "onyomi": "CHUU",
    "kunyomi": "hiru",
    "portugues": "dia, meio-dia"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "61",
    "kanji": "&#24656;",
    "onyomi": "KYOU",
    "kunyomi": "oso(reru)/ oso(ru)/ oso(roshii)/ kowa(i)/ kowa(garu)",
    "portugues": "medo, temer, temor"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#20341;",
    "onyomi": "HEI",
    "kunyomi": "awa(seru)",
    "portugues": "unir, reúnir, coletivo"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "32",
    "kanji": "&#22528;",
    "onyomi": "KUTSU",
    "kunyomi": "hori",
    "portugues": "trincheira, fosso, canal"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "140",
    "kanji": "&#34180;",
    "onyomi": "HAKU",
    "kunyomi": "usu(i)/ usu-/ -usu/ usu( meru)/ usu(maru)/ usu(ragu)/ usu( ra-)/ usu(reru)/ susuki",
    "portugues": "diluir, fraco, ralo (chá)"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "4",
    "kanji": "&#22885;",
    "onyomi": "OU/ OKU",
    "kunyomi": "oku(maru)/ kuma",
    "portugues": "coração, interior"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "20",
    "kanji": "&#26092;",
    "onyomi": "JUN/ SHUN",
    "kunyomi": " ",
    "portugues": "decameron, 10 dias, estação (para produtos específicos"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "117",
    "kanji": "&#31471;",
    "onyomi": "TAN",
    "kunyomi": "hashi/ ha/ hata/ -bata/ hana",
    "portugues": "margem, origem, fim, ponto, borda, limite, cabo (geog.)"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "196",
    "kanji": "&#40165;",
    "onyomi": "CHOU",
    "kunyomi": "tori",
    "portugues": "pássaro, sufixo para nomes de pássaros."
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "157",
    "kanji": "&#36321;",
    "onyomi": "SEKI",
    "kunyomi": "ato",
    "portugues": "trilhas, marca, impressão"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "154",
    "kanji": "&#36024;",
    "onyomi": "TAI",
    "kunyomi": "ka(su)/ ka(shi-)/ kashi-",
    "portugues": "emprestar"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "131",
    "kanji": "&#33251;",
    "onyomi": "SHIN/ JIN",
    "kunyomi": " ",
    "portugues": "servente, servo, subalterno"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "120",
    "kanji": "&#32260;",
    "onyomi": "JOU",
    "kunyomi": "nawa/ tada(su)",
    "portugues": "corda de palha, corda"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "85",
    "kanji": "&#37202;",
    "onyomi": "SHU",
    "kunyomi": "sake/ saka-",
    "portugues": "sake, álcool"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "120",
    "kanji": "&#32005;",
    "onyomi": "KOU/ KU",
    "kunyomi": "beni/ kurenai/ aka(i)",
    "portugues": "carmesim, vermelho forte"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "187",
    "kanji": "&#39442;",
    "onyomi": "SOU",
    "kunyomi": "sawa(gu)/ urei/ sawa(gashii)",
    "portugues": "vociferante, barulhento, clamor, perturbar, excitar"
  },
  {
    "nivel": "4",
    "tracos": "7",
    "bushu": "4",
    "kanji": "&#26463;",
    "onyomi": "SOKU",
    "kunyomi": "taba/ taba(neru)/ tsuka/ tsuka(neru)",
    "portugues": "pacote, molho, feixe, amarra em pacotes, governar, administrar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "53",
    "kanji": "&#24259;",
    "onyomi": "HAI",
    "kunyomi": "suta(reru)/ suta(ru)",
    "portugues": "cancelar, obsoleto, trégua, descarte, desembaraço"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "44",
    "kanji": "&#23626;",
    "onyomi": "KAI",
    "kunyomi": "todo(keru)/ -todo(ke)/ todo(ku)",
    "portugues": "entregar, alcançar, chegar, relatório, notificar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "32",
    "kanji": "&#22519;",
    "onyomi": "SHITSU/ JYUU",
    "kunyomi": "to(ru)",
    "portugues": "tenaz, segurar, agarrar, simpatizar"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "173",
    "kanji": "&#38656;",
    "onyomi": "JU",
    "kunyomi": " ",
    "portugues": "demanda, solicitação, necessidade"
  },
  {
    "nivel": "3",
    "tracos": "16",
    "bushu": "140",
    "kanji": "&#34220;",
    "onyomi": "YAKU",
    "kunyomi": "kusuri",
    "portugues": "remédio, produto químico, esmalte, pólvora, benefício"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "48",
    "kanji": "&#38917;",
    "onyomi": "KOU",
    "kunyomi": "unaji",
    "portugues": "parágrafo, nuca, cláusula, item, termo (expressão)"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "34",
    "kanji": "&#20908;",
    "onyomi": "TOU",
    "kunyomi": "fuyu",
    "portugues": "Inverno"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "30",
    "kanji": "&#21561;",
    "onyomi": "SU",
    "kunyomi": "fu(ku)",
    "portugues": "sopro, respirar, emitir, fumaça"
  },
  {
    "nivel": "8",
    "tracos": "21",
    "bushu": "157",
    "kanji": "&#36493;",
    "onyomi": "YAKU",
    "kunyomi": "odo(ru)",
    "portugues": "saltar, dançar, pular"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "40",
    "kanji": "&#23449;",
    "onyomi": "CHUU",
    "kunyomi": " ",
    "portugues": "aéreo, ar, espaço, céu, memorização, intervalo de tempo"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "158",
    "kanji": "&#23556;",
    "onyomi": "SHA",
    "kunyomi": "i(ru)/ sa(su)",
    "portugues": "dispare, brilha dentro, sobre, arte do arco e flexa"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "140",
    "kanji": "&#33879;",
    "onyomi": "CHO/ CHAKU",
    "kunyomi": "arawa(su)/ ichijiru(shii)",
    "portugues": "renomado, publico,  notável, fenomenal, vestido, vestir, usar, elevado chegada/ fim (corrida), sufixo para contagem de vestuário, trabalho literário"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "186",
    "kanji": "&#39321;",
    "onyomi": "KOU/ KYOU",
    "kunyomi": "ka/ kao(ri)/ kao(ru)",
    "portugues": "incenso, cheiro, perfume"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "115",
    "kanji": "&#23395;",
    "onyomi": "KI",
    "kunyomi": " ",
    "portugues": "estações"
  },
  {
    "nivel": "1",
    "tracos": "5",
    "bushu": "102",
    "kanji": "&#30000;",
    "onyomi": "DEN",
    "kunyomi": "ta",
    "portugues": "campo de arroz, arroz sem beneficiar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "1",
    "kanji": "&#26356;",
    "onyomi": "KOU",
    "kunyomi": "sara/ sara(ni)/ fu(keru)/ fu(kasu)",
    "portugues": "ficar atrasado, horário noturno, certamente"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "120",
    "kanji": "&#32013;",
    "onyomi": "NOU/ NAT-/ NA/ NAN/ TOU",
    "kunyomi": "osa(meru)/ -osa(meru)/ osa(maru)",
    "portugues": "acordo, obtem, colheita, pagamento, oferta, loja"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "46",
    "kanji": "&#28845;",
    "onyomi": "TAN",
    "kunyomi": "sumi",
    "portugues": "carvão"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "140",
    "kanji": "&#21215;",
    "onyomi": "BO",
    "kunyomi": "tsuno(ru)",
    "portugues": "recrutar, campanha, juntar (contribuições), alistar, ficar violento"
  },
  {
    "nivel": "6",
    "tracos": "14",
    "bushu": "140",
    "kanji": "&#26286;",
    "onyomi": "BO",
    "kunyomi": "ku(reru)/ ku(rasu)",
    "portugues": "meio de vida, ganhar a vida, gastar tempo"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "75",
    "kanji": "&#26800;",
    "onyomi": "KAI",
    "kunyomi": "kase",
    "portugues": "artefato, trava, máquina, instrumento"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "62",
    "kanji": "&#23041;",
    "onyomi": "I",
    "kunyomi": "odo(su)/ odo(shi)/ odo(kasu)",
    "portugues": "intimidar, dignidade, majestade, ameaça, ameaçar"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "96",
    "kanji": "&#29872;",
    "onyomi": "KAN",
    "kunyomi": "wa",
    "portugues": "argola, círculo, elo, roda"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "124",
    "kanji": "&#32764;",
    "onyomi": "YOKU",
    "kunyomi": "tsubasa",
    "portugues": "asa, avião, flanco"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28286;",
    "onyomi": "WAN",
    "kunyomi": "irie",
    "portugues": "golfo, baía, pequena enseada"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "60",
    "kanji": "&#24500;",
    "onyomi": "CHOU/ CHI",
    "kunyomi": "shirushi",
    "portugues": "indicações, sinal, presságios, sintoma, colecionar, procurar, referir-se, perguntar"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "5",
    "kanji": "&#20083;",
    "onyomi": "NYUU",
    "kunyomi": "chichi/ chi",
    "portugues": "leite, peitos"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "113",
    "kanji": "&#31085;",
    "onyomi": "SAI",
    "kunyomi": "matsu(ru)/ matsu(ri)/ matsuri",
    "portugues": "Festival, ritual, oferecer orações, celebrar, deificar, santificar, adorar"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "116",
    "kanji": "&#31379;",
    "onyomi": "SOU/ SU",
    "kunyomi": "mado/ tenmado/ kemudashi",
    "portugues": "janela, vidraça"
  },
  {
    "nivel": "4",
    "tracos": "15",
    "bushu": "159",
    "kanji": "&#36650;",
    "onyomi": "RIN&#12288;",
    "kunyomi": "wa",
    "portugues": "roda, argola, círculo, elo, laço, comtador para rodas e flores"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "12",
    "kanji": "&#26222;",
    "onyomi": "FU",
    "kunyomi": "amane(ku)/ amaneshi",
    "portugues": "vasto,universal(mente), geralmente, Prussia"
  },
  {
    "nivel": "3",
    "tracos": "7",
    "bushu": "151",
    "kanji": "&#35910;",
    "onyomi": "TOU/ ZU",
    "kunyomi": "mame/ mame-",
    "portugues": "feijões, ervilha, nanico"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "167",
    "kanji": "&#37489;",
    "onyomi": "KOU",
    "kunyomi": "aragane",
    "portugues": "mineral, minerar"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "49",
    "kanji": "&#24059;",
    "onyomi": "KAN/ KEN",
    "kunyomi": "ma(ku)/ maki/ ma(ki)",
    "portugues": "rolo, volume, livro, parte, enrolar, laço, mola, sufixo para contagem de  para textos (em livros)"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "104",
    "kanji": "&#30171;",
    "onyomi": "TSUU",
    "kunyomi": "ita(i)/ ita(mu)/ ita(mashii)/ ita(meru)",
    "portugues": "dor, ferida, injúria, contusão"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "61",
    "kanji": "&#24693;",
    "onyomi": "KEI/ E",
    "kunyomi": "megu(mu)/ megu(mi)",
    "portugues": "favor, benção, graça, gentileza"
  },
  {
    "nivel": "5",
    "tracos": "15",
    "bushu": "154",
    "kanji": "&#36059;",
    "onyomi": "SAN",
    "kunyomi": "tasu(keru)/ tata(eru)",
    "portugues": "aprovar, elogiar, título ou inscrição em gravura, auxiliar, concordar com"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "8",
    "kanji": "&#20805;",
    "onyomi": "JUU",
    "kunyomi": "a(teru)/ mi(tasu)",
    "portugues": "divida, encher"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "61",
    "kanji": "&#24745;",
    "onyomi": "NOU",
    "kunyomi": "naya(mu)/ naya(masu)/ naya(mashii)/ nayami",
    "portugues": "dificuldade, preocupação, perigo, doença"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "140",
    "kanji": "&#33655;",
    "onyomi": "KA",
    "kunyomi": "ni",
    "portugues": "bagagem, pau para carregar no ombro, carregar (carga), carregar (arma), carga"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "9",
    "kanji": "&#20405;",
    "onyomi": "SHIN",
    "kunyomi": "oka(su)",
    "portugues": "usurpar, invadir, raid, transgredir, violar"
  },
  {
    "nivel": "6",
    "tracos": "16",
    "bushu": "64",
    "kanji": "&#25805;",
    "onyomi": "SOU/ SAN",
    "kunyomi": "misao/ ayatsu(ru)",
    "portugues": "manobra, manipular, opera, pilotar, castidade, virgindade, fidelidade"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "133",
    "kanji": "&#21040;",
    "onyomi": "TOU",
    "kunyomi": "ita(ru)",
    "portugues": "chegar, continuar, alcançar, atingir, resultar em"
  },
  {
    "nivel": "5",
    "tracos": "12",
    "bushu": "154",
    "kanji": "&#36031;",
    "onyomi": "BOU",
    "kunyomi": " ",
    "portugues": "comercializar, trocar"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "85",
    "kanji": "&#28716;",
    "onyomi": "RAI",
    "kunyomi": "se",
    "portugues": "corredeiras, corrente, torrente, baixios, banco de areia"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "115",
    "kanji": "&#31168;",
    "onyomi": "SHUU",
    "kunyomi": "hii(deru)",
    "portugues": "superar, excelência, beleza, superação"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "75",
    "kanji": "&#26564;",
    "onyomi": "HEI",
    "kunyomi": "gara/ e/ tsuka",
    "portugues": "projeto, modelo, construção, natureza, cabo, manivela, maçaneta, puxador, cabo"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "120",
    "kanji": "&#32057;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "Introduzir, herdar, ajudar"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "85",
    "kanji": "&#27973;",
    "onyomi": "SEN",
    "kunyomi": "asa(i)",
    "portugues": "raso, frívolo, superficial, desprezível, obsceno"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "118",
    "kanji": "&#31558;",
    "onyomi": "HITSU",
    "kunyomi": "fude",
    "portugues": "pincel de escrever, escrever, pincel, manuscrito"
  },
  {
    "nivel": "3",
    "tracos": "10",
    "bushu": "4",
    "kanji": "&#21193;",
    "onyomi": "BEN",
    "kunyomi": "tsuto(meru)",
    "portugues": "esforço"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "154",
    "kanji": "&#36008;",
    "onyomi": "KA",
    "kunyomi": " ",
    "portugues": "frete, bens, propriedade"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "18",
    "kanji": "&#21050;",
    "onyomi": "SHI",
    "kunyomi": "sa(su)/ sa(saru)/ sa(shi)/ sashi/ toge",
    "portugues": "espinho, furar, esfaquear, picar, picar cartão"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "180",
    "kanji": "&#31456;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "insígnia, capítulo, composição, poema, projeto"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "195",
    "kanji": "&#39770;",
    "onyomi": "GYO",
    "kunyomi": "uo/ sakana/ -zakana",
    "portugues": "peixe"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "64",
    "kanji": "&#25688;",
    "onyomi": "TEKI",
    "kunyomi": "tsu(mu)",
    "portugues": "pouco, escolher, puxão, arrumar,  recomeçar"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "9",
    "kanji": "&#20687;",
    "onyomi": "ZOU",
    "kunyomi": " ",
    "portugues": "estátua, gravura, imagem, figura, retrato"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "38",
    "kanji": "&#23064;",
    "onyomi": "JOU",
    "kunyomi": "musume/ ko",
    "portugues": "filha, moça"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "91",
    "kanji": "&#29256;",
    "onyomi": "HAN",
    "kunyomi": " ",
    "portugues": "imprimir, edição, impressão, rótulo"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "40",
    "kanji": "&#23459;",
    "onyomi": "UM",
    "kunyomi": "notamu(u)/ notama(waku)",
    "portugues": "proclamar, dizer, anunciar"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "18",
    "kanji": "&#21051;",
    "onyomi": "KOKU",
    "kunyomi": "kiza(mu)/ kiza(mi)",
    "portugues": "escultura, picar, fatiar, moer, esculpir"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "120",
    "kanji": "&#32000;",
    "onyomi": "KI",
    "kunyomi": " ",
    "portugues": "crônica, contos, narrativa, história, anais, período geológico"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "163",
    "kanji": "&#37111;",
    "onyomi": "KYOU/ GOU",
    "kunyomi": "sato",
    "portugues": "cidade natal, aldeia, lugar de nascimento, distrito"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "128",
    "kanji": "&#32884;",
    "onyomi": "CHOU/ TEI",
    "kunyomi": "ki(ku)/ yuru(su)",
    "portugues": "escutar, teimoso, investigação cuidadosa, desobediente"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "162",
    "kanji": "&#24033;",
    "onyomi": "JUN",
    "kunyomi": "megu(ru)/ megu(ri)",
    "portugues": "patrulhar, dar uma volta, circunferência"
  },
  {
    "nivel": "2",
    "tracos": "4",
    "bushu": "93",
    "kanji": "&#29275;",
    "onyomi": "GYUU",
    "kunyomi": "ushi/ git--",
    "portugues": "vaca"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "76",
    "kanji": "&#27475;",
    "onyomi": "KAN",
    "kunyomi": "yoroko(bu)",
    "portugues": "deleite, prazer"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "30",
    "kanji": "&#20804;",
    "onyomi": "KEI/ KYOU",
    "kunyomi": "ani",
    "portugues": "irmão mais velho, irmão maior"
  },
  {
    "nivel": "5",
    "tracos": "15",
    "bushu": "66",
    "kanji": "&#25973;",
    "onyomi": "TEKI",
    "kunyomi": "kataki/ kana(u)",
    "portugues": "inimigo, adversário"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "149",
    "kanji": "&#35347;",
    "onyomi": "KUN/ KIN",
    "kunyomi": "oshi(eru)/ yo(mu)/ kun(zuru)",
    "portugues": "instrução, leitura Japonesa de caracteres, explicação, ler"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "37",
    "kanji": "&#22890;",
    "onyomi": "DATSU",
    "kunyomi": "uba(u)",
    "portugues": "roubar, tomar pela força, apropriar-se, pilhar, usurpar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "154",
    "kanji": "&#36009;",
    "onyomi": "HAN",
    "kunyomi": " ",
    "portugues": "negociar, vender, comercializar"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "184",
    "kanji": "&#39154;",
    "onyomi": "IN/ ON",
    "kunyomi": "no(mu)/ -no(mi)",
    "portugues": "beber, fumar, tomar"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "60",
    "kanji": "&#24505;",
    "onyomi": "TETSU",
    "kunyomi": " ",
    "portugues": "penetrar, limpar, furar, ficar acordado ( noite toda)"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "75",
    "kanji": "&#26893;",
    "onyomi": "SHOKU",
    "kunyomi": "u(eru)/ u(waru)",
    "portugues": "planta"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "60",
    "kanji": "&#24459;",
    "onyomi": "RITSU/ RICHI/ RETSU",
    "kunyomi": " ",
    "portugues": "ritmo, lei, regulamento, medida, controle"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "85",
    "kanji": "&#28014;",
    "onyomi": "FU",
    "kunyomi": "u(ku)/ u(kareru)/ u(kabu)/ mu/ u(kaberu)",
    "portugues": "boiando, bóia, subir para superfície"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "30",
    "kanji": "&#21809;",
    "onyomi": "SHOU",
    "kunyomi": "tona(eru)",
    "portugues": "canto, recital, gritar"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "157",
    "kanji": "&#36367;",
    "onyomi": "TOU",
    "kunyomi": "fu(um)/ fu(maeru)",
    "portugues": "passo, atropelar, persistir, avalia, escapar de pagamento"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "18",
    "kanji": "&#21109;",
    "onyomi": "SOU/ SHOU",
    "kunyomi": "tsuku(ru)/ haji(meru)/ kizu/ kezu(shikeru)",
    "portugues": "gênese, ferir, dano, ferido, começo, originar"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "120",
    "kanji": "&#32191;",
    "onyomi": "MEN",
    "kunyomi": "wata",
    "portugues": "algodão"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "64",
    "kanji": "&#25582;",
    "onyomi": "KI",
    "kunyomi": "furu(u)",
    "portugues": "agitar, onda, sacudir, balançar, mexer"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "107",
    "kanji": "&#30382;",
    "onyomi": "HI",
    "kunyomi": "kawa",
    "portugues": "pelego, pele, esconder, couro"
  },
  {
    "nivel": "2",
    "tracos": "12",
    "bushu": "120",
    "kanji": "&#32117;",
    "onyomi": "KAI/ E",
    "kunyomi": " ",
    "portugues": "gravura, desenho, pintura, esboço"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "113",
    "kanji": "&#31069;",
    "onyomi": "SHUKU/ SHUU",
    "kunyomi": "iwa(u)",
    "portugues": "celebre, congratula"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "145",
    "kanji": "&#34955;",
    "onyomi": "TAI/ JÁ",
    "kunyomi": "fukuro",
    "portugues": "sacola, bolsa, saco"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "140",
    "kanji": "&#33775;",
    "onyomi": "KA/ KE",
    "kunyomi": "hana",
    "portugues": "esplendor, flor, pétala, brilho, lustre, ostentação, gritante, alegre, maravilhoso"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "4",
    "kanji": "&#30475;",
    "onyomi": "KAN",
    "kunyomi": "mi(ru)",
    "portugues": "observar, superviosionar"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "12",
    "kanji": "&#20860;",
    "onyomi": "KEN",
    "kunyomi": "ka(neru)/ -ka(neru)",
    "portugues": "concorrentemente, e"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "211",
    "kanji": "&#40802;",
    "onyomi": "REI",
    "kunyomi": "yowa(i)/ toshi",
    "portugues": "idade"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "64",
    "kanji": "&#25613;",
    "onyomi": "SON",
    "kunyomi": "soko(nau)/ sokona(u)/ -soko(nau)/ soko(neru)/ -soko(neru)",
    "portugues": "prejuízo, perda, desvantagem, ferida, ferir"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "8",
    "kanji": "&#26820;",
    "onyomi": "KI",
    "kunyomi": "su(teru)",
    "portugues": "desembaraço, gastar, descartar, pedir demissão, rejeitar, sacrifício"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "154",
    "kanji": "&#36104;",
    "onyomi": "ZOU/ SOU",
    "kunyomi": "oku(ru)",
    "portugues": "presentes, enviar, dar, premiar, conferir a, apresentar alguma coisa"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "8",
    "kanji": "&#24093;",
    "onyomi": "TEI",
    "kunyomi": "mikado",
    "portugues": "soberano, o imperador, Deus, criador"
  },
  {
    "nivel": "3",
    "tracos": "13",
    "bushu": "72",
    "kanji": "&#26263;",
    "onyomi": "AN",
    "kunyomi": "kura(i)",
    "portugues": "escuridão, desaparecer, sombra, informal, escurecer, cegar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "38",
    "kanji": "&#22937;",
    "onyomi": "MYOU/ BYOU",
    "kunyomi": "tae",
    "portugues": "estranho,seleto, afeminado, mistério, milagre, charmoso, delicado, excelente"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "47",
    "kanji": "&#28797;",
    "onyomi": "SAI",
    "kunyomi": "wazawa(i)",
    "portugues": "desastre, calamidade, desgraça, maldição, mau"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "120",
    "kanji": "&#32027;",
    "onyomi": "FUN",
    "kunyomi": "magi(reru)/ -magi(re)/ magi(rasu)/ magi(rawasu)/ magi(rawashii)",
    "portugues": "distrair, ser incorreto para, desviar-se, desviar"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "106",
    "kanji": "&#27849;",
    "onyomi": "SEN",
    "kunyomi": "izumi",
    "portugues": "fonte, nascente"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "112",
    "kanji": "&#30722;",
    "onyomi": "UM/ SHA",
    "kunyomi": "suna",
    "portugues": "areia"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "184",
    "kanji": "&#39166;",
    "onyomi": "SHOKU",
    "kunyomi": "kaza(ru)/ kaza(ri)",
    "portugues": "decorar, ornamento, adornar, embelezar"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "40",
    "kanji": "&#23447;",
    "onyomi": "SHUU/ SOU",
    "kunyomi": "mune",
    "portugues": "religião, seita, denominação, ponto principal, origem, essência"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#33294;",
    "onyomi": "SHA/ SEKI",
    "kunyomi": "yado(ru)",
    "portugues": "casa de campo, pousada, cabana, casa, mansão"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "40",
    "kanji": "&#23453;",
    "onyomi": "HOU",
    "kunyomi": "takara",
    "portugues": "tesouro, riqueza, valores"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "61",
    "kanji": "&#24555;",
    "onyomi": "KAI",
    "kunyomi": "kokoroyo(i)",
    "portugues": "confortável, agradável, alegre"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25551;",
    "onyomi": "BYOU",
    "kunyomi": "ega(ku)/ ka(ku)",
    "portugues": "esboço, compor, escrever, desenhar, pintura"
  },
  {
    "nivel": "8",
    "tracos": "20",
    "bushu": "149",
    "kanji": "&#35698;",
    "onyomi": "JOU",
    "kunyomi": "yuzu(ru)",
    "portugues": "adiar, mudança, transferir, levar"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "140",
    "kanji": "&#22818;",
    "onyomi": "HÁ/ BOU",
    "kunyomi": "yume/ yume(miru)/ kura(i)",
    "portugues": "sonho, visão, ilusão"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "170",
    "kanji": "&#38563;",
    "onyomi": "RIN",
    "kunyomi": "tona(ru)/ tonari",
    "portugues": "vizinho"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "12",
    "kanji": "&#24351;",
    "onyomi": "TEI/ UM/ DE",
    "kunyomi": "oto_to",
    "portugues": "irmão mais jovem"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "64",
    "kanji": "&#25562;",
    "onyomi": "YOU",
    "kunyomi": "a(geru)/ -a(ge)/ a(garu)",
    "portugues": "levantar, fritar em gordura funda"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "75",
    "kanji": "&#26757;",
    "onyomi": "BAI",
    "kunyomi": "ume",
    "portugues": "ameixa"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "41",
    "kanji": "&#23553;",
    "onyomi": "FUU/ HOU",
    "kunyomi": " ",
    "portugues": "carimbo, fechamento"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "145",
    "kanji": "&#35079;",
    "onyomi": "FUKU",
    "kunyomi": " ",
    "portugues": "duplicação, duplicar, composto, múltiplo"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "188",
    "kanji": "&#39592;",
    "onyomi": "KOTSU",
    "kunyomi": "hone",
    "portugues": "esqueleto, osso, permanecer, moldura"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "115",
    "kanji": "&#31192;",
    "onyomi": "HI",
    "kunyomi": "hi(meru)/ kaku(su)",
    "portugues": "segredo, esconder"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "61",
    "kanji": "&#24910;",
    "onyomi": "SHIN",
    "kunyomi": "tsutsushi(há)/ tsutsushi/ tsutsushi(mi)",
    "portugues": "humildade, cuidado, discreto, prudente"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "9",
    "kanji": "&#20767;",
    "onyomi": "SHOU",
    "kunyomi": "tsuguna(u)",
    "portugues": "reparação, compensação, recompensa, redimir, resgate"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "175",
    "kanji": "&#24754;",
    "onyomi": "HI",
    "kunyomi": "kana(shii)/ kana(shimu)",
    "portugues": "célula de cadeia, enlutar, triste, deplorar, lamentar"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "32",
    "kanji": "&#22633;",
    "onyomi": "EN",
    "kunyomi": "shio",
    "portugues": "sal"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "9",
    "kanji": "&#20419;",
    "onyomi": "SOKU",
    "kunyomi": "unaga(su)",
    "portugues": "estimular, desejo, imprensa, demanda, incitar"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "85",
    "kanji": "&#27927;",
    "onyomi": "SEN",
    "kunyomi": "ara(u)",
    "portugues": "lavar, indagar, sondar"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "120",
    "kanji": "&#32020;",
    "onyomi": "JUN",
    "kunyomi": " ",
    "portugues": "genuíno, pureza, inocência, líquido (lucro)"
  },
  {
    "nivel": "6",
    "tracos": "17",
    "bushu": "4",
    "kanji": "&#21427;",
    "onyomi": "GEN/ GON",
    "kunyomi": "ogoso(ka)/ kibi(shii)/ ika(meshii)/ itsukushi",
    "portugues": "severo, estrito, seriedade, rigidez"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "32",
    "kanji": "&#22721;",
    "onyomi": "HEKI",
    "kunyomi": "kabe",
    "portugues": "parede, forro, cerca"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "10",
    "kanji": "&#20813;",
    "onyomi": "MEN",
    "kunyomi": "manuka(reru)/ manuga(reru)",
    "portugues": "desculpar, demissão"
  },
  {
    "nivel": "6",
    "tracos": "6",
    "bushu": "133",
    "kanji": "&#33267;",
    "onyomi": "SHI",
    "kunyomi": "ita(ru)",
    "portugues": "clímax, chegar, continuar, alcançar, atingir, resultar em"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "4",
    "kanji": "&#23731;",
    "onyomi": "GAKU",
    "kunyomi": "take",
    "portugues": "ponto, pico, montanha"
  },
  {
    "nivel": "6",
    "tracos": "14",
    "bushu": "149",
    "kanji": "&#35492;",
    "onyomi": "GO",
    "kunyomi": "ayama(ru)/ -ayama(ru)",
    "portugues": "erro, errar, fazer errado, enganar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "80",
    "kanji": "&#36011;",
    "onyomi": "KAN",
    "kunyomi": "tsuranu(ku)/ nu(ku)/ nuki",
    "portugues": "furar, medida de peso com 8 1/ 3 lbs, penetrar, gancho"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "149",
    "kanji": "&#35386;",
    "onyomi": "SHIN",
    "kunyomi": "mi(ru)",
    "portugues": "checkup, vendo, diagnosticar, examinar"
  },
  {
    "nivel": "6",
    "tracos": "5",
    "bushu": "52",
    "kanji": "&#24188;",
    "onyomi": "YOU",
    "kunyomi": "osana(i)",
    "portugues": "infância"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "75",
    "kanji": "&#26611;",
    "onyomi": "RYUU",
    "kunyomi": "yanagi",
    "portugues": "salgueiro"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "120",
    "kanji": "&#32330;",
    "onyomi": "COM",
    "kunyomi": " ",
    "portugues": "delgado, fino, kimono fino (espessura)"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "21",
    "kanji": "&#26088;",
    "onyomi": "SHI",
    "kunyomi": "mune/ uma(i)",
    "portugues": "delicioso, sabor, mostra um gosto para,  vontade, inteligente, perito"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "170",
    "kanji": "&#38525;",
    "onyomi": "YOU",
    "kunyomi": "hi",
    "portugues": "brilho do sol, princípio do yang, positivo, masculino, paraíso, dia"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "85",
    "kanji": "&#28511;",
    "onyomi": "SEKI",
    "kunyomi": "kata/ -gata",
    "portugues": "lagoa"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "66",
    "kanji": "&#25975;",
    "onyomi": "FU",
    "kunyomi": "shi(ku)/ -shi(ki)",
    "portugues": "espalhar, pavimentar, assentar, promulgar"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "2",
    "kanji": "&#30002;",
    "onyomi": "KOU/ KAN/ KA",
    "kunyomi": "kinoe",
    "portugues": "armadura, alto (voz), Um grau, umterior, peito do pé, carapaça"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "173",
    "kanji": "&#38695;",
    "onyomi": "UM/ BOU/ BU",
    "kunyomi": "kiri",
    "portugues": "nevoeiro, névoa, neblina"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "61",
    "kanji": "&#24739;",
    "onyomi": "KAN",
    "kunyomi": "wazura(u)",
    "portugues": "aflição, doença, sofrer de, estar mal"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "169",
    "kanji": "&#38281;",
    "onyomi": "HEI",
    "kunyomi": "to(jiru)/ to(zasu)/ shi(meru)/ shi(maru)/ ta(teru)",
    "portugues": "fechado, fechar"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "3",
    "kanji": "&#28858;",
    "onyomi": "I",
    "kunyomi": "tame/ na(ru)/ na(su)/ su(ru)/ tari/ tsuku(ru)/ nari",
    "portugues": "mudança, , benefício, bem-estar, é de uso,  tentativa, prática, custo, servir para, bom, vantagem, como um resultado de"
  },
  {
    "nivel": "5",
    "tracos": "5",
    "bushu": "51",
    "kanji": "&#21002;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "publicar, gravar, cunhar"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "130",
    "kanji": "&#33016;",
    "onyomi": "KYOU",
    "kunyomi": "mune/ muna-",
    "portugues": "seio, peito, tórax, coração, sentimentos"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "167",
    "kanji": "&#37549;",
    "onyomi": "SEN/ ZEN",
    "kunyomi": "zeni/ suki",
    "portugues": "moeda, .01 iene, dinheiro"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "94",
    "kanji": "&#29486;",
    "onyomi": "KEN/ KON",
    "kunyomi": "tatematsu(ru)",
    "portugues": "oferta, sufixo p/ contagem  de bebidas, presente, oferecer"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "86",
    "kanji": "&#29017;",
    "onyomi": "HÁ",
    "kunyomi": "kemu(ru)/ kemuri/ kemu(i)",
    "portugues": "fumaça"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "8",
    "kanji": "&#35946;",
    "onyomi": "GOU",
    "kunyomi": "era(i)",
    "portugues": "predominar, grande, poderoso, superação, Austrália"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "156",
    "kanji": "&#36229;",
    "onyomi": "CHOU",
    "kunyomi": "ko(eru)/ ko(su)",
    "portugues": "transcender, ótimo, ultra-, super-"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20276;",
    "onyomi": "HAN/ BAN",
    "kunyomi": "tomona(u)",
    "portugues": "consorte, acompanhar, trazer com, companheiro"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "19",
    "kanji": "&#21223;",
    "onyomi": "KAN/ KEN",
    "kunyomi": "susu(meru)",
    "portugues": "persuadir, recomendar, aconselhar, emcorajar, oferecer"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "162",
    "kanji": "&#36973;",
    "onyomi": "SOU",
    "kunyomi": "a(u)/ a(waseru)",
    "portugues": "encontro, reunião, festa, associação, entrevista, unir"
  },
  {
    "nivel": "6",
    "tracos": "14",
    "bushu": "149",
    "kanji": "&#35468;",
    "onyomi": "SHI",
    "kunyomi": " ",
    "portugues": "documentos, registros"
  },
  {
    "nivel": "6",
    "tracos": "16",
    "bushu": "75",
    "kanji": "&#27193;",
    "onyomi": "JYUU",
    "kunyomi": "ki",
    "portugues": "madeira-de-lei, madeira"
  },
  {
    "nivel": "6",
    "tracos": "7",
    "bushu": "8",
    "kanji": "&#24536;",
    "onyomi": "BOU",
    "kunyomi": "wasu(reru)",
    "portugues": "esquecer"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "75",
    "kanji": "&#26479;",
    "onyomi": "HAI",
    "kunyomi": "sakazuki",
    "portugues": "copo cheio, garrafa de vinho, garrafa, vivas"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "163",
    "kanji": "&#37030;",
    "onyomi": "HOU",
    "kunyomi": "kuni",
    "portugues": "terra natal, país, Japão"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "150",
    "kanji": "&#27442;",
    "onyomi": "YOKU",
    "kunyomi": "hot-(suru)/ ho(shii)",
    "portugues": "ambicionar, cobiça, ambição, paixão, desejo, almejar"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "86",
    "kanji": "&#29031;",
    "onyomi": "SHOU",
    "kunyomi": "te(ru)/ te(rasu)/ te(reru)",
    "portugues": "iluminar, brilhar, comparar, tímido"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "117",
    "kanji": "&#31461;",
    "onyomi": "DOU",
    "kunyomi": "warabe",
    "portugues": "juvenil, criança"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "120",
    "kanji": "&#32033;",
    "onyomi": "BOU",
    "kunyomi": "tsumu(gu)",
    "portugues": "girar"
  },
  {
    "nivel": "6",
    "tracos": "16",
    "bushu": "119",
    "kanji": "&#31958;",
    "onyomi": "TOU",
    "kunyomi": " ",
    "portugues": "açúcar"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "162",
    "kanji": "&#36996;",
    "onyomi": "KAN",
    "kunyomi": "kae(ru)",
    "portugues": "devolver, voltar"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#20381;",
    "onyomi": "I/ E",
    "kunyomi": "yo(ru)",
    "portugues": "confiante, contar com, consequentemente, portanto, devido para"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "162",
    "kanji": "&#36963;",
    "onyomi": "KEN",
    "kunyomi": "tsuka(u)/ -tsuka(i)/ -dzuka(i)/ tsuka(wasu)/ ya(ru)",
    "portugues": "despacho, enviar, dar, doar, fazer, empreender"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "181",
    "kanji": "&#38928;",
    "onyomi": "YO",
    "kunyomi": "azu(keru)/ azu(karu)",
    "portugues": "depósito, custódia, deixa com, háfiar"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "166",
    "kanji": "&#37324;",
    "onyomi": "RI",
    "kunyomi": "sato",
    "portugues": "aldeia, casa paterna, légua"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "140",
    "kanji": "&#33756;",
    "onyomi": "SAI",
    "kunyomi": "na",
    "portugues": "legume, salada, verduras"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "130",
    "kanji": "&#33109;",
    "onyomi": "WAN",
    "kunyomi": "ude",
    "portugues": "braço, capacidade, talento"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "29",
    "kanji": "&#21452;",
    "onyomi": "SOU",
    "kunyomi": "futa/ tagui/ narabu/ futatsu",
    "portugues": "par, conjunto, comparação, nº  de pares"
  },
  {
    "nivel": "3",
    "tracos": "15",
    "bushu": "118",
    "kanji": "&#31665;",
    "onyomi": "SOU",
    "kunyomi": "hako",
    "portugues": "caixa, tórax, caixa de papelão, depósito, carro de estrada de ferro"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "113",
    "kanji": "&#31036;",
    "onyomi": "REI/ RAI",
    "kunyomi": " ",
    "portugues": "saudação, reverência, cerimônia, agradecimento, remuneração"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "63",
    "kanji": "&#32937;",
    "onyomi": "KEN",
    "kunyomi": "kata",
    "portugues": "ombro"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "138",
    "kanji": "&#21363;",
    "onyomi": "SOKU",
    "kunyomi": "tsu(ku)/ tsu(keru)/ sunawa(chi)",
    "portugues": "instante, a saber, como está, comformar-se, concordar, adaptar-se"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28246;",
    "onyomi": "KO",
    "kunyomi": "mizu_mi",
    "portugues": "lago"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "37",
    "kanji": "&#22865;",
    "onyomi": "KEI",
    "kunyomi": "chigi(ru)",
    "portugues": "penhor, promessa, voto"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "24",
    "kanji": "&#32034;",
    "onyomi": "SAKU",
    "kunyomi": " ",
    "portugues": "corda, cabo"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "200",
    "kanji": "&#25705;",
    "onyomi": "MA",
    "kunyomi": "ma(suru)/ um(suru)/ su(ru)",
    "portugues": "escoriação, raspar, polir, alcance, arranhão"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "184",
    "kanji": "&#39151;",
    "onyomi": "HAN",
    "kunyomi": "meshi",
    "portugues": "refeição, arroz cozido"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "212",
    "kanji": "&#31452;",
    "onyomi": "RYUU/ RYOU/ ROU",
    "kunyomi": "tatsu/ ise",
    "portugues": "dragão imperial"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27891;",
    "onyomi": "EI",
    "kunyomi": "oyo(gu)",
    "portugues": "nadar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "40",
    "kanji": "&#23517;",
    "onyomi": "SHIN",
    "kunyomi": "ne(ru)/ ne(kasu)/ i(un)/ mitamaya/ ya(meru)",
    "portugues": "sono, descanso, cama, invendável (encalhado)"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "115",
    "kanji": "&#31216;",
    "onyomi": "SHOU",
    "kunyomi": "tata(eru)/ tona(eru)/ a(geru)/ kana(u)/ haka(ri)/ haka(ru)/ home(ru)",
    "portugues": "apelação, elogio, admirar, nome, título, fama"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "62",
    "kanji": "&#25106;",
    "onyomi": "KAI",
    "kunyomi": "imashi(meru)",
    "portugues": "mandamentos"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "173",
    "kanji": "&#38646;",
    "onyomi": "REI",
    "kunyomi": "zero/ kobo(su)/ kobo(reru)",
    "portugues": "zero, entornar, inundação, nada, cifra"
  },
  {
    "nivel": "3",
    "tracos": "13",
    "bushu": "149",
    "kanji": "&#35433;",
    "onyomi": "SHI",
    "kunyomi": " ",
    "portugues": "poema, poesia"
  },
  {
    "nivel": "4",
    "tracos": "5",
    "bushu": "4",
    "kanji": "&#21253;",
    "onyomi": "HOU",
    "kunyomi": "tsutsu(um)/ kuru(um)",
    "portugues": "movimentar, embrulhar, capa, esconde"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "85",
    "kanji": "&#28020;",
    "onyomi": "YOKU",
    "kunyomi": "a(biru)/ a(biseru)",
    "portugues": "banhar, favorecer-se, aquecer-se ao sol"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "118",
    "kanji": "&#31684;",
    "onyomi": "HAN",
    "kunyomi": " ",
    "portugues": "modelo, exemplo, modelo"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "119",
    "kanji": "&#31881;",
    "onyomi": "FUN/ DESHIMEZETORU",
    "kunyomi": "ko/ kona",
    "portugues": "farinha, pó, poeira"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "75",
    "kanji": "&#26525;",
    "onyomi": "SHI",
    "kunyomi": "eda",
    "portugues": "ramagem, ramo, galho, tronco"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "61",
    "kanji": "&#24785;",
    "onyomi": "WAKU",
    "kunyomi": "mado(u)",
    "portugues": "enganar, desilusão, perplexidade"
  },
  {
    "nivel": "4",
    "tracos": "14",
    "bushu": "70",
    "kanji": "&#26071;",
    "onyomi": "KI",
    "kunyomi": "hata",
    "portugues": "bandeira nacional, bandeira, padrão"
  },
  {
    "nivel": "2",
    "tracos": "11",
    "bushu": "201",
    "kanji": "&#40644;",
    "onyomi": "KOU/ OU",
    "kunyomi": "ki/ ko-",
    "portugues": "amarelo"
  },
  {
    "nivel": "5",
    "tracos": "16",
    "bushu": "86",
    "kanji": "&#29123;",
    "onyomi": "NEN",
    "kunyomi": "mo(eru)/ mo(yasu)/ mo(su)",
    "portugues": "queimadura, chama, ardor"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "167",
    "kanji": "&#37507;",
    "onyomi": "JUU",
    "kunyomi": " ",
    "portugues": "armas, arma de fogo"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20498;",
    "onyomi": "TOU",
    "kunyomi": "tao(reru)/ -dao(re)/ tao(su)",
    "portugues": "queda de regime, queda, colapso, gota, deposição"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "12",
    "kanji": "&#20856;",
    "onyomi": "TEN/ DEN",
    "kunyomi": " ",
    "portugues": "código, cerimônia, lei, regra"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "140",
    "kanji": "&#33740;",
    "onyomi": "KIN",
    "kunyomi": " ",
    "portugues": "germe, fungo, bactérias"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "61",
    "kanji": "&#24544;",
    "onyomi": "CHUU",
    "kunyomi": " ",
    "portugues": "lealdade, fidelidade"
  },
  {
    "nivel": "8",
    "tracos": "22",
    "bushu": "187",
    "kanji": "&#39514;",
    "onyomi": "KYOU",
    "kunyomi": "odoro(ku)/ odoro(kasu)",
    "portugues": "maravilha, ser surpreendido, assustadoa, assombrado, maravilhar-se"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "85",
    "kanji": "&#28382;",
    "onyomi": "TAI/ TEI",
    "kunyomi": "todokoo(ru)",
    "portugues": "estagnar, demorar-se, atrasar-se, atraso no pagamento"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25454;",
    "onyomi": "KYO",
    "kunyomi": "su(eru)/ su(waru)",
    "portugues": "conjunto, por uma fundação, instalar, equipar, acocorar-se, sentar-se"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "120",
    "kanji": "&#32321;",
    "onyomi": "HAN",
    "kunyomi": "shige(ru)/ shige(ku)",
    "portugues": "luxuriante, espesso, coberto de vegetação, frequência, complexidade, dificuldade"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "112",
    "kanji": "&#30828;",
    "onyomi": "KOU",
    "kunyomi": "kata(i)",
    "portugues": "duro, rígido"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "50",
    "kanji": "&#24115;",
    "onyomi": "CHOU",
    "kunyomi": "tobari",
    "portugues": "caderno, livro contábil, álbum"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "157",
    "kanji": "&#36362;",
    "onyomi": "YOU",
    "kunyomi": "odo(ru)",
    "portugues": "salto, dança, saltar, pular"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "61",
    "kanji": "&#25031;",
    "onyomi": "KON",
    "kunyomi": "nengo(ro)",
    "portugues": "sociável, espécie, cordial, hospitaleira, cortês"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "154",
    "kanji": "&#36020;",
    "onyomi": "KI",
    "kunyomi": "tatto(i)/ to_to(i)/ tatto(bu)/ to_to(bu)",
    "portugues": "precioso, valor, prêmio, estima, honra"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27875;",
    "onyomi": "KYUU",
    "kunyomi": "na(ku)",
    "portugues": "choro, chorar, lamento"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25298;",
    "onyomi": "KYO/ GO",
    "kunyomi": "koba(mu)",
    "portugues": "repelir, recusar, rejeitar, decadência"
  },
  {
    "nivel": "2",
    "tracos": "12",
    "bushu": "173",
    "kanji": "&#38642;",
    "onyomi": "UN",
    "kunyomi": "kumo/ -gumo",
    "portugues": "nuvem"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27836;",
    "onyomi": "SHOU",
    "kunyomi": "numa",
    "portugues": "pântano, lago, charco, brejo, lagoa"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "104",
    "kanji": "&#30151;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "sintomas, doença"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "149",
    "kanji": "&#35440;",
    "onyomi": "KITSU/ KICHI",
    "kunyomi": "tsu(meru)/ tsu(me)/ -dzu(me)/ tsu(maru)/ tsu(há)",
    "portugues": "empacotado, fechar, pressionar, reprovar, repreender, culpa"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "24",
    "kanji": "&#36617;",
    "onyomi": "SAI",
    "kunyomi": "no(seru)/ no(ru)",
    "portugues": "carga, multiplicação, força, 10 elevado a 44"
  },
  {
    "nivel": "2",
    "tracos": "5",
    "bushu": "111",
    "kanji": "&#30690;",
    "onyomi": "SHI",
    "kunyomi": "ya",
    "portugues": "dardo, flecha"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "75",
    "kanji": "&#26716;",
    "onyomi": "OU/ YOU",
    "kunyomi": "sakura",
    "portugues": "cerejeira"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "19",
    "kanji": "&#21191;",
    "onyomi": "YUU",
    "kunyomi": "isa(um)",
    "portugues": "coragem, torcer, estar em altos espíritos, coragem, heroísmo"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "80",
    "kanji": "&#27602;",
    "onyomi": "DOKU",
    "kunyomi": " ",
    "portugues": "veneno, vírus, envenenamento, germe, dano, injúria, maldade"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "149",
    "kanji": "&#35480;",
    "onyomi": "YUU/ IU",
    "kunyomi": "saso(u)/ izana(u)",
    "portugues": "atrair, primazia, tentação, convidar, perguntar, pedir, seduzir, fascinação"
  },
  {
    "nivel": "6",
    "tracos": "5",
    "bushu": "116",
    "kanji": "&#31348;",
    "onyomi": "KETSU",
    "kunyomi": "ana",
    "portugues": "buraco, orifício, brecha, caverna, gruta"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25511;",
    "onyomi": "KOU",
    "kunyomi": "hika(eru)/ hika(e)",
    "portugues": "retirar, extrair, devolver, privar-se de, ser moderado"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28271;",
    "onyomi": "TOU",
    "kunyomi": "yu",
    "portugues": "água quente, banho, fonte quente"
  },
  {
    "nivel": "6",
    "tracos": "3",
    "bushu": "51",
    "kanji": "&#24178;",
    "onyomi": "KAN",
    "kunyomi": "ho(su)/ ho(shi-)/ -bo(shi)/ hi(ru)",
    "portugues": "sêco, ressecar"
  },
  {
    "nivel": "2",
    "tracos": "14",
    "bushu": "30",
    "kanji": "&#40180;",
    "onyomi": "MEI",
    "kunyomi": "na(ku)/ na(ru)/ na(rasu)",
    "portugues": "gorjeio, choro, latido, som, argola, eco, buzina"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "172",
    "kanji": "&#28966;",
    "onyomi": "SHOU",
    "kunyomi": "ko(geru)/ ko(gasu)/ ko(gareru)/ ase(ru)",
    "portugues": "apressar, impaciente, irritar, queimadura, assadura, danificar"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "120",
    "kanji": "&#32177;",
    "onyomi": "KOU",
    "kunyomi": "tsuna",
    "portugues": "amarrio, classe (gênero em biologia), corda, cabo"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "72",
    "kanji": "&#26367;",
    "onyomi": "TAI",
    "kunyomi": "ka(eru)/ ka(e-)/ ka(waru)",
    "portugues": "troca, reserva, substituto, por-"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "9",
    "kanji": "&#20185;",
    "onyomi": "SEN/ SENTO",
    "kunyomi": " ",
    "portugues": "eremita, mago, centavo"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "167",
    "kanji": "&#37528;",
    "onyomi": "MEI",
    "kunyomi": " ",
    "portugues": "inscrição, assinatura (de artesão)"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "4",
    "kanji": "&#27583;",
    "onyomi": "DEN/ TEN",
    "kunyomi": "tono/ -dono",
    "portugues": "Sr., corredor, mansão, palácio, templo, senhor"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "156",
    "kanji": "&#36259;",
    "onyomi": "SHU",
    "kunyomi": "omomuki/ omomu(ku)",
    "portugues": "essência, continuar para, tender, tornar-se"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "86",
    "kanji": "&#30033;",
    "onyomi": "-",
    "kunyomi": "hata/ hatake/ -batake",
    "portugues": "fazenda, campo, jardim, especialidade, (kokuji)"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "112",
    "kanji": "&#30770;",
    "onyomi": "HOU",
    "kunyomi": " ",
    "portugues": "canhão, arma"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25265;",
    "onyomi": "HOU",
    "kunyomi": "da(ku)/ ida(ku)/ kaka(eru)",
    "portugues": "abraço, abraçar, segura em braços"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "167",
    "kanji": "&#37347;",
    "onyomi": "CHOU",
    "kunyomi": "tsu(ru)/ tsu(ri)/ tsu(ri-)",
    "portugues": "pesca, peixe, pegar, fascinação,   laçar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "200",
    "kanji": "&#40635;",
    "onyomi": "MA/ MAA",
    "kunyomi": "asa",
    "portugues": "cânhamo, linho"
  },
  {
    "nivel": "3",
    "tracos": "8",
    "bushu": "72",
    "kanji": "&#26132;",
    "onyomi": "SEKI/ SHAKU",
    "kunyomi": "mukashi",
    "portugues": "era uma vez , antiquidade, tempos antigos"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "12",
    "kanji": "&#23562;",
    "onyomi": "SON",
    "kunyomi": "tatto(i)/ to_to(i)/ tatto(bu)/ to_to(bu)",
    "portugues": "honrado, precioso, valioso, nobre, exaltado"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25522;",
    "onyomi": "KEI",
    "kunyomi": "kaka(geru)",
    "portugues": "colocar (um aviso), propor, alçar, mostrar, pendurar, publicar, descrever"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "109",
    "kanji": "&#30524;",
    "onyomi": "GAN/ GEN",
    "kunyomi": "manako/ me",
    "portugues": "globo ocular"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "4",
    "kanji": "&#23551;",
    "onyomi": "JU/ SU/ SHUU",
    "kunyomi": "kotobuki/ kotobu(ku)/ kotoho(gu)",
    "portugues": "longevidade, congratulações, vida natural"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "75",
    "kanji": "&#26579;",
    "onyomi": "SEN",
    "kunyomi": "so(meru)/ -zo(me)/ -zome/ so(maru)/ shi(miru)/ -ji(miru)/ shi(mi)/ -shi(meru)",
    "portugues": "tinta, cor, pintura, tingir, impressão"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25448;",
    "onyomi": "SHA",
    "kunyomi": "su(teru)",
    "portugues": "descarte, gastar, desembaraçar, pedir demissão, rejeitado, sacrifício"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "99",
    "kanji": "&#29976;",
    "onyomi": "KAN",
    "kunyomi": "ama(i)/ ama(eru)/ ama(yakasu)/ uma(i)",
    "portugues": "doce, seduzir, mimar, contentar, açucarado"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "72",
    "kanji": "&#26217;",
    "onyomi": "BAN",
    "kunyomi": " ",
    "portugues": "cair da noite, anoitecer, noite"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "75",
    "kanji": "&#26827;",
    "onyomi": "KI",
    "kunyomi": "go",
    "portugues": "peça de xadrez, xadrez japonês, shogi"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "120",
    "kanji": "&#32233;",
    "onyomi": "KAN",
    "kunyomi": "yuru(i)/ yuru(yaka)/ yuru(um)/ yuru(meru)",
    "portugues": "afrouxar, relaxar, diminuir, moderar, facilitar"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "211",
    "kanji": "&#27503;",
    "onyomi": "SHI",
    "kunyomi": "yowai/ ha/ yowa(i)/ yowai(suru)",
    "portugues": "dentes, dentes de engrenagens"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "140",
    "kanji": "&#33738;",
    "onyomi": "KIKU",
    "kunyomi": " ",
    "portugues": "crisântemo"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "64",
    "kanji": "&#25774;",
    "onyomi": "SATSU",
    "kunyomi": "to(ru)/ tsuma(um)/ -do(ri)",
    "portugues": "instantâneo, tirar fotos"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "130",
    "kanji": "&#33136;",
    "onyomi": "YOU",
    "kunyomi": "koshi",
    "portugues": "lombo, cadeiras, cintura, quadris"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "40",
    "kanji": "&#23506;",
    "onyomi": "KAN",
    "kunyomi": "samu(i)",
    "portugues": "frio"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "165",
    "kanji": "&#37320;",
    "onyomi": "SHAKU/ SEKI",
    "kunyomi": "toku/ su(teru)/ yuru(su)",
    "portugues": "explicação"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25475;",
    "onyomi": "SOU/ SHU",
    "kunyomi": "já(ku)",
    "portugues": "varrer, escovar"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "94",
    "kanji": "&#29554;",
    "onyomi": "KAKU",
    "kunyomi": "e(ru)",
    "portugues": "prender, obter, achar, ganhar, adquirir, poder, ser capaz de"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "148",
    "kanji": "&#35302;",
    "onyomi": "SHOKU",
    "kunyomi": "fu(reru)/ sawa(ru)/ sawa",
    "portugues": "contato, tocar, sentir, acesso, proclamar, anunciar, conflito"
  },
  {
    "nivel": "5",
    "tracos": "5",
    "bushu": "20",
    "kanji": "&#21477;",
    "onyomi": "KU",
    "kunyomi": " ",
    "portugues": "frase, cláusula, sentença, passagem, parágrafo"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "120",
    "kanji": "&#32368;",
    "onyomi": "SOU",
    "kunyomi": "ku(ru)",
    "portugues": "curva, bobina, giro, virar (páginas), melhorar, referis-se a"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "32",
    "kanji": "&#22730;",
    "onyomi": "KAI/ E",
    "kunyomi": "kowa(su)/ kowa(reru)/ yabu(ru)",
    "portugues": "demolição, quebrar, destruir"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "149",
    "kanji": "&#35351;",
    "onyomi": "TAKU",
    "kunyomi": "kakotsu(keru)/ kako(tsu)/ kako(tsukeru)",
    "portugues": "consignar, solicitar, confiar, fingir, sugestão"
  },
  {
    "nivel": "3",
    "tracos": "14",
    "bushu": "120",
    "kanji": "&#32209;",
    "onyomi": "RYOKU/ ROKU",
    "kunyomi": "midori",
    "portugues": "verde"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25490;",
    "onyomi": "HAI",
    "kunyomi": " ",
    "portugues": "repudiar, excluir, expelir, rejeitar"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20284;",
    "onyomi": "JI",
    "kunyomi": "ni(ru)/ hi(ru)",
    "portugues": "formação, lembra, falsificar, imitar, conveniente"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "159",
    "kanji": "&#36575;",
    "onyomi": "NAN",
    "kunyomi": "yawa(raka)/ yawa(rakai)",
    "portugues": "macio"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "163",
    "kanji": "&#37048;",
    "onyomi": "TEI",
    "kunyomi": "yashiki",
    "portugues": "residência, mansão"
  },
  {
    "nivel": "6",
    "tracos": "15",
    "bushu": "85",
    "kanji": "&#28526;",
    "onyomi": "CHOU",
    "kunyomi": "shio/ ushio",
    "portugues": "maré, água salgada, oportunidade"
  },
  {
    "nivel": "8",
    "tracos": "21",
    "bushu": "173",
    "kanji": "&#38706;",
    "onyomi": "RO/ ROU",
    "kunyomi": "tsuyu",
    "portugues": "orvalho, lágrimas, mortalidade, fragilidade"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "18",
    "kanji": "&#21091;",
    "onyomi": "KEN",
    "kunyomi": "tsurugi",
    "portugues": "sabre, espada, lâmina, ponteiro de relógio"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "157",
    "kanji": "&#36317;",
    "onyomi": "KYO",
    "kunyomi": " ",
    "portugues": "longa distância"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "26",
    "kanji": "&#21368;",
    "onyomi": "SHA",
    "kunyomi": "oro(su)/ oroshi/ oro(shi)",
    "portugues": "venda por atacado"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "64",
    "kanji": "&#25764;",
    "onyomi": "TETSU",
    "kunyomi": " ",
    "portugues": "remover, retirar, desarmar, desmantelar, rejeitar, excluir"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "194",
    "kanji": "&#39740;",
    "onyomi": "KI",
    "kunyomi": "oni/ oni-",
    "portugues": "fantasma, diabo, demônio"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "96",
    "kanji": "&#29645;",
    "onyomi": "CHIN",
    "kunyomi": "mezura(shii)/ takara",
    "portugues": "estranho, curioso, raro"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "162",
    "kanji": "&#36855;",
    "onyomi": "MEI",
    "kunyomi": "mayo(u)",
    "portugues": "desviado, estar perplexo, em dúvida, perdido, errar, ilusão"
  },
  {
    "nivel": "8",
    "tracos": "22",
    "bushu": "212",
    "kanji": "&#35186;",
    "onyomi": "SHUU",
    "kunyomi": "oso(u)",
    "portugues": "ataque, avançar, ser bem-sucedido"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "120",
    "kanji": "&#32121;",
    "onyomi": "KEN",
    "kunyomi": "kinu",
    "portugues": "seda"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "60",
    "kanji": "&#24494;",
    "onyomi": "BI",
    "kunyomi": "kasu(ka)",
    "portugues": "delicado, miudeza, insignificancia"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "93",
    "kanji": "&#29287;",
    "onyomi": "BOKU",
    "kunyomi": "maki",
    "portugues": "raça, importar-se , guiar, alimentar, pastoreio"
  },
  {
    "nivel": "5",
    "tracos": "17",
    "bushu": "149",
    "kanji": "&#35613;",
    "onyomi": "SHA",
    "kunyomi": "ayama(ru)",
    "portugues": "pedir desculpas, agradecer, recusar"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "72",
    "kanji": "&#26262;",
    "onyomi": "DAN/ NON",
    "kunyomi": "atata(ka)/ atata(kai)/ atata(maru)/ atata(meru)",
    "portugues": "caloroso"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "149",
    "kanji": "&#35463;",
    "onyomi": "KO",
    "kunyomi": "hoko(ru)",
    "portugues": "contar vantagem, estar orgulhoso, orgulho, triunfantemente"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27850;",
    "onyomi": "HAKU",
    "kunyomi": "to(maru)/ to(meru)",
    "portugues": "durante a noite, propor, navegar ancorado, estadia de 3 dias"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "53",
    "kanji": "&#24202;",
    "onyomi": "SHOU",
    "kunyomi": "toko/ yuka",
    "portugues": "cama, andar, estofamento, tatami"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "130",
    "kanji": "&#33050;",
    "onyomi": "KYAKU/ KYA/ KAKU",
    "kunyomi": "ashi",
    "portugues": "derrapagens, perna, armação"
  },
  {
    "nivel": "6",
    "tracos": "19",
    "bushu": "130",
    "kanji": "&#33235;",
    "onyomi": "ZOU",
    "kunyomi": "harawata",
    "portugues": "entranhas, víscera, tripas"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "140",
    "kanji": "&#33538;",
    "onyomi": "MO",
    "kunyomi": "shige(ru)",
    "portugues": "coberto de plantas, cresce forte, luxuriante"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "32",
    "kanji": "&#22346;",
    "onyomi": "BOU/ BOT-",
    "kunyomi": " ",
    "portugues": "menino, residência do padre, padre, seu, seu, ou seu menino"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "167",
    "kanji": "&#37613;",
    "onyomi": "EI",
    "kunyomi": "surudo(i)",
    "portugues": "apontar, afiar, fio, arma, violento, afiado"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "32",
    "kanji": "&#22684;",
    "onyomi": "TSUI",
    "kunyomi": " ",
    "portugues": "colisão, queda"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "149",
    "kanji": "&#35488;",
    "onyomi": "SEI",
    "kunyomi": "makoto",
    "portugues": "sinceridade, advertir, avisar, proíbir, verdade, fidelidade"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "66",
    "kanji": "&#25964;",
    "onyomi": "KEI/ KYOU",
    "kunyomi": "uyama(u)",
    "portugues": "temor, respeito, honra, reverencia"
  },
  {
    "nivel": "3",
    "tracos": "12",
    "bushu": "72",
    "kanji": "&#26257;",
    "onyomi": "SHO",
    "kunyomi": "atsu(i)",
    "portugues": "sufocante, quente, calor de verão"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "61",
    "kanji": "&#24931;",
    "onyomi": "KAN",
    "kunyomi": "na(reru)/ na(rasu)",
    "portugues": "acostumado, acostuma-se a, torna-se experimentado"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28082;",
    "onyomi": "EKI",
    "kunyomi": " ",
    "portugues": "fluido, líquido, suco, graxa, secreção"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "38",
    "kanji": "&#22969;",
    "onyomi": "MAI",
    "kunyomi": "imo_to",
    "portugues": "irmã mais jovem"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "85",
    "kanji": "&#27738;",
    "onyomi": "O",
    "kunyomi": "kega(su)/ kega(reru)/ kega(rawashii)/ yogo(su)/ yogo(reru)/ kitana(i)",
    "portugues": "sujo, poluir, desgraça, estupro, sujar"
  },
  {
    "nivel": "4",
    "tracos": "11",
    "bushu": "3",
    "kanji": "&#24035;",
    "onyomi": "SOU",
    "kunyomi": "su/ su(ku_)",
    "portugues": "ninho, viveiro, colméia, teia, escondrijo"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20467;",
    "onyomi": "HAI",
    "kunyomi": " ",
    "portugues": "haiku, ator"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25496;",
    "onyomi": "KUTSU",
    "kunyomi": "ho(ru)",
    "portugues": "cavar, cova, escavar"
  },
  {
    "nivel": "5",
    "tracos": "11",
    "bushu": "12",
    "kanji": "&#36007;",
    "onyomi": "HIN/ BIN",
    "kunyomi": "mazu(shii)",
    "portugues": "pobreza, pobre"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "93",
    "kanji": "&#29344;",
    "onyomi": "GI/ KI",
    "kunyomi": "ikenie",
    "portugues": "sacrifício"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "142",
    "kanji": "&#34411;",
    "onyomi": "CHUU/ KI",
    "kunyomi": "mushi",
    "portugues": "inseto, bichinho, temperamento"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "85",
    "kanji": "&#28611;",
    "onyomi": "NOU",
    "kunyomi": "ko(i)",
    "portugues": "concentrado, grosso, espesso, não diluído"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "3",
    "kanji": "&#27703;",
    "onyomi": "HYOU",
    "kunyomi": "koori/ hi/ koo(ru)",
    "portugues": "estalactite, gelo, granizo, geada, congela"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "140",
    "kanji": "&#33624;",
    "onyomi": "SOU/ SHOU/ CHAN",
    "kunyomi": "ho_ki/ ogoso(ka)",
    "portugues": "palacete, pousada, casa de campo, mansão feudal"
  },
  {
    "nivel": "8",
    "tracos": "21",
    "bushu": "137",
    "kanji": "&#33382;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "navio de guerra"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "86",
    "kanji": "&#28814;",
    "onyomi": "EN",
    "kunyomi": "honoo",
    "portugues": "inflamação, chama, fogo"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "64",
    "kanji": "&#25361;",
    "onyomi": "CHOU",
    "kunyomi": "ido(um)",
    "portugues": "desafio, lutar para, fazer amor"
  },
  {
    "nivel": "8",
    "tracos": "1",
    "bushu": "5",
    "kanji": "&#20057;",
    "onyomi": "OTSU/ ITSU",
    "kunyomi": "oto-/ kinoto",
    "portugues": "o último, duplicar, engenhoso, estranho"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "9",
    "kanji": "&#20736;",
    "onyomi": "GI",
    "kunyomi": " ",
    "portugues": "cerimônia, regra, romance, caso, uma matéria"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "2",
    "kanji": "&#31899;",
    "onyomi": "SHUKU/ SUKU",
    "kunyomi": "tsutsushi(já)",
    "portugues": "solenemente, calmamente, suavemente"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "87",
    "kanji": "&#22949;",
    "onyomi": "DA",
    "kunyomi": " ",
    "portugues": "suave, paz, corrupção"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "26",
    "kanji": "&#21364;",
    "onyomi": "KYAKU",
    "kunyomi": "kae(tte)/ shirizo(ku)/ shirizo(keru)",
    "portugues": "ao invés, ao contrário, melhor"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "130",
    "kanji": "&#33145;",
    "onyomi": "FUKU",
    "kunyomi": "hara",
    "portugues": "abdômen, estômago, barriga"
  },
  {
    "nivel": "6",
    "tracos": "6",
    "bushu": "30",
    "kanji": "&#21560;",
    "onyomi": "KYUU",
    "kunyomi": "su(u)",
    "portugues": "chupar, inalar, sugar"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "37",
    "kanji": "&#22855;",
    "onyomi": "KI",
    "kunyomi": "ku(shiki)/ aya(shii)/ kushi/ mezura(shii)",
    "portugues": "estranho, estranheza, curiousidade"
  },
  {
    "nivel": "8",
    "tracos": "20",
    "bushu": "61",
    "kanji": "&#25080;",
    "onyomi": "KEN/ KE",
    "kunyomi": "ka(keru)/ ka(karu)",
    "portugues": "suspender, pendurar, 10%, instalar, depender, consultar"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "86",
    "kanji": "&#21234;",
    "onyomi": "KUN",
    "kunyomi": "isao",
    "portugues": "ato meritório, mérito"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "170",
    "kanji": "&#38534;",
    "onyomi": "RYUU",
    "kunyomi": " ",
    "portugues": "corcova, alto, nobre, prosperidade"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "86",
    "kanji": "&#29038;",
    "onyomi": "SHA",
    "kunyomi": "ni(ru)/ -ni/ ni(eru)/ ni(yasu)",
    "portugues": "ferver, cozinhar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "4",
    "kanji": "&#21169;",
    "onyomi": "REI",
    "kunyomi": "hage(um)/ hage(masu)",
    "portugues": "encorajar, estar diligente, inspirar"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "145",
    "kanji": "&#34915;",
    "onyomi": "I/ E",
    "kunyomi": " ",
    "portugues": "vestuário, roupas, vestindo"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25506;",
    "onyomi": "TAN",
    "kunyomi": "sagu(ru)/ saga(su)",
    "portugues": "tatear, pesquisar, procurar"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "159",
    "kanji": "&#36562;",
    "onyomi": "KEN",
    "kunyomi": "noki",
    "portugues": "apartamentos, sufixo para contagem de casas, beiral de telhados"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "24",
    "kanji": "&#20811;",
    "onyomi": "KOKU",
    "kunyomi": "ka(tsu)",
    "portugues": "superar, bondoso, habilmente"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "85",
    "kanji": "&#28508;",
    "onyomi": "UM",
    "kunyomi": "hiso(um)/ mogu(ru)/ kaku(reru)/ kugu(ru)/ hiso(meru)",
    "portugues": "submergir, esconder, ocultar, abaixar (voz), calar"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "120",
    "kanji": "&#32210;",
    "onyomi": "SHO/ CHO",
    "kunyomi": "o/ itoguchi",
    "portugues": "faixa, começo, início, fim, corda, correia"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "59",
    "kanji": "&#24432;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "patente, clarear"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "30",
    "kanji": "&#21483;",
    "onyomi": "KYOU",
    "kunyomi": "sake(bu)",
    "portugues": "grito, exclamar, gritar"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "163",
    "kanji": "&#37066;",
    "onyomi": "KOU",
    "kunyomi": " ",
    "portugues": "periferia, subúrbios, área rural"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "149",
    "kanji": "&#35379;",
    "onyomi": "YAKU",
    "kunyomi": "wake",
    "portugues": "traduzir, razão, circunstância, caso"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "60",
    "kanji": "&#24448;",
    "onyomi": "OU",
    "kunyomi": "i(ku)/ inishie/ saki(ni)/ yu(ku)",
    "portugues": "viagem, caça embora, deixada ir, indo, viagem"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "85",
    "kanji": "&#27784;",
    "onyomi": "CHIN/ JIN",
    "kunyomi": "shizu(um)/ shizu(meru)",
    "portugues": "afundar, submergir, abaixar, deprimir-se, aloés"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "120",
    "kanji": "&#32299;",
    "onyomi": "HOU",
    "kunyomi": "nu(u)",
    "portugues": "costurar, cozer, borda"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "1",
    "kanji": "&#20124;",
    "onyomi": "A/ ASIA",
    "kunyomi": "tsu(gu)",
    "portugues": "Ásia, próxima, o que vem depois, ous"
  },
  {
    "nivel": "5",
    "tracos": "7",
    "bushu": "53",
    "kanji": "&#24207;",
    "onyomi": "JO",
    "kunyomi": "tsui(de)/ tsuide",
    "portugues": "prefácio, começo, pedido, precedência, ocasião, oportunidade, acidentalmente"
  },
  {
    "nivel": "4",
    "tracos": "12",
    "bushu": "154",
    "kanji": "&#36015;",
    "onyomi": "CHO/ CHOU/ TEI/ CHIN/ TOU/ CHI",
    "kunyomi": "ta(meru)/ takuwa(eru)",
    "portugues": "poupança, loja, por em, guardar, usar bigode"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "8",
    "kanji": "&#24651;",
    "onyomi": "REN",
    "kunyomi": "ko(u)/ koi/ koi(shii)",
    "portugues": "romance, apaixonar-se, sentir saudades, sentir falta"
  },
  {
    "nivel": "4",
    "tracos": "4",
    "bushu": "83",
    "kanji": "&#27663;",
    "onyomi": "SHI",
    "kunyomi": "uji/ -uji",
    "portugues": "nome de família, sobrenome, clã"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "126",
    "kanji": "&#32784;",
    "onyomi": "TAI",
    "kunyomi": "ta(eru)",
    "portugues": "a prova de, duradouro"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "110",
    "kanji": "&#26580;",
    "onyomi": "JUU/ NYUU",
    "kunyomi": "yawa(raka)/ yawa(rakai)/ yawa/ yawa(ra)",
    "portugues": "macio, ponto fraco, gentileza, suavidade"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "53",
    "kanji": "&#24266;",
    "onyomi": "ROU",
    "kunyomi": " ",
    "portugues": "corredor, ala, torre"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "149",
    "kanji": "&#35566;",
    "onyomi": "SHI",
    "kunyomi": "haka(ru)",
    "portugues": "consultar-se"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "170",
    "kanji": "&#38459;",
    "onyomi": "SO",
    "kunyomi": "haba(mu)",
    "portugues": "demover, separar de, previnir, obstruir, deter, impedir"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "15",
    "kanji": "&#20941;",
    "onyomi": "TOU",
    "kunyomi": "koo(ru)/ kogo(eru)/ kogo(ru)/ i(teru)/ shi(miru)",
    "portugues": "congelado, congelar, refrigerar"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "109",
    "kanji": "&#30636;",
    "onyomi": "SHUN",
    "kunyomi": "matata(ku)",
    "portugues": "pestanejar, piscar"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "32",
    "kanji": "&#22475;",
    "onyomi": "MAI",
    "kunyomi": "u(meru)/ u(maru)/ u(moreru)/ uzu(meru)/ uzu(maru)/ i(keru)",
    "portugues": "enterrar, ocupar-se, embutido"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "159",
    "kanji": "&#36611;",
    "onyomi": "KAKU/ KOU",
    "kunyomi": "kura(beru)",
    "portugues": "contraste, comparar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "210",
    "kanji": "&#25998;",
    "onyomi": "SAI",
    "kunyomi": "toki/ tsutsushi(já)/ monoimi/ i(já)",
    "portugues": "purificação, comida de Budistas, quarto, adorar, evitar, da mesma forma, semelhante"
  },
  {
    "nivel": "6",
    "tracos": "7",
    "bushu": "4",
    "kanji": "&#21365;",
    "onyomi": "RAN",
    "kunyomi": "tamago",
    "portugues": "ovo, óvulo, desovar, ova de peixe"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "164",
    "kanji": "&#37240;",
    "onyomi": "SAN",
    "kunyomi": "su(i)",
    "portugues": "ácido, amargo, azedo, picante"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "86",
    "kanji": "&#28783;",
    "onyomi": "TOU",
    "kunyomi": "hi/ ho-/ tomoshibi/ tomo(su)/ akari",
    "portugues": "lâmpada, luz, sufixo p/ contagem  de luzes"
  },
  {
    "nivel": "1",
    "tracos": "4",
    "bushu": "94",
    "kanji": "&#29356;",
    "onyomi": "KEN",
    "kunyomi": "inu/ inu-",
    "portugues": "cão"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "25",
    "kanji": "&#35998;",
    "onyomi": "TEI",
    "kunyomi": "sada",
    "portugues": "correto, casto, constância, retidão"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "145",
    "kanji": "&#35010;",
    "onyomi": "RETSU",
    "kunyomi": "sa(ku)/ sa(keru)/ -gi(re)",
    "portugues": "partir, arrancar, lágrimas"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "104",
    "kanji": "&#30130;",
    "onyomi": "HI",
    "kunyomi": "tsuka(reru)/ -dzuka(re)/ tsuka(rasu)",
    "portugues": "exaurido, exausto, cansado"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "112",
    "kanji": "&#30990;",
    "onyomi": "SO",
    "kunyomi": "ishizue",
    "portugues": "pedra angular, pedra de fundação"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "170",
    "kanji": "&#38515;",
    "onyomi": "CHIN",
    "kunyomi": " ",
    "portugues": "exibição, estado, relacionar, explicar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "19",
    "kanji": "&#21208;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "intuição, percepção"
  },
  {
    "nivel": "1",
    "tracos": "6",
    "bushu": "128",
    "kanji": "&#32819;",
    "onyomi": "JI",
    "kunyomi": "mimi",
    "portugues": "ouvido"
  },
  {
    "nivel": "5",
    "tracos": "9",
    "bushu": "113",
    "kanji": "&#31062;",
    "onyomi": "SO",
    "kunyomi": " ",
    "portugues": "antecessor, pioneiro, fundador"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "85",
    "kanji": "&#28057;",
    "onyomi": "RUI/ REI",
    "kunyomi": "namida",
    "portugues": "lágrimas, simpatia"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "122",
    "kanji": "&#32624;",
    "onyomi": "BATSU/ BACHI/ HATSU",
    "kunyomi": "bat-(suru)",
    "portugues": "penalidade, punição"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "119",
    "kanji": "&#31975;",
    "onyomi": "RYOU/ ROU",
    "kunyomi": "kate",
    "portugues": "provisões, comida, pão"
  },
  {
    "nivel": "6",
    "tracos": "7",
    "bushu": "24",
    "kanji": "&#23389;",
    "onyomi": "KOU/ KYOU",
    "kunyomi": " ",
    "portugues": "piedade filial, respeito pelas crianças"
  },
  {
    "nivel": "6",
    "tracos": "3",
    "bushu": "49",
    "kanji": "&#24049;",
    "onyomi": "KO/ KI",
    "kunyomi": "onore/ tsuchinoto",
    "portugues": "próprio, cobra, serpente"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "115",
    "kanji": "&#31295;",
    "onyomi": "KOU",
    "kunyomi": "wara/ shitagaki",
    "portugues": "esboço, cópia, manuscrito, palha"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25269;",
    "onyomi": "TEI",
    "kunyomi": " ",
    "portugues": "resistir, alcançar, tocar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "149",
    "kanji": "&#35465;",
    "onyomi": "YO",
    "kunyomi": "homa(re)/ ho(meru)",
    "portugues": "reputação, elogio, honra, glória"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "172",
    "kanji": "&#38587;",
    "onyomi": "SEKI",
    "kunyomi": " ",
    "portugues": "vasos, peixe, pássaros, flechas, um de um par"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "4",
    "kanji": "&#22857;",
    "onyomi": "HOU/ BU",
    "kunyomi": "tatematsu(ru)/ matsu(ru)/ ho_(zuru)",
    "portugues": "observância, oferecer, presente, dedicar"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "120",
    "kanji": "&#32178;",
    "onyomi": "MOU",
    "kunyomi": "ami",
    "portugues": "enredar, rede"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "78",
    "kanji": "&#27530;",
    "onyomi": "SHU",
    "kunyomi": "koto",
    "portugues": "particularmente, especialmente, excepcionalmente"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "120",
    "kanji": "&#32257;",
    "onyomi": "EN/ -NEN",
    "kunyomi": "fuchi/ fuchido(ru)/ yukari/ yosuga/ heri/ enishi",
    "portugues": "afinidade, relação, conexão, margem, borda, limite, extremidade"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "94",
    "kanji": "&#29467;",
    "onyomi": "MOU",
    "kunyomi": " ",
    "portugues": "feroz, enfurecer, acelerar, tornar-se furioso, selvageria, vigor"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "32",
    "kanji": "&#22727;",
    "onyomi": "DAN/ TAN",
    "kunyomi": " ",
    "portugues": "podium, palco, púlpito"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "156",
    "kanji": "&#36208;",
    "onyomi": "SOU",
    "kunyomi": "hashi(ru)",
    "portugues": "correr, corrida"
  },
  {
    "nivel": "5",
    "tracos": "8",
    "bushu": "130",
    "kanji": "&#32933;",
    "onyomi": "HI",
    "kunyomi": "ko(eru)/ koe/ ko(yasu)/ ko(yashi)/ futo(ru)",
    "portugues": "fertilizar, engordar, fértil, estrume, mimar"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "61",
    "kanji": "&#24537;",
    "onyomi": "BOU/ MOU",
    "kunyomi": "isoga(shii)/ sewa(shii)/ oso(reru)/ ure_rusama",
    "portugues": "ocupado, incansável"
  },
  {
    "nivel": "8",
    "tracos": "20",
    "bushu": "130",
    "kanji": "&#39472;",
    "onyomi": "TOU",
    "kunyomi": " ",
    "portugues": "inflação, avançar, ir"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "194",
    "kanji": "&#39749;",
    "onyomi": "MI",
    "kunyomi": " ",
    "portugues": "fascinação, charme, fascinar"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "4",
    "kanji": "&#19992;",
    "onyomi": "KYUU",
    "kunyomi": "oka",
    "portugues": "morro, colina"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "64",
    "kanji": "&#25499;",
    "onyomi": "KAI/ KEI",
    "kunyomi": "ka(keru)/ -ka(keru)/ ka(ke)/ -ka(ke)/ -ga(ke)/ ka(karu)/ -ka(karu) / -ga(karu)/ ka(kari)/ -ga(kari)/ kakari/ -gakari",
    "portugues": "pendurar, suspender, depender, chegar, imposto"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "85",
    "kanji": "&#28381;",
    "onyomi": "ROU/ SOU",
    "kunyomi": "taki",
    "portugues": "cachoeira, corredeira, cascata"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "109",
    "kanji": "&#30496;",
    "onyomi": "MIN",
    "kunyomi": "nemu(ru)/ nemu(i)",
    "portugues": "sono, morrer, sonolento"
  },
  {
    "nivel": "5",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20206;",
    "onyomi": "KA/ KE",
    "kunyomi": "kari/ kari-",
    "portugues": "fingimento, temporário, interim, assumido (nome), informal"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "115",
    "kanji": "&#31258;",
    "onyomi": "CHI/ JI",
    "kunyomi": "itokenai/ osanai/ okute/ oderu",
    "portugues": "jovem, imaturo"
  },
  {
    "nivel": "6",
    "tracos": "16",
    "bushu": "120",
    "kanji": "&#32294;",
    "onyomi": "JUU",
    "kunyomi": "tate",
    "portugues": "vertical, comprimento, altura, elevado pessoa indulgente, rebelde"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "63",
    "kanji": "&#38599;",
    "onyomi": "KO",
    "kunyomi": "yato(u)",
    "portugues": "emprego, alugar"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "96",
    "kanji": "&#32854;",
    "onyomi": "SEI/ SHOU",
    "kunyomi": "hijiri",
    "portugues": "santo,sagrado, sábio, mestre, padre"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "75",
    "kanji": "&#27010;",
    "onyomi": "GAI",
    "kunyomi": "o_mu(ne)",
    "portugues": "contorno, condição, aproximação, geralmente"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "140",
    "kanji": "&#33459;",
    "onyomi": "HOU",
    "kunyomi": "kanba(shii)",
    "portugues": "perfume, calmante, cheiroso, fragrante"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "140",
    "kanji": "&#22675;",
    "onyomi": "BO",
    "kunyomi": "haka",
    "portugues": "tumba, túmulo"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "39",
    "kanji": "&#23403;",
    "onyomi": "SON",
    "kunyomi": "mago",
    "portugues": "neto, descendentes"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "61",
    "kanji": "&#24618;",
    "onyomi": "KAI/ KE",
    "kunyomi": "aya(shii)/ aya(shimu)",
    "portugues": "suspeito, mistério, aparição"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "64",
    "kanji": "&#25233;",
    "onyomi": "YOKU",
    "kunyomi": "osa(eru)",
    "portugues": "reprimir, bem, agora, no primeiro lugar, empurrar, pressionar, imprenum, carimbo, fazer apesar de"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "199",
    "kanji": "&#40614;",
    "onyomi": "BAKU",
    "kunyomi": "mugi",
    "portugues": "cevada, trigo"
  },
  {
    "nivel": "8",
    "tracos": "20",
    "bushu": "75",
    "kanji": "&#27396;",
    "onyomi": "RAN",
    "kunyomi": "tesuri",
    "portugues": "coluna, corrimão, vazio, espaço"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "19",
    "kanji": "&#33029;",
    "onyomi": "KYOU",
    "kunyomi": "obiya(kasu)/ odo(su)/ odo(kasu)",
    "portugues": "ameaçar, coagir"
  },
  {
    "nivel": "6",
    "tracos": "17",
    "bushu": "147",
    "kanji": "&#35239;",
    "onyomi": "RAN",
    "kunyomi": "mi(ru)",
    "portugues": "ler com atenção, ver"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "181",
    "kanji": "&#38914;",
    "onyomi": "CHOU",
    "kunyomi": "itada(ku)/ itadaki",
    "portugues": "colocar na cabeça, receber, topo da cabeça, topo, reunião de cúpula, pico"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "94",
    "kanji": "&#29421;",
    "onyomi": "KYOU/ KOU",
    "kunyomi": "sema(i)/ seba(meru)/ seba(maru)/ um",
    "portugues": "limitar, estreitar, contrair, apertar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "4",
    "kanji": "&#24427;",
    "onyomi": "CHOU",
    "kunyomi": "ho(ru)/ -bo(ri)",
    "portugues": "cinzelar, esculpir, cinzel"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "75",
    "kanji": "&#26609;",
    "onyomi": "CHUU",
    "kunyomi": "hashira",
    "portugues": "pilar, poste, cilindro, apoio"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "64",
    "kanji": "&#25246;",
    "onyomi": "TAKU",
    "kunyomi": "era(bu)",
    "portugues": "escolher, selecionar, eleger, preferir"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "96",
    "kanji": "&#29677;",
    "onyomi": "HAN",
    "kunyomi": " ",
    "portugues": "esquadra, corpos (mil.), unidade, grupo"
  },
  {
    "nivel": "8",
    "tracos": "21",
    "bushu": "200",
    "kanji": "&#39764;",
    "onyomi": "MA",
    "kunyomi": " ",
    "portugues": "bruxa, demônio, espírito do mal"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "72",
    "kanji": "&#26159;",
    "onyomi": "ZE/ SHI",
    "kunyomi": "kore",
    "portugues": "somente assim, isto, certo, justiça"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "31",
    "kanji": "&#22287;",
    "onyomi": "KEN",
    "kunyomi": "kako(i)",
    "portugues": "esfera, círculo, raio, série"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "53",
    "kanji": "&#33104;",
    "onyomi": "FU",
    "kunyomi": "kusa(ru)/ -kusa(ru)/ kusa(reru)/ kusa(re)/ kusa(rasu)/ kusa(su)",
    "portugues": "prodre, apodrecer, azedar"
  },
  {
    "nivel": "2",
    "tracos": "12",
    "bushu": "72",
    "kanji": "&#26228;",
    "onyomi": "SEI",
    "kunyomi": "ha(reru)/ ha(re)/ ha(re-)/ -ba(re)/ ha(rasu)",
    "portugues": "limpar o tempo"
  },
  {
    "nivel": "5",
    "tracos": "14",
    "bushu": "167",
    "kanji": "&#37509;",
    "onyomi": "DOU",
    "kunyomi": "akagane",
    "portugues": "cobre"
  },
  {
    "nivel": "4",
    "tracos": "6",
    "bushu": "15",
    "kanji": "&#20806;",
    "onyomi": "CHOU",
    "kunyomi": "kiza(su)/ kiza(shi)",
    "portugues": "portento, 10 elevado a 12, trilhão, signo, presságio, sintomas"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "30",
    "kanji": "&#21746;",
    "onyomi": "TETSU",
    "kunyomi": " ",
    "portugues": "filosofia, clarear"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "9",
    "kanji": "&#20426;",
    "onyomi": "SHUN",
    "kunyomi": " ",
    "portugues": "sagaz, gênio, excelência"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "145",
    "kanji": "&#35029;",
    "onyomi": "YUU",
    "kunyomi": " ",
    "portugues": "fértil, rico,abundante"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "75",
    "kanji": "&#26512;",
    "onyomi": "SEKI",
    "kunyomi": " ",
    "portugues": "picar, dividir, lágrima, analisar"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "115",
    "kanji": "&#31209;",
    "onyomi": "CHITSU",
    "kunyomi": " ",
    "portugues": "regularidade, salário, pedido"
  },
  {
    "nivel": "8",
    "tracos": "21",
    "bushu": "181",
    "kanji": "&#39015;",
    "onyomi": "KO",
    "kunyomi": "kaeri(miru)",
    "portugues": "recordar, revisão, auto-examinar, voltar-se"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "138",
    "kanji": "&#26082;",
    "onyomi": "KI",
    "kunyomi": "sude(ni)",
    "portugues": "previamente, já, há muito tempo"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "64",
    "kanji": "&#25658;",
    "onyomi": "KEI",
    "kunyomi": "tazusa(eru)/ tazusa(waru)",
    "portugues": "portátil, carregar (na mão),armado com, trazer consigo"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "61",
    "kanji": "&#24594;",
    "onyomi": "DO/ NU",
    "kunyomi": "ika(ru)/ oko(ru)",
    "portugues": "zangado, ofender-se"
  },
  {
    "nivel": "2",
    "tracos": "6",
    "bushu": "32",
    "kanji": "&#23546;",
    "onyomi": "JI",
    "kunyomi": "tera",
    "portugues": "templo budista"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "93",
    "kanji": "&#29298;",
    "onyomi": "SEI",
    "kunyomi": " ",
    "portugues": "sacrifício animal, oferta"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "169",
    "kanji": "&#38309;",
    "onyomi": "BATSU",
    "kunyomi": " ",
    "portugues": "grupo, linhagem, pedigree, facção, clã"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "85",
    "kanji": "&#28459;",
    "onyomi": "MAN",
    "kunyomi": "migarini",
    "portugues": "desenho animado, involuntariamente, no interesse de a si próprio, corrompido"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "118",
    "kanji": "&#31807;",
    "onyomi": "BO",
    "kunyomi": " ",
    "portugues": "registro, registrar em livros"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "86",
    "kanji": "&#40665;",
    "onyomi": "MOKU/ BOKU",
    "kunyomi": "dama(ru)/ moda(su)",
    "portugues": "silêncio, tornar-se silencioso, parar de falar, deixar como está"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "137",
    "kanji": "&#33351;",
    "onyomi": "TEI",
    "kunyomi": " ",
    "portugues": "barco a remo, pequeno barco"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "30",
    "kanji": "&#21682;",
    "onyomi": "SHO",
    "kunyomi": "sa(ku)/ -zaki",
    "portugues": "flor, florescimento"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "149",
    "kanji": "&#35408;",
    "onyomi": "SA",
    "kunyomi": "itsuwa(ru)",
    "portugues": "mentira, falsidade, enganar, fingir"
  },
  {
    "nivel": "8",
    "tracos": "23",
    "bushu": "167",
    "kanji": "&#37969;",
    "onyomi": "KAN",
    "kunyomi": "kanga(miru)/ kagami",
    "portugues": "espécime, se precaver, aprender o"
  },
  {
    "nivel": "6",
    "tracos": "4",
    "bushu": "9",
    "kanji": "&#20161;",
    "onyomi": "JIN/ NI/ NIN",
    "kunyomi": " ",
    "portugues": "humanidade, virtude, benevolência, caridade, homem, núcleo"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "170",
    "kanji": "&#38543;",
    "onyomi": "ZUI",
    "kunyomi": "manimani/ shitaga(u)",
    "portugues": "seguir, embora, não obstante, enquanto, durante, ambos, obedecer, submeter-se, concordar, ao sabor (das ondas)"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "61",
    "kanji": "&#24525;",
    "onyomi": "NIN",
    "kunyomi": "shino(bu)/ shino(baseru)",
    "portugues": "suporte, carregar, tolerar, esconder, ocultar, espionar, furtivo"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "66",
    "kanji": "&#25935;",
    "onyomi": "BIN",
    "kunyomi": "satoi",
    "portugues": "inteligência, ágil, alerta"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "85",
    "kanji": "&#28357;",
    "onyomi": "METSU",
    "kunyomi": "horo(biru)/ horo(bu)/ horo(bosu)",
    "portugues": "destruir, arruinar, extinguir, golpe"
  },
  {
    "nivel": "5",
    "tracos": "13",
    "bushu": "184",
    "kanji": "&#39164;",
    "onyomi": "SHI",
    "kunyomi": "ka(u)",
    "portugues": "domesticar, levantar, guardar, alimentar"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "149",
    "kanji": "&#35584;",
    "onyomi": "BOU/ MU",
    "kunyomi": "haka(ru)/ tabaka(ru)/ hakarigoto",
    "portugues": "conspirar, engano, impor, plano, inventar, esquema, tem em mente, enganar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "46",
    "kanji": "&#23696;",
    "onyomi": "KI/ GI",
    "kunyomi": " ",
    "portugues": "ramo cortado, bifurcação, cena, arena, teatro"
  },
  {
    "nivel": "8",
    "tracos": "20",
    "bushu": "118",
    "kanji": "&#31821;",
    "onyomi": "SEKI",
    "kunyomi": " ",
    "portugues": "inscrever, registro do domicilio, sócio"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "4",
    "kanji": "&#21047;",
    "onyomi": "SATSU",
    "kunyomi": "su(ru)/ -zu(ri)/ -zuri/ ha(ku)",
    "portugues": "impressão, imprimir"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "61",
    "kanji": "&#24681;",
    "onyomi": "ON",
    "kunyomi": " ",
    "portugues": "graça, gentileza, bondade, favor, misericórdia, benção, benefício"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "94",
    "kanji": "&#29378;",
    "onyomi": "KYOU",
    "kunyomi": "kuru(u)/ kuru(oshii)/ kuruo(shii)",
    "portugues": "lunático, louco, insano, confundir"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28155;",
    "onyomi": "TEN",
    "kunyomi": "so(eru)/ so(u)/ mo(eru)/ mo(u)",
    "portugues": "anexar, acompanhar, casa, terno, reunião, satisfazer, adorna, imitar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "170",
    "kanji": "&#38512;",
    "onyomi": "IN",
    "kunyomi": "kage/ kage(ru)",
    "portugues": "matiz, yin, negativa, órgões sexuais, segredo, sombra"
  },
  {
    "nivel": "8",
    "tracos": "20",
    "bushu": "167",
    "kanji": "&#37912;",
    "onyomi": "SHOU",
    "kunyomi": "kane",
    "portugues": "sino, gongo, carrilhão"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "203",
    "kanji": "&#22696;",
    "onyomi": "BOKU",
    "kunyomi": "sumi",
    "portugues": "tinta preta, tinta da Índia, pau de tinta, nanquin, México"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "170",
    "kanji": "&#38491;",
    "onyomi": "HEI",
    "kunyomi": " ",
    "portugues": "alteza, degraus (do trono)"
  },
  {
    "nivel": "6",
    "tracos": "15",
    "bushu": "149",
    "kanji": "&#35477;",
    "onyomi": "TAN",
    "kunyomi": " ",
    "portugues": "natividade, nascer, decadência, mentira, ser arbitrário"
  },
  {
    "nivel": "2",
    "tracos": "8",
    "bushu": "38",
    "kanji": "&#22985;",
    "onyomi": "SHI",
    "kunyomi": "ane/ haha",
    "portugues": "irmã mais velha"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "173",
    "kanji": "&#38666;",
    "onyomi": "REI/ RYOU",
    "kunyomi": "tama",
    "portugues": "espíritos, alma, fantasmas"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "46",
    "kanji": "&#23792;",
    "onyomi": "HOU",
    "kunyomi": "mine/ ne",
    "portugues": "reunião de cúpula, pico"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "61",
    "kanji": "&#24658;",
    "onyomi": "KOU",
    "kunyomi": "tsune/ tsuneni",
    "portugues": "constância, sempre"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20239;",
    "onyomi": "FUKU",
    "kunyomi": "fu(seru)/ fu(su)",
    "portugues": "prostrado, curva abaixo, proa, capa"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "113",
    "kanji": "&#31049;",
    "onyomi": "SHI",
    "kunyomi": " ",
    "portugues": "bem-estar, felicidade"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "164",
    "kanji": "&#37204;",
    "onyomi": "SUI",
    "kunyomi": "yo(u)/ yo(i)/ yo",
    "portugues": "bêbado, sentir-se mal, envenenado, exaltado, fascinado"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "32",
    "kanji": "&#22615;",
    "onyomi": "-",
    "kunyomi": "nu(ru)/ nu(ri)/ mami(reru)",
    "portugues": "pintura, gesso, emplastar, untar, cobertura"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "59",
    "kanji": "&#24425;",
    "onyomi": "SAI",
    "kunyomi": "irodo(ru)",
    "portugues": "colorindo, pintura, maquilagem"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "75",
    "kanji": "&#26834;",
    "onyomi": "BOU",
    "kunyomi": " ",
    "portugues": "vara, pau,  poste, bastão, ramo"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "140",
    "kanji": "&#33900;",
    "onyomi": "SOU",
    "kunyomi": "ho_mu(ru)",
    "portugues": "enterro, enterra, declive"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "85",
    "kanji": "&#28010;",
    "onyomi": "ROU",
    "kunyomi": " ",
    "portugues": "vagabundando, ondas, vagas"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "18",
    "kanji": "&#21066;",
    "onyomi": "SAKU",
    "kunyomi": "kezu(ru)/ hatsu(ru)/ so(gu)",
    "portugues": "avião, afiar, descascar, aparar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "64",
    "kanji": "&#25569;",
    "onyomi": "AKU",
    "kunyomi": "nigi(ru)",
    "portugues": "agarrar, segurar, moldar sushi, suborno"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "85",
    "kanji": "&#28369;",
    "onyomi": "KATSU/ KOTSU",
    "kunyomi": "sube(ru)/ name(raka)",
    "portugues": "escorregadio, deslizar, escorregar, falhar"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "61",
    "kanji": "&#24944;",
    "onyomi": "I",
    "kunyomi": "nagusa(meru)/ nagusa(um)",
    "portugues": "consolo, divertimento, sedução, torce, levar na esportiva, conforto, consolar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "76",
    "kanji": "&#27450;",
    "onyomi": "GI",
    "kunyomi": "azamu(ku)",
    "portugues": "engano, fraude, iludir"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "210",
    "kanji": "&#21092;",
    "onyomi": "ZAI/ SUI/ SEI",
    "kunyomi": "karu/ kezu(ru)",
    "portugues": "dose, remédio, droga"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "92",
    "kanji": "&#38597;",
    "onyomi": "GA",
    "kunyomi": "miya(bi)",
    "portugues": "elegante, benévolo, gracioso, refinado"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "162",
    "kanji": "&#36935;",
    "onyomi": "GUU",
    "kunyomi": "a(u)",
    "portugues": "entrevista, convite, entreter, receber, lidar com"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "137",
    "kanji": "&#33311;",
    "onyomi": "SHUU",
    "kunyomi": "fune/ funa-/ -bune",
    "portugues": "barco, nave, navio"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "86",
    "kanji": "&#28872;",
    "onyomi": "RETSU",
    "kunyomi": "hage(shii)",
    "portugues": "severo, furioso, veemente, violento,ardente, extremo"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "60",
    "kanji": "&#24452;",
    "onyomi": "KEI",
    "kunyomi": "michi/ komichi/ sashiwatashi/ tadachini",
    "portugues": "diâmetro, caminho, método"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "104",
    "kanji": "&#30178;",
    "onyomi": "RI",
    "kunyomi": " ",
    "portugues": "diarréia"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "42",
    "kanji": "&#36637;",
    "onyomi": "KI",
    "kunyomi": "kagaya(ku)",
    "portugues": "brilho, luzir, centelha, faiscar, piscar"
  },
  {
    "nivel": "8",
    "tracos": "3",
    "bushu": "4",
    "kanji": "&#19976;",
    "onyomi": "JOU",
    "kunyomi": "take/ dake",
    "portugues": "comprimento, 10 pés, medida, sra., dona., altura, estatura, todo, únicamente, isto é tudo, meramente"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "190",
    "kanji": "&#39658;",
    "onyomi": "HATSU",
    "kunyomi": "kami",
    "portugues": "cabelo da cabeça"
  },
  {
    "nivel": "6",
    "tracos": "7",
    "bushu": "4",
    "kanji": "&#25105;",
    "onyomi": "GA",
    "kunyomi": "ware/ wa/ wa(ga-)/ waga-",
    "portugues": "ego, Eu, egoísta, nosso, a si próprio"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "162",
    "kanji": "&#36930;",
    "onyomi": "SUI",
    "kunyomi": "to(geru)/ tsui(ni)",
    "portugues": "consumir, efetuar, atingir, cometer (suicídio)"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "64",
    "kanji": "&#25778;",
    "onyomi": "BOKU",
    "kunyomi": " ",
    "portugues": "tapa, bater, acesso, batida, contar, falar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "54",
    "kanji": "&#24311;",
    "onyomi": "TEI",
    "kunyomi": " ",
    "portugues": "quadras, quadra imperial, escritório de governo"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "85",
    "kanji": "&#27888;",
    "onyomi": "TAI",
    "kunyomi": " ",
    "portugues": "pacífico, calma, paz, fácil, Tailandia"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "24",
    "kanji": "&#20094;",
    "onyomi": "KAN/ KEN",
    "kunyomi": "kawa(ku)/ kawa(kasu)/ ho(su)/ hi(ru)/ inui",
    "portugues": "seca, dessecar, evaporar, paraíso, imperador"
  },
  {
    "nivel": "3",
    "tracos": "13",
    "bushu": "85",
    "kanji": "&#28450;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "sino-, China"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "30",
    "kanji": "&#21931;",
    "onyomi": "KITSU",
    "kunyomi": " ",
    "portugues": "consumir, comer, beber, fumar, receber um golpe"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "48",
    "kanji": "&#24039;",
    "onyomi": "KOU",
    "kunyomi": "taku(mi)/ taku(um)/ uma(i)",
    "portugues": "hábil, engenhoso"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25309;",
    "onyomi": "HAI",
    "kunyomi": "oga(mu)/ oroga(mu)",
    "portugues": "venerar, adorar, orar para"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "61",
    "kanji": "&#24808;",
    "onyomi": "SAN/ ZAN",
    "kunyomi": "miji(me)/ ita(mu)/ mugo(i)",
    "portugues": "desprezível, desastre, crueldade, severo"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "61",
    "kanji": "&#24735;",
    "onyomi": "GO",
    "kunyomi": "sato(ru)",
    "portugues": "Iluminação (budismo), perceber, discernir, compreender, compreende"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "4",
    "kanji": "&#20025;",
    "onyomi": "TAN",
    "kunyomi": "ni",
    "portugues": "ferrugem, colorido, vermelho, pílulas"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "39",
    "kanji": "&#23396;",
    "onyomi": "KO",
    "kunyomi": " ",
    "portugues": "órfão, só"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "149",
    "kanji": "&#35676;",
    "onyomi": "FU",
    "kunyomi": " ",
    "portugues": "nota musical, música, nota, pessoal, tabela, genealogia"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "74",
    "kanji": "&#26391;",
    "onyomi": "ROU",
    "kunyomi": "hoga(raka)/ aki(raka)",
    "portugues": "melódico, limpa, alegre, sereno, brilhante"
  },
  {
    "nivel": "3",
    "tracos": "14",
    "bushu": "209",
    "kanji": "&#40763;",
    "onyomi": "BI",
    "kunyomi": "hana",
    "portugues": "nariz, focinho, tromba"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "38",
    "kanji": "&#22952;",
    "onyomi": "BOU",
    "kunyomi": "samata(geru)",
    "portugues": "perturbar, prevenir, atrasar, obstruir"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "9",
    "kanji": "&#20693;",
    "onyomi": "BOKU",
    "kunyomi": "shimobe",
    "portugues": "me, a mim, eu (masculino)"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "61",
    "kanji": "&#24796;",
    "onyomi": "SEKI",
    "kunyomi": "o(shii)/ o(shimu)",
    "portugues": "compaixão, poupar, frugal, mesquinho"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25293;",
    "onyomi": "HAKU/ HYOU",
    "kunyomi": " ",
    "portugues": "aplauso, batida (música)"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "30",
    "kanji": "&#21807;",
    "onyomi": "YUI/ I",
    "kunyomi": "tada",
    "portugues": "somente, unicamente, meramente, simplesmente"
  },
  {
    "nivel": "5",
    "tracos": "15",
    "bushu": "85",
    "kanji": "&#28500;",
    "onyomi": "KETSU",
    "kunyomi": "isagiyo(i)",
    "portugues": "incorrupto, puro, limpar, correto, galanteador"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25259;",
    "onyomi": "HI",
    "kunyomi": " ",
    "portugues": "expor, abrir"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "61",
    "kanji": "&#24930;",
    "onyomi": "MAN",
    "kunyomi": " ",
    "portugues": "ridículo, preguiçoso"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27877;",
    "onyomi": "DEI/ NAI/ DE/ NI",
    "kunyomi": "doro",
    "portugues": "lama, lodo, aderir, ser anexado"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20469;",
    "onyomi": "HYOU",
    "kunyomi": "tawara",
    "portugues": "bolsa, fardo, sacola, sufixo para contagem de  para bolsas"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "140",
    "kanji": "&#34281;",
    "onyomi": "HAN",
    "kunyomi": " ",
    "portugues": "clã, cerca"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25277;",
    "onyomi": "CHUU",
    "kunyomi": "hiki-",
    "portugues": "puxão, puxar, extrato, superar"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "85",
    "kanji": "&#27735;",
    "onyomi": "KAN",
    "kunyomi": "ase",
    "portugues": "suar, transpirar"
  },
  {
    "nivel": "2",
    "tracos": "2",
    "bushu": "18",
    "kanji": "&#20992;",
    "onyomi": "TOU",
    "kunyomi": "katana/ sori",
    "portugues": "espada, sabre, faca"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "130",
    "kanji": "&#33026;",
    "onyomi": "SHI",
    "kunyomi": "abura",
    "portugues": "gordura, graxa, sêbo, banha, resina, goma, asfalto"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "9",
    "kanji": "&#20553;",
    "onyomi": "I",
    "kunyomi": "era(i)",
    "portugues": "admirável, grandeza, notável, conceituado, excelente, famoso"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "32",
    "kanji": "&#22564;",
    "onyomi": "TEI",
    "kunyomi": "tsutsumi",
    "portugues": "represa, dique"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "4",
    "kanji": "&#21319;",
    "onyomi": "SHOU",
    "kunyomi": "masu",
    "portugues": "medida p/ caixa, 1.8 litro"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "149",
    "kanji": "&#35443;",
    "onyomi": "SHOU",
    "kunyomi": "kuwa(shii)/ tsumabi(raka)",
    "portugues": "detalhado, cheio, bem-informado, preciso"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "81",
    "kanji": "&#30342;",
    "onyomi": "KAI",
    "kunyomi": "mina/ minna",
    "portugues": "todo, tudo"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "12",
    "kanji": "&#21577;",
    "onyomi": "GO",
    "kunyomi": "ku(reru)/ kure",
    "portugues": "dê, fazer alguma coisa para"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "8",
    "kanji": "&#30450;",
    "onyomi": "MOU",
    "kunyomi": "mekura",
    "portugues": "cortina, homem cego, ignorante"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "115",
    "kanji": "&#31311;",
    "onyomi": "ON",
    "kunyomi": "oda(yaka)",
    "portugues": "calma, tranquilidade, moderação"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "61",
    "kanji": "&#25001;",
    "onyomi": "KEI",
    "kunyomi": "iko(i)/ iko(u)",
    "portugues": "recesso, descanso, relaxar, repousar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "112",
    "kanji": "&#30849;",
    "onyomi": "GO",
    "kunyomi": " ",
    "portugues": "jogo de Go"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "130",
    "kanji": "&#35930;",
    "onyomi": "TON",
    "kunyomi": "buta",
    "portugues": "carne de porco, porco"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "85",
    "kanji": "&#27809;",
    "onyomi": "BOTSU/ MOTSU",
    "kunyomi": "obo(reru)/ shizu(um)/ nai",
    "portugues": "afogar, afundar, esconder, cair na mãos de, desaparecer, evaporar"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "4",
    "kanji": "&#21155;",
    "onyomi": "RETSU",
    "kunyomi": "oto(ru)",
    "portugues": "inferioridade, está inferiorizado, piorar"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "4",
    "kanji": "&#20047;",
    "onyomi": "BOU",
    "kunyomi": "tobo(shii)/ tomo(shii)",
    "portugues": "privação, escasso, limitado"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "29",
    "kanji": "&#26705;",
    "onyomi": "SOU",
    "kunyomi": "kuwa",
    "portugues": "amora"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "90",
    "kanji": "&#22766;",
    "onyomi": "SOU",
    "kunyomi": "sakan",
    "portugues": "robusto, másculo, prosperidade"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "96",
    "kanji": "&#29748;",
    "onyomi": "KIN",
    "kunyomi": "koto",
    "portugues": "harpa, koto (mus.)"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "112",
    "kanji": "&#30827;",
    "onyomi": "RYUU",
    "kunyomi": " ",
    "portugues": "enxofre"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "60",
    "kanji": "&#24449;",
    "onyomi": "SEI",
    "kunyomi": " ",
    "portugues": "subjugar, atacar rebeldes, coletar impostos"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "210",
    "kanji": "&#25993;",
    "onyomi": "SEI/ SAI",
    "kunyomi": "soro(u)/ hito(shii)/ hito(shiku)/ ataru/ hayai",
    "portugues": "ajustado, da mesma forma, igual, variedade parecida"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "30",
    "kanji": "&#21766;",
    "onyomi": "SA",
    "kunyomi": "sosonoka(su)",
    "portugues": "tentação, sedução, instigar, promover"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "30",
    "kanji": "&#21843;",
    "onyomi": "KEI",
    "kunyomi": "hira(ku)/ sato(su)",
    "portugues": "revelar, abrir, dizer"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "115",
    "kanji": "&#31298;",
    "onyomi": "SUI",
    "kunyomi": "ho",
    "portugues": "espiga (grão), penacho (planta), crista (onda)"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "85",
    "kanji": "&#27713;",
    "onyomi": "JUU",
    "kunyomi": "shiru/ -shiru",
    "portugues": "sopa, suco, caldo, graxa, molho (carne), pus"
  },
  {
    "nivel": "6",
    "tracos": "3",
    "bushu": "41",
    "kanji": "&#23544;",
    "onyomi": "SUN",
    "kunyomi": " ",
    "portugues": "medição, medida valendo pés/ 10"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "175",
    "kanji": "&#36649;",
    "onyomi": "HAI",
    "kunyomi": "-bara/ yakara/ yakai/ tomogara",
    "portugues": "camarada, companheiro, colega, pessoas"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "48",
    "kanji": "&#36002;",
    "onyomi": "KOU/ KU",
    "kunyomi": "mitsu(gu)",
    "portugues": "tributo, apoiar, financiar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "30",
    "kanji": "&#22022;",
    "onyomi": "TAN",
    "kunyomi": "nage(ku)/ nage(kawashii)",
    "portugues": "suspiro, lamento, pesar"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "44",
    "kanji": "&#23624;",
    "onyomi": "KUTSU",
    "kunyomi": "kaga(mu)/ kaga(meru)",
    "portugues": "encruzilhada, curva, hesitação, submeter"
  },
  {
    "nivel": "3",
    "tracos": "9",
    "bushu": "64",
    "kanji": "&#25342;",
    "onyomi": "SHUU/ JUU",
    "kunyomi": "hiro(u)",
    "portugues": "pegar, juntar, achado, continuar a pé"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "130",
    "kanji": "&#33192;",
    "onyomi": "BOU",
    "kunyomi": "fuku(ramu)/ fuku(reru)",
    "portugues": "inchar, engordar, espesso"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "18",
    "kanji": "&#21104;",
    "onyomi": "JOU",
    "kunyomi": "amatsusae/ ama(ri)/ ama(ru)",
    "portugues": "excedente, além disso"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "44",
    "kanji": "&#23613;",
    "onyomi": "JIN/ SAN",
    "kunyomi": "tsu(kusu)/ -tsu(kusu)/ -dzu(kushi)/ -tsu(ku)/ -dzu(ku)/ -zu(ku)/ tsu(kiru)/ tsu(kasu)/ sakadzuki/ kotogoto(ku)/ tsuka/ tsuki",
    "portugues": "acabar, exaurir, terminar, faz amizade com, servir (alguem)"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "113",
    "kanji": "&#31077;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "auspicioso, felicidade, bons auspícios"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "130",
    "kanji": "&#32925;",
    "onyomi": "KAN",
    "kunyomi": "kimo",
    "portugues": "fígado, vísceras, nervo, chutzpah"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "72",
    "kanji": "&#20882;",
    "onyomi": "BOU",
    "kunyomi": "oka(su)",
    "portugues": "risco, enfrentar, desafiar, ousar, prejuízo, assumir (um nome)"
  },
  {
    "nivel": "6",
    "tracos": "16",
    "bushu": "37",
    "kanji": "&#22894;",
    "onyomi": "FUN",
    "kunyomi": "furu(u)",
    "portugues": "revigorar,florescer"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "173",
    "kanji": "&#38647;",
    "onyomi": "RAI",
    "kunyomi": "kaminari",
    "portugues": "trovão, raio"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "149",
    "kanji": "&#35617;",
    "onyomi": "YOU",
    "kunyomi": "uta(i)/ uta(u)",
    "portugues": "canto de teatro noh"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "38",
    "kanji": "&#22914;",
    "onyomi": "JO/ NYO",
    "kunyomi": "goto(shi)",
    "portugues": "semelhança, gostar, tal como, como se, melhor, melhor, igual"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "130",
    "kanji": "&#33012;",
    "onyomi": "DOU",
    "kunyomi": " ",
    "portugues": "tronco, torso, casco (navio), cubo de roda"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "9",
    "kanji": "&#20439;",
    "onyomi": "ZOKU",
    "kunyomi": " ",
    "portugues": "vulgar, costumes, maneiras, coisas do mundanas"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "50",
    "kanji": "&#24125;",
    "onyomi": "BOU/ MOU",
    "kunyomi": "zukin/ oo(u)",
    "portugues": "boné, chapéu"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "29",
    "kanji": "&#21465;",
    "onyomi": "JO",
    "kunyomi": "tsui(zu)/ tsuide",
    "portugues": "confira, relaciona, narra, descreve"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25304;",
    "onyomi": "KOU",
    "kunyomi": "kaka(waru)",
    "portugues": "prisão, prender, interessada, aderir, desgosto"
  },
  {
    "nivel": "6",
    "tracos": "14",
    "bushu": "79",
    "kanji": "&#31296;",
    "onyomi": "KOKU",
    "kunyomi": " ",
    "portugues": "cereais, grão"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "25",
    "kanji": "&#21331;",
    "onyomi": "TAKU",
    "kunyomi": " ",
    "portugues": "eminente, tabela, mesa, alta"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "63",
    "kanji": "&#25159;",
    "onyomi": "SEN",
    "kunyomi": "o_gi",
    "portugues": "leque, leque de dobrar"
  },
  {
    "nivel": "4",
    "tracos": "10",
    "bushu": "130",
    "kanji": "&#33032;",
    "onyomi": "MYAKU",
    "kunyomi": "suji",
    "portugues": "veia, pulso, esperança"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "18",
    "kanji": "&#21484;",
    "onyomi": "SHOU",
    "kunyomi": "me(su)",
    "portugues": "seduzir, chamada, mandar chamar, usar, vestir, cavalgar em, pechinchar, comer, beber"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "40",
    "kanji": "&#23515;",
    "onyomi": "KAN",
    "kunyomi": "kutsuro(gu)/ hiro(i)/ yuru(yaka)",
    "portugues": "tolerante, leniente, generosidade, relaxar, à vontade, mente aberta"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "8",
    "kanji": "&#20141;",
    "onyomi": "TEI/ CHIN",
    "kunyomi": " ",
    "portugues": "pavilhão, restaurante, mansão, caramanchão, casa de campo, vaudeville, Teatro de Ópera, palco"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "154",
    "kanji": "&#36092;",
    "onyomi": "KOU",
    "kunyomi": " ",
    "portugues": "assinatura, compra"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "95",
    "kanji": "&#29572;",
    "onyomi": "GEN",
    "kunyomi": " ",
    "portugues": "misterioso, oculto"
  },
  {
    "nivel": "5",
    "tracos": "10",
    "bushu": "127",
    "kanji": "&#32789;",
    "onyomi": "KOU",
    "kunyomi": "tagaya(su)",
    "portugues": "plantar, agricultura, cultivar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "37",
    "kanji": "&#22888;",
    "onyomi": "SHOU/ SOU",
    "kunyomi": "susu(meru)",
    "portugues": "exortar, desejar, encorajar"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "55",
    "kanji": "&#24330;",
    "onyomi": "HEI",
    "kunyomi": " ",
    "portugues": "abuso, mau, mal, ruptura"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "119",
    "kanji": "&#31895;",
    "onyomi": "SO",
    "kunyomi": "ara(i)/ ara-",
    "portugues": "grosseiro, rude, áspero"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "42",
    "kanji": "&#25484;",
    "onyomi": "SHOU",
    "kunyomi": "tenohira/ tanagokoro",
    "portugues": "manipular, regra, administrar, conduta, palma de mão"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "61",
    "kanji": "&#25074;",
    "onyomi": "CHOU",
    "kunyomi": "ko(riru)/ ko(rasu)/ ko(rashimeru)",
    "portugues": "penal, castigar, punir, disciplinar"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "159",
    "kanji": "&#36556;",
    "onyomi": "KI",
    "kunyomi": " ",
    "portugues": "sulco de rodas, roda, trilha, modelo, caminho"
  },
  {
    "nivel": "6",
    "tracos": "5",
    "bushu": "2",
    "kanji": "&#20874;",
    "onyomi": "SATSU/ SAKU",
    "kunyomi": "fumi",
    "portugues": "tome, sufixo para contagem de  para livros, volume"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "119",
    "kanji": "&#31911;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "cosméticos, enfeitar-se"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "102",
    "kanji": "&#30067;",
    "onyomi": "JOU/ CHOU",
    "kunyomi": "tata(mu)/ tatami/ kasa(naru)",
    "portugues": "esteira do tatami, sufixo para contagem de esteiras de tatami, dobrar, calar, abolir"
  },
  {
    "nivel": "4",
    "tracos": "19",
    "bushu": "167",
    "kanji": "&#37857;",
    "onyomi": "KYOU/ KEI",
    "kunyomi": "kagami",
    "portugues": "espelho, espéculo, cano principal, oferenda de bolinho de arroz"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "140",
    "kanji": "&#34214;",
    "onyomi": "SEN",
    "kunyomi": "susu(meru)",
    "portugues": "recomendar, esteira, aconselhar, encorajar, oferecer"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "187",
    "kanji": "&#39366;",
    "onyomi": "KU",
    "kunyomi": "ka(keru)/ ka(ru)",
    "portugues": "dirigir, corrida, galope, avançar, inspirar, impelir"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28129;",
    "onyomi": "TAN",
    "kunyomi": "awa(i)",
    "portugues": "magro, desmaiar, passageiro, pálido"
  },
  {
    "nivel": "6",
    "tracos": "15",
    "bushu": "86",
    "kanji": "&#29087;",
    "onyomi": "JUKU",
    "kunyomi": "u(reru)",
    "portugues": "maturar, amadurecer, amadurecimento, adquirir habilidade"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "32",
    "kanji": "&#22612;",
    "onyomi": "TOU",
    "kunyomi": " ",
    "portugues": "pagode, torre, campanário"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "149",
    "kanji": "&#35565;",
    "onyomi": "YU",
    "kunyomi": "sato(su)",
    "portugues": "repreensão, advertir, carga, avisar, persuadir"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "32",
    "kanji": "&#22435;",
    "onyomi": "EN",
    "kunyomi": "kaki",
    "portugues": "barreira, cerca, parede"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "113",
    "kanji": "&#31048;",
    "onyomi": "KI",
    "kunyomi": "ino(ru)",
    "portugues": "orar, rogar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "170",
    "kanji": "&#38548;",
    "onyomi": "KAKU",
    "kunyomi": "heda(teru)/ heda(taru)",
    "portugues": "isolar, alternar, distância, separar, golfo"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "2",
    "kanji": "&#21930;",
    "onyomi": "SOU",
    "kunyomi": "mo",
    "portugues": "perda, luto"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "170",
    "kanji": "&#38560;",
    "onyomi": "IN/ ON",
    "kunyomi": "kaku(su)/ kaku(shi)/ kaku(reru)/ kaka(su)/ yo(ru)",
    "portugues": "esconder, esconderijo, capa"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "85",
    "kanji": "&#28024;",
    "onyomi": "SHIN",
    "kunyomi": "hita(su)/ hita(ru)",
    "portugues": "imergir, ensopar, mergulhar, empapar, umedecer, molhar, embeber"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "38",
    "kanji": "&#23233;",
    "onyomi": "KA",
    "kunyomi": "yome/ totsu(gu)",
    "portugues": "casar, noiva"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "154",
    "kanji": "&#36066;",
    "onyomi": "KEN",
    "kunyomi": "kashiko(i)",
    "portugues": "sábio,inteligente, sabedoria, inteligência"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "119",
    "kanji": "&#31890;",
    "onyomi": "RYUU",
    "kunyomi": "tsubu",
    "portugues": "graões, gota, sufixo para contagem de partículas pequeninas"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "38",
    "kanji": "&#23019;",
    "onyomi": "KI",
    "kunyomi": "hime/ hime-",
    "portugues": "princesa"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "72",
    "kanji": "&#26247;",
    "onyomi": "KA",
    "kunyomi": "hima/ itoma",
    "portugues": "tempo livre, descanso, lazer, tempo, ausência"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "162",
    "kanji": "&#36879;",
    "onyomi": "TOU",
    "kunyomi": "su(ku)/ su(kasu)/ su(keru)/ to_(ru)/ to_(su)",
    "portugues": "transparente, permeear, filtrar, penetrar"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "167",
    "kanji": "&#37782;",
    "onyomi": "SA",
    "kunyomi": "kusari/ toza(su)",
    "portugues": "cadeias, ferros, conexão"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "32",
    "kanji": "&#22521;",
    "onyomi": "BAI",
    "kunyomi": "tsuchika(u)",
    "portugues": "cultivar, alimentar"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "146",
    "kanji": "&#35206;",
    "onyomi": "FUKU",
    "kunyomi": "oo(u)/ kutsugae(su)/ kutsugae(ru)",
    "portugues": "emborcar, capa, matiz, manto, arruinar-se"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "64",
    "kanji": "&#25793;",
    "onyomi": "YOU",
    "kunyomi": " ",
    "portugues": "abraçar, abraçar, possuir, proteger, primazia"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "9",
    "kanji": "&#20559;",
    "onyomi": "HEN",
    "kunyomi": "katayo(ru)",
    "portugues": "parcial, lado, lado esquerdo, radical, inclinar-se, tendencioso"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "76",
    "kanji": "&#27454;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "boa-vontade, artigo, seção, amizade, conivência"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "137",
    "kanji": "&#33334;",
    "onyomi": "HAKU",
    "kunyomi": " ",
    "portugues": "navio de linha regular, nave"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "85",
    "kanji": "&#27972;",
    "onyomi": "JOU/ SEI",
    "kunyomi": "kiyo(meru)/ kiyo(i)",
    "portugues": "limpar, purificar, limpeza, exorcisar, Disnastia  Manchu"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "61",
    "kanji": "&#24598;",
    "onyomi": "FU/ HO",
    "kunyomi": "kowa(i)/ kowa(garu)/ o(jiru)/ oso(reru)",
    "portugues": "terrível, assustar-se, medroso"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "9",
    "kanji": "&#20605;",
    "onyomi": "GI/ KA",
    "kunyomi": "itsuwa(ru)/ nise/ itsuwa(ri)",
    "portugues": "falsidade, mentira, enganar, fingir, falsificação"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "146",
    "kanji": "&#35207;",
    "onyomi": "HA/ HAKU",
    "kunyomi": "hatagashira",
    "portugues": "hegemonia, supremacia, liderança, campeão"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "27",
    "kanji": "&#21400;",
    "onyomi": "RIN",
    "kunyomi": " ",
    "portugues": "antiga unidade, milésimo de yen, 0,3 milímetros"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "40",
    "kanji": "&#23534;",
    "onyomi": "RYOU",
    "kunyomi": " ",
    "portugues": "dormitório, hospedaria, palacete, casa de chá"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28287;",
    "onyomi": "SHITSU/ SHUU",
    "kunyomi": "shime(ru)/ shime(su)/ uruo(u)/ uruo(su)",
    "portugues": "umidade, úmido, molhar"
  },
  {
    "nivel": "8",
    "tracos": "3",
    "bushu": "16",
    "kanji": "&#20961;",
    "onyomi": "BON/ HAN",
    "kunyomi": "oyo(so)/ o_yo(so)/ sube(te)",
    "portugues": "medíocre"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "44",
    "kanji": "&#23615;",
    "onyomi": "NYOU",
    "kunyomi": " ",
    "portugues": "urina"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "14",
    "kanji": "&#20896;",
    "onyomi": "KAN",
    "kunyomi": "kanmuri",
    "portugues": "coroa, melhor, inigualável"
  },
  {
    "nivel": "1",
    "tracos": "7",
    "bushu": "154",
    "kanji": "&#35997;",
    "onyomi": "BAI",
    "kunyomi": "kai",
    "portugues": "marisco, conchas"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "170",
    "kanji": "&#38518;",
    "onyomi": "TOU",
    "kunyomi": " ",
    "portugues": "cerâmica, porcelana"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "64",
    "kanji": "&#25594;",
    "onyomi": "YOU",
    "kunyomi": "yu(reru)/ yu(ru)/ yu(ragu)/ yu(rugu)/ yu(suru)/ yu(saburu)/ yu(suburu)/ ugo(ku)",
    "portugues": "balançar, agitar, oscilação, sacudir, tremer, vibrar"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "57",
    "kanji": "&#24358;",
    "onyomi": "GEN",
    "kunyomi": "tsuru",
    "portugues": "corda  (arco, violão), corda, hipotenusa"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "94",
    "kanji": "&#29417;",
    "onyomi": "SHU",
    "kunyomi": "ka(ru)/ ka(ri)/ -ga(ri)",
    "portugues": "caçar, incursão, juntar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "120",
    "kanji": "&#32043;",
    "onyomi": "SHI",
    "kunyomi": "murasaki",
    "portugues": "roxo, violeta"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "52",
    "kanji": "&#24187;",
    "onyomi": "GEN",
    "kunyomi": "maboroshi",
    "portugues": "fantasma, visão, sonho, ilusão, aparição"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "8",
    "kanji": "&#34928;",
    "onyomi": "SUI",
    "kunyomi": "otoro(eru)",
    "portugues": "decadência, decadente, enfraquecer"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "149",
    "kanji": "&#35330;",
    "onyomi": "TEI",
    "kunyomi": " ",
    "portugues": "revisar, corrigir, decidir"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "141",
    "kanji": "&#34394;",
    "onyomi": "KYO/ KO",
    "kunyomi": "muna(shii)/ utsu(ro)",
    "portugues": "vazio, vacuidade, despreparo, abertura, fissura, falsidade"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "1",
    "kanji": "&#24962;",
    "onyomi": "YUU",
    "kunyomi": "ure(eru)/ ure(i)/ u(i)/ u(ki)",
    "portugues": "melancolia, luto, lamento, está infeliz, triste, ansioso"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "4",
    "kanji": "&#25135;",
    "onyomi": "GI/ GE",
    "kunyomi": "tawamu(reru)/ za(reru)/ um(reru)",
    "portugues": "brincadeira, jogo, esporte"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "169",
    "kanji": "&#38289;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "lazer"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "149",
    "kanji": "&#35359;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "processar, acusar"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "132",
    "kanji": "&#33261;",
    "onyomi": "SHUU",
    "kunyomi": "kusa(i)/ -kusa(i)/ nio(u)/ nio(i)",
    "portugues": "fedendo, cheiro de doença, parecer suspeito, odor, cheiro, fragrância, cheirar, feder, brilhar, brilhante"
  },
  {
    "nivel": "2",
    "tracos": "3",
    "bushu": "57",
    "kanji": "&#24339;",
    "onyomi": "KYUU",
    "kunyomi": "yumi",
    "portugues": "arquear, arco (arma, violino)"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "42",
    "kanji": "&#23578;",
    "onyomi": "SHOU",
    "kunyomi": "nao",
    "portugues": "estima, além disso, ainda, ainda"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "118",
    "kanji": "&#31526;",
    "onyomi": "FU",
    "kunyomi": " ",
    "portugues": "símbolo, signo, marca, contagem, charme"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "4",
    "kanji": "&#30462;",
    "onyomi": "JUN",
    "kunyomi": "tate",
    "portugues": "escudo, brasão, escusa"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "75",
    "kanji": "&#26550;",
    "onyomi": "KA",
    "kunyomi": "ka(keru)/ ka(karu)",
    "portugues": "eregir, moldura, monte, apoio, prateleira, construir"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "64",
    "kanji": "&#25324;",
    "onyomi": "KATSU",
    "kunyomi": "kuku(ru)",
    "portugues": "fechar, amarrar, prisão, constranger"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "40",
    "kanji": "&#23476;",
    "onyomi": "EN",
    "kunyomi": "utage",
    "portugues": "banquete, banquete, festa"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "94",
    "kanji": "&#29539;",
    "onyomi": "JUU",
    "kunyomi": "kemono/ kedamono",
    "portugues": "animal, besta"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "22",
    "kanji": "&#21305;",
    "onyomi": "HITSU",
    "kunyomi": "hiki",
    "portugues": "igual, cabeça, sufixo para contagem de  para pequenos animais, rolo de pano"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "86",
    "kanji": "&#29157;",
    "onyomi": "SOU",
    "kunyomi": " ",
    "portugues": "ressecar, secar"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "149",
    "kanji": "&#35609;",
    "onyomi": "KEN",
    "kunyomi": " ",
    "portugues": "desvanecer-se, ficar humilde, comdescender, ser modesto"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "140",
    "kanji": "&#33747;",
    "onyomi": "KA",
    "kunyomi": " ",
    "portugues": "doce, bolos, frutas"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "38",
    "kanji": "&#23087;",
    "onyomi": "GO",
    "kunyomi": " ",
    "portugues": "recreação, prazer"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "149",
    "kanji": "&#35582;",
    "onyomi": "DAKU",
    "kunyomi": " ",
    "portugues": "consentir, consentimento, acordo"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "141",
    "kanji": "&#34396;",
    "onyomi": "RYO/ RO",
    "kunyomi": "toriko/ toriku",
    "portugues": "cativo, bárbaro, epíteto ofensivo ao inimigo"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "110",
    "kanji": "&#30683;",
    "onyomi": "UM/ BOU",
    "kunyomi": "hoko",
    "portugues": "alabarda, armas, carro alegórico"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "170",
    "kanji": "&#38501;",
    "onyomi": "KAN",
    "kunyomi": "ochii(ru)/ otoshii(reru)",
    "portugues": "colapso, desmoronar, ruir, queda (castelo), deslizamento"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "32",
    "kanji": "&#22378;",
    "onyomi": "HEI",
    "kunyomi": "tsubo",
    "portugues": "unidade de área de 3,31 m2"
  },
  {
    "nivel": "8",
    "tracos": "2",
    "bushu": "29",
    "kanji": "&#21448;",
    "onyomi": "YUU",
    "kunyomi": "mata/ mata-/ mata(no-)",
    "portugues": "ou outra vez, além disso, na outra mão"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28092;",
    "onyomi": "RYOU",
    "kunyomi": "suzu(shii)/ suzu(já)/ suzu(yaka)/ usu(i)/ hiya(su)/ makotoni",
    "portugues": "fresco e agradável, refrescante"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "167",
    "kanji": "&#37806;",
    "onyomi": "CHIN",
    "kunyomi": "shizu(meru)/ shizu(maru)/ osae",
    "portugues": "tranqüilizar, centros para preservação  da paz"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "119",
    "kanji": "&#31883;",
    "onyomi": "SUI",
    "kunyomi": "iki",
    "portugues": "chique, estilo, pureza, essência, supra-sumo, a nata, elite, selecionados"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28363;",
    "onyomi": "JI",
    "kunyomi": " ",
    "portugues": "nutrir, mais & mais, ser luxuriante, planta, turbidez"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "75",
    "kanji": "&#26420;",
    "onyomi": "BOKU",
    "kunyomi": "ho_/ hoo",
    "portugues": "simples,cru, planície, dócil"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "70",
    "kanji": "&#26059;",
    "onyomi": "JÁ",
    "kunyomi": " ",
    "portugues": "rotação, ir de uma lado para outro"
  },
  {
    "nivel": "4",
    "tracos": "8",
    "bushu": "140",
    "kanji": "&#33469;",
    "onyomi": "GA",
    "kunyomi": "me",
    "portugues": "botão, broto, brotar, germe (planta)"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "60",
    "kanji": "&#24464;",
    "onyomi": "JO",
    "kunyomi": "omomu(roni)",
    "portugues": "gradualmente, lentamente, deliberadamente, gentilmente"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "120",
    "kanji": "&#32239;",
    "onyomi": "I",
    "kunyomi": "yokoito/ nuki",
    "portugues": "horizontal, trama, esquerda & direita, latitude"
  },
  {
    "nivel": "4",
    "tracos": "9",
    "bushu": "102",
    "kanji": "&#32963;",
    "onyomi": "I",
    "kunyomi": " ",
    "portugues": "estômago, barriga, colheita, papo de ave"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "162",
    "kanji": "&#36920;",
    "onyomi": "ITSU",
    "kunyomi": "so(reru)/ so(rasu)/ hagu(reru)",
    "portugues": "desviar-se, indolência, lazer, perder o ponto, escapar, evitar, desviar um golpe, divergir"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "9",
    "kanji": "&#20625;",
    "onyomi": "KETSU",
    "kunyomi": " ",
    "portugues": "grandeza, excelência"
  },
  {
    "nivel": "6",
    "tracos": "6",
    "bushu": "75",
    "kanji": "&#26426;",
    "onyomi": "KI",
    "kunyomi": "tsukue",
    "portugues": "mesa, escrivaninha"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "160",
    "kanji": "&#36763;",
    "onyomi": "SHIN",
    "kunyomi": "kara(i)/ tsura(i)/ -dzura(i)/ kanoto",
    "portugues": "picante, quente, amargo, temperado"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "164",
    "kanji": "&#37218;",
    "onyomi": "SAKU",
    "kunyomi": "su",
    "portugues": "vinagre, azedo, ácido, picante"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20208;",
    "onyomi": "GYOU/ KOU",
    "kunyomi": "ao(gu)/ oo(se)/ o(ssharu)/ ossha(ru)",
    "portugues": "rosto para cima, melhorar, depender, procurar, respeito, rever, tomar"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "44",
    "kanji": "&#23612;",
    "onyomi": "NI",
    "kunyomi": "ama",
    "portugues": "freira"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "112",
    "kanji": "&#30741;",
    "onyomi": "SAI",
    "kunyomi": "kuda(ku)/ kuda(keru)",
    "portugues": "quebrar, quebrado, esmagar, popular, familiar"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "22",
    "kanji": "&#21311;",
    "onyomi": "TOKU",
    "kunyomi": "kakuma(u)",
    "portugues": "esconda, abrigo, escudo"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "9",
    "kanji": "&#20598;",
    "onyomi": "GUU",
    "kunyomi": "tama",
    "portugues": "acidentalmente, número par, par, casal, mesma espécie"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28079;",
    "onyomi": "GAI",
    "kunyomi": "hate",
    "portugues": "horizonte, costa"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#20339;",
    "onyomi": "KA",
    "kunyomi": " ",
    "portugues": "bom, belo,excelente, agradável, hábil"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "187",
    "kanji": "&#39364;",
    "onyomi": "DA/ TA",
    "kunyomi": " ",
    "portugues": "incômodo, bando de cavalos, carga de cavalos, enviar a cavalo"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "28",
    "kanji": "&#24608;",
    "onyomi": "TAI",
    "kunyomi": "okota(ru)/ nama(keru)",
    "portugues": "negligenciar, preguiça"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "85",
    "kanji": "&#28548;",
    "onyomi": "CHOU",
    "kunyomi": "su(mu)/ su(masu)/ -su(masu)",
    "portugues": "lucidez, limpar-se, limpar, esclarecer, colocar, esforçar, olhar sério"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "60",
    "kanji": "&#24490;",
    "onyomi": "JUN",
    "kunyomi": " ",
    "portugues": "sequencial, companheiro"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "9",
    "kanji": "&#20621;",
    "onyomi": "BOU",
    "kunyomi": "katawa(ra)/ waki/ oka-/ hata/ soba",
    "portugues": "espectador, além disso, enquanto, muito próximo, 3ª pessoa"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "167",
    "kanji": "&#37467;",
    "onyomi": "EN",
    "kunyomi": "namari",
    "portugues": "primazia"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "46",
    "kanji": "&#23849;",
    "onyomi": "HOU",
    "kunyomi": "kuzu(reru)/ -kuzu(re)/ kuzu(su)",
    "portugues": "demolir, murchar, aplainar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "159",
    "kanji": "&#36600;",
    "onyomi": "JIKU",
    "kunyomi": " ",
    "portugues": "eixo, pivô, talo, caule, sufixo para contagem de  pergaminhos"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "60",
    "kanji": "&#34913;",
    "onyomi": "KOU",
    "kunyomi": " ",
    "portugues": "equilíbrio, vara de medição, escala"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "72",
    "kanji": "&#26361;",
    "onyomi": "SOU/ ZOU",
    "kunyomi": "tsukasa/ tomogara/ heya",
    "portugues": "caçula, amigo"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "72",
    "kanji": "&#26283;",
    "onyomi": "ZAN",
    "kunyomi": "shibara(ku)",
    "portugues": "temporariamente, por enquanto, momento, tempo longo"
  },
  {
    "nivel": "8",
    "tracos": "3",
    "bushu": "4",
    "kanji": "&#20995;",
    "onyomi": "JIN/ NIN",
    "kunyomi": "ha/ yaiba/ ki(ru)",
    "portugues": "lâmina, espada, margem"
  },
  {
    "nivel": "6",
    "tracos": "12",
    "bushu": "149",
    "kanji": "&#35422;",
    "onyomi": "SHI",
    "kunyomi": " ",
    "portugues": "parte de discurso, palavras, poesia"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "78",
    "kanji": "&#27542;",
    "onyomi": "SHOKU",
    "kunyomi": "fu(eru)/ fu(yasu)",
    "portugues": "aumentar, aumento, multiplicar, levantar"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "130",
    "kanji": "&#32966;",
    "onyomi": "TAN",
    "kunyomi": "kimo",
    "portugues": "bexiga irritadaa, coragem, orgãos internos, nervos"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "115",
    "kanji": "&#31339;",
    "onyomi": "KAKU",
    "kunyomi": " ",
    "portugues": "colheita, colher"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "24",
    "kanji": "&#26685;",
    "onyomi": "SAI",
    "kunyomi": " ",
    "portugues": "plantação, planta"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "9",
    "kanji": "&#33303;",
    "onyomi": "HO",
    "kunyomi": " ",
    "portugues": "loja"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "120",
    "kanji": "&#32051;",
    "onyomi": "SHIN",
    "kunyomi": " ",
    "portugues": "sire, cavalheiro, artigos p/ cavalheiros"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "113",
    "kanji": "&#31109;",
    "onyomi": "ZEN/ SEN",
    "kunyomi": "shizuka/ yuzu(ru)",
    "portugues": "Zen, meditação silenciosa"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "30",
    "kanji": "&#22132;",
    "onyomi": "FUN",
    "kunyomi": "fu(ku)",
    "portugues": "irromper, repuxo, emitir, excitar"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "94",
    "kanji": "&#29508;",
    "onyomi": "GOKU",
    "kunyomi": " ",
    "portugues": "prisão, cadeia"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "52",
    "kanji": "&#24190;",
    "onyomi": "KI",
    "kunyomi": "iku-/ iku(tsu)/ iku(ra)",
    "portugues": "quantos, quanto, quão longe, quanto tempo"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "181",
    "kanji": "&#38997;",
    "onyomi": "KEN",
    "kunyomi": "akiraka/ arawa(reru)",
    "portugues": "aparecer, existente"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "167",
    "kanji": "&#37389;",
    "onyomi": "DON",
    "kunyomi": "nibu(i)/ nibu(ru)/ nibu-/ nama(ru)/ namaku(ra)",
    "portugues": "tolo, lento, estúpido, embotado, sem corte"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "170",
    "kanji": "&#38533;",
    "onyomi": "GUU",
    "kunyomi": "sumi",
    "portugues": "esquina, canto"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "17",
    "kanji": "&#20982;",
    "onyomi": "KYOU",
    "kunyomi": " ",
    "portugues": "vilão, mau, sorte ruim, desastre"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "120",
    "kanji": "&#31998;",
    "onyomi": "KYUU",
    "kunyomi": "tada(su)",
    "portugues": "torcer, perguntar, investigar, verificar"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "32",
    "kanji": "&#22654;",
    "onyomi": "JUKU",
    "kunyomi": " ",
    "portugues": "escola p/ reforço, escola particular"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "149",
    "kanji": "&#35475;",
    "onyomi": "SEI",
    "kunyomi": "chika(u)",
    "portugues": "voto, jurar, penhor"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "164",
    "kanji": "&#37228;",
    "onyomi": "SHUU/ SHU/ TOU",
    "kunyomi": "muku(iru)",
    "portugues": "recompensar, recompensa, retribuição"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "14",
    "kanji": "&#20887;",
    "onyomi": "JOU",
    "kunyomi": " ",
    "portugues": "supérfluo, inútil"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "120",
    "kanji": "&#32058;",
    "onyomi": "KON",
    "kunyomi": " ",
    "portugues": "azul escuro, azul-marinho"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "85",
    "kanji": "&#28418;",
    "onyomi": "HYOU",
    "kunyomi": "tadayo(u)",
    "portugues": "rumo, bóiar (em líquido)"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "75",
    "kanji": "&#26691;",
    "onyomi": "TOU",
    "kunyomi": "momo",
    "portugues": "pêssegueiro"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20271;",
    "onyomi": "HAKU",
    "kunyomi": " ",
    "portugues": "chefe, conta, conde, tio, Brasil"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "53",
    "kanji": "&#24246;",
    "onyomi": "SHO",
    "kunyomi": " ",
    "portugues": "mais comum, tudo, bastardo"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "72",
    "kanji": "&#26230;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "faísca, claro, cristalino"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "85",
    "kanji": "&#28317;",
    "onyomi": "KOU",
    "kunyomi": "mizo",
    "portugues": "ranhura, canal, encanamento, dreno, 10 elevado a 32"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "112",
    "kanji": "&#30865;",
    "onyomi": "HI",
    "kunyomi": "ishibumi",
    "portugues": "lápide, monumento"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "113",
    "kanji": "&#31117;",
    "onyomi": "KA",
    "kunyomi": "wazawai",
    "portugues": "calamidade, desgraça, mal, maldição"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "40",
    "kanji": "&#36051;",
    "onyomi": "HIN",
    "kunyomi": " ",
    "portugues": "V.I.P., convidado especial"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "140",
    "kanji": "&#33988;",
    "onyomi": "CHIKU",
    "kunyomi": "takuwa(eru)",
    "portugues": "acumular, ter uma concubina, fonógrafo"
  },
  {
    "nivel": "4",
    "tracos": "13",
    "bushu": "130",
    "kanji": "&#33144;",
    "onyomi": "CHOU",
    "kunyomi": "harawata",
    "portugues": "intestinos, abdomen, tripas, vísceras"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "118",
    "kanji": "&#31570;",
    "onyomi": "TOU",
    "kunyomi": "tsutsu",
    "portugues": "cilindro, tubo, cano, cano de arma, manga"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "173",
    "kanji": "&#38684;",
    "onyomi": "SOU",
    "kunyomi": "shimo",
    "portugues": "geada"
  },
  {
    "nivel": "3",
    "tracos": "11",
    "bushu": "118",
    "kanji": "&#31515;",
    "onyomi": "TEKI",
    "kunyomi": "fue",
    "portugues": "flauta, clarinete, assobio, gaita de foles, flautim, flauta"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "61",
    "kanji": "&#24742;",
    "onyomi": "ETSU",
    "kunyomi": "yoroko(bu)/ yoroko(basu)",
    "portugues": "êxtase, prazer"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "128",
    "kanji": "&#24677;",
    "onyomi": "CHI",
    "kunyomi": "ha(jiru)/ haji/ ha(jirau)/ ha(zukashii)",
    "portugues": "vergonha, desonra"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "95",
    "kanji": "&#30044;",
    "onyomi": "CHIKU",
    "kunyomi": " ",
    "portugues": "criação, aves domésticas"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "61",
    "kanji": "&#24685;",
    "onyomi": "KYOU",
    "kunyomi": "uyauya(shii)",
    "portugues": "respeito, reverencia"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "64",
    "kanji": "&#25206;",
    "onyomi": "FU",
    "kunyomi": "tasu(keru)",
    "portugues": "ajudar, ajuda, auxiliar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "68",
    "kanji": "&#26012;",
    "onyomi": "SHA",
    "kunyomi": "nana(me)/ hasu",
    "portugues": "diagonal, inclinado, oblíquo"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "140",
    "kanji": "&#33495;",
    "onyomi": "BYOU/ MYOU",
    "kunyomi": "nae/ nawa-",
    "portugues": "muda (planta), broto"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "163",
    "kanji": "&#37101;",
    "onyomi": "KAKU",
    "kunyomi": "kuruwa",
    "portugues": "cercado, quarteirão, fortificação, bairro das prostitutas"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "200",
    "kanji": "&#30952;",
    "onyomi": "MA",
    "kunyomi": "miga(ku)/ su(ru)",
    "portugues": "moer, polir, explorar, melhorar, escovar (dentes)"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "22",
    "kanji": "&#21280;",
    "onyomi": "SHOU",
    "kunyomi": "takumi",
    "portugues": "artesão, carpinteiro"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "96",
    "kanji": "&#29664;",
    "onyomi": "SHU",
    "kunyomi": "tama",
    "portugues": "pérola, gema, jóia"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "85",
    "kanji": "&#28516;",
    "onyomi": "JUN",
    "kunyomi": "uruo(u)/ uruo(su)/ uru(um)",
    "portugues": "molhado, molhar-se, lucrar, receber benefícios, favorecer, charme, embeber"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "194",
    "kanji": "&#39746;",
    "onyomi": "KON",
    "kunyomi": "tamashii/ tama",
    "portugues": "alma, espírito"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "85",
    "kanji": "&#28342;",
    "onyomi": "YOU",
    "kunyomi": "to(keru)/ to(kasu)/ to(ku)",
    "portugues": "derreter, dissolver, fundir (neve)"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "4",
    "kanji": "&#22402;",
    "onyomi": "SUI",
    "kunyomi": "ta(reru)/ ta(rasu)/ ta(re)/ -ta(re)/ nannanto(su)",
    "portugues": "declínio, suspender, pendurar, negligente"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "18",
    "kanji": "&#21000;",
    "onyomi": "GAI/ KAI",
    "kunyomi": "ka(ru)",
    "portugues": "corte, acerto, aparar"
  },
  {
    "nivel": "2",
    "tracos": "7",
    "bushu": "85",
    "kanji": "&#27773;",
    "onyomi": "KI",
    "kunyomi": " ",
    "portugues": "vapor"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "187",
    "kanji": "&#39438;",
    "onyomi": "KI",
    "kunyomi": " ",
    "portugues": "cavaleiro, equitação, sufixo para contagem de   cavalos"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "109",
    "kanji": "&#30561;",
    "onyomi": "SUI",
    "kunyomi": " ",
    "portugues": "sonolento, sono, morte"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28179;",
    "onyomi": "KEI",
    "kunyomi": "tani/ tanigawa",
    "portugues": "corrente de montanha, vale"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "4",
    "kanji": "&#23561;",
    "onyomi": "I/ JOU",
    "kunyomi": " ",
    "portugues": "oficial militar, carcereiro, velho, posição"
  },
  {
    "nivel": "6",
    "tracos": "9",
    "bushu": "130",
    "kanji": "&#32954;",
    "onyomi": "HAI",
    "kunyomi": " ",
    "portugues": "pulmões"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "85",
    "kanji": "&#28609;",
    "onyomi": "DAKU/ JOKU",
    "kunyomi": "nigo(ru)/ nigo(su)",
    "portugues": "sonoro, sujidade, errado, impureza"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "38",
    "kanji": "&#22995;",
    "onyomi": "SEI/ SHOU",
    "kunyomi": " ",
    "portugues": "sobrenome"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "99",
    "kanji": "&#26576;",
    "onyomi": "BOU",
    "kunyomi": "soregashi/ nanigashi",
    "portugues": "assim-e-assim, um, um certo, aquela pessoa"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "159",
    "kanji": "&#36676;",
    "onyomi": "KATSU",
    "kunyomi": "kusabi",
    "portugues": "controlar, cunha"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "61",
    "kanji": "&#25022;",
    "onyomi": "KAN",
    "kunyomi": "ura(mu)",
    "portugues": "remorso, pesar, estar triste"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "8",
    "kanji": "&#21696;",
    "onyomi": "AI",
    "kunyomi": "awa(re)/ awa(remu)/ kana(shii)",
    "portugues": "patético, pesar, pena, emoção, compaixão, solidariesar"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "61",
    "kanji": "&#25014;",
    "onyomi": "OKU",
    "kunyomi": " ",
    "portugues": "lembrança, pensar, recordar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "64",
    "kanji": "&#25644;",
    "onyomi": "HAN",
    "kunyomi": " ",
    "portugues": "Correia transportadora, carregar, transportar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "94",
    "kanji": "&#29503;",
    "onyomi": "HÁ",
    "kunyomi": "saru",
    "portugues": "macaco"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "118",
    "kanji": "&#31716;",
    "onyomi": "TOKU",
    "kunyomi": "atsu(i)",
    "portugues": "caloroso, humano, sério, cordial, ponderado"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "30",
    "kanji": "&#21520;",
    "onyomi": "TO",
    "kunyomi": "ha(ku)/ tsu(ku)",
    "portugues": "cuspir, vômito, arroto, confessar, contar (mentiras)"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "61",
    "kanji": "&#25040;",
    "onyomi": "KAI/ E",
    "kunyomi": "futokoro/ natsu(kashii)/ natsu(kashimu)/ natsu(ku)/ natsu(keru)/ nazu(keru)/ ida(ku)/ omo(u)",
    "portugues": "bolso, sentimentos, coração, saudades, sentir saudades, torna-se ligado a, seio, peitos"
  },
  {
    "nivel": "6",
    "tracos": "6",
    "bushu": "27",
    "kanji": "&#28784;",
    "onyomi": "KAI",
    "kunyomi": "hai",
    "portugues": "cinzas, suco adstringente, cremar"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "61",
    "kanji": "&#24996;",
    "onyomi": "FUN",
    "kunyomi": "ikidoo(ru)",
    "portugues": "estimulado, resentido, estar indignado, raiva"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "116",
    "kanji": "&#31406;",
    "onyomi": "KYUU/ KYOU",
    "kunyomi": "kiwa(meru)/ kiwa(maru)/ kiwa(mari) / kiwa(mi)",
    "portugues": "endurecer, destituído, sofrer, criar obstáculos, encurralar"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "169",
    "kanji": "&#38322;",
    "onyomi": "ETSU",
    "kunyomi": "kemi(suru)",
    "portugues": "revier, inspeção, revisão"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "61",
    "kanji": "&#24936;",
    "onyomi": "GAI",
    "kunyomi": " ",
    "portugues": "arrependimento, entristecer-se, suspiro, lamento"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "94",
    "kanji": "&#29494;",
    "onyomi": "YUU/ YU",
    "kunyomi": "nao",
    "portugues": "além disso, ainda"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "167",
    "kanji": "&#37664;",
    "onyomi": "JOU",
    "kunyomi": " ",
    "portugues": "fechadura, cadeado, correntes"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "30",
    "kanji": "&#21576;",
    "onyomi": "TEI",
    "kunyomi": " ",
    "portugues": "mostrar, oferecer, apresentar, enviar, exibição"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "154",
    "kanji": "&#36070;",
    "onyomi": "FU/ BU",
    "kunyomi": " ",
    "portugues": "ode, prosa, poema, tributo, prestações, tributar"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "198",
    "kanji": "&#40599;",
    "onyomi": "REI",
    "kunyomi": "uruwa(shii)/ ura(raka)",
    "portugues": "amável, companheiro"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "38",
    "kanji": "&#23330;",
    "onyomi": "JOU",
    "kunyomi": "musume",
    "portugues": "jovem, moça, senhorita, filha"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "92",
    "kanji": "&#37034;",
    "onyomi": "JA",
    "kunyomi": "yokoshi(ma)",
    "portugues": "malvado, injustiça, errado"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "196",
    "kanji": "&#40335;",
    "onyomi": "KEI",
    "kunyomi": "niwatori/ tori",
    "portugues": "Frango, galinha"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "53",
    "kanji": "&#21776;",
    "onyomi": "TOU",
    "kunyomi": "kara",
    "portugues": "T’ang, China"
  },
  {
    "nivel": "5",
    "tracos": "6",
    "bushu": "135",
    "kanji": "&#33292;",
    "onyomi": "ZETSU",
    "kunyomi": "shita",
    "portugues": "língua, lingueta de inst. de sopro, lingueta de fechadura"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "164",
    "kanji": "&#37239;",
    "onyomi": "KOKU",
    "kunyomi": "hido(i)",
    "portugues": "injusto, cruel, severo"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "167",
    "kanji": "&#37723;",
    "onyomi": "TAN",
    "kunyomi": "kita(eru)",
    "portugues": "forjar, disciplinar, treinar"
  },
  {
    "nivel": "6",
    "tracos": "6",
    "bushu": "4",
    "kanji": "&#21518;",
    "onyomi": "KOU/ GO",
    "kunyomi": "kisaki",
    "portugues": "imperatriz, rainha, depois, atrás,  mais tarde"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "38",
    "kanji": "&#22915;",
    "onyomi": "HI",
    "kunyomi": "kisaki",
    "portugues": "rainha, princesa"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "72",
    "kanji": "&#26241;",
    "onyomi": "GYOU/ KYOU",
    "kunyomi": "akatsuki/ sato(ru)",
    "portugues": "aurora, amanhecer, no evento"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "85",
    "kanji": "&#27934;",
    "onyomi": "DOU",
    "kunyomi": "hora",
    "portugues": "gruta, caverna, escavação"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "75",
    "kanji": "&#26543;",
    "onyomi": "KO",
    "kunyomi": "ka(reru)/ ka(rasu)",
    "portugues": "encolher, secar, ressecar, evaporar"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "27",
    "kanji": "&#26278;",
    "onyomi": "REKI",
    "kunyomi": "koyomi",
    "portugues": "calendário, almanaque"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "15",
    "kanji": "&#20934;",
    "onyomi": "JUN",
    "kunyomi": " ",
    "portugues": "quase-, semi-, associar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "103",
    "kanji": "&#30094;",
    "onyomi": "SO/ SHO",
    "kunyomi": "uto(i)/ uto(mu)/ maba(ra)",
    "portugues": "desviar, rude, negligenciar, evitar, esparso"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "157",
    "kanji": "&#36341;",
    "onyomi": "HÁ",
    "kunyomi": "fu(há)",
    "portugues": "pisar, dar um passo, passar por cima, paraticar, persistir"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "102",
    "kanji": "&#32047;",
    "onyomi": "RUI",
    "kunyomi": " ",
    "portugues": "acumular, envolvimento, problemas, conexão, continuamente"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "154",
    "kanji": "&#36036;",
    "onyomi": "WAI",
    "kunyomi": "makana(u)",
    "portugues": "suborno, conselho (adm.), oferta, finanças"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "177",
    "kanji": "&#38772;",
    "onyomi": "KA",
    "kunyomi": "kutsu",
    "portugues": "sapatos"
  },
  {
    "nivel": "3",
    "tracos": "6",
    "bushu": "123",
    "kanji": "&#32650;",
    "onyomi": "YOU",
    "kunyomi": "hitsuji",
    "portugues": "carneiro"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "4",
    "kanji": "&#26417;",
    "onyomi": "SHU",
    "kunyomi": "ake",
    "portugues": "vermelhão, zinabre, escarlate, vermelho, ensangüentado"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "94",
    "kanji": "&#29471;",
    "onyomi": "RYOU/ REFU",
    "kunyomi": "kari/ ka(ru)",
    "portugues": "caçada, disparar, caçar"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "39",
    "kanji": "&#23380;",
    "onyomi": "KOU",
    "kunyomi": "ana",
    "portugues": "cavidade, buraco, fenda, muito, grande, excessivamente"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "122",
    "kanji": "&#32645;",
    "onyomi": "RA",
    "kunyomi": " ",
    "portugues": "gaze, seda fina, Roma"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "64",
    "kanji": "&#25666;",
    "onyomi": "SETSU/ SHOU",
    "kunyomi": "osa(meru)/ kane(ru)/ to(ru)",
    "portugues": "indireto, substituto, agir além de"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "195",
    "kanji": "&#39912;",
    "onyomi": "GEI",
    "kunyomi": "kujira",
    "portugues": "baleia"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "86",
    "kanji": "&#28809;",
    "onyomi": "RO",
    "kunyomi": "irori",
    "portugues": "lareira, forno, fornalha, reator"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25305;",
    "onyomi": "SETSU",
    "kunyomi": "tsutana(i)",
    "portugues": "mal-ajambrado, desajeitado, inábil"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "154",
    "kanji": "&#36064;",
    "onyomi": "BAI",
    "kunyomi": " ",
    "portugues": "compensação, indenização"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "149",
    "kanji": "&#35442;",
    "onyomi": "GAI",
    "kunyomi": " ",
    "portugues": "acima declarado, o dito, isso específico"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "112",
    "kanji": "&#30977;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "recife, rocha submersa"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "102",
    "kanji": "&#30036;",
    "onyomi": "HAN",
    "kunyomi": "aze",
    "portugues": "sulco p/ plantar arroz, represa p/ plantar arroz"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "115",
    "kanji": "&#31199;",
    "onyomi": "SO",
    "kunyomi": " ",
    "portugues": "tarifa, coletar impostos, pedir emprestado"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "141",
    "kanji": "&#34384;",
    "onyomi": "GYAKU",
    "kunyomi": "shiita(geru)",
    "portugues": "tiranizar, oprimir"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "85",
    "kanji": "&#28431;",
    "onyomi": "ROU",
    "kunyomi": "mo(ru)/ mo(reru)/ mo(rasu)",
    "portugues": "vazamento, escapar, tempo"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "49",
    "kanji": "&#24524;",
    "onyomi": "KI",
    "kunyomi": "i(um)/ i(mi)/ i(mawashii)",
    "portugues": "luto, odiar, detestável, aniversário de morte"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "12",
    "kanji": "&#24904;",
    "onyomi": "JI",
    "kunyomi": "itsuku(shimu)",
    "portugues": "misericórdia"
  },
  {
    "nivel": "1",
    "tracos": "3",
    "bushu": "46",
    "kanji": "&#23665;",
    "onyomi": "SAN/ SEN",
    "kunyomi": "yama",
    "portugues": "montanha"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "38",
    "kanji": "&#22922;",
    "onyomi": "NIN/ JIN",
    "kunyomi": "hara(um)/ migomo(ru)",
    "portugues": "gravidez"
  },
  {
    "nivel": "6",
    "tracos": "11",
    "bushu": "124",
    "kanji": "&#32716;",
    "onyomi": "YOKU",
    "kunyomi": " ",
    "portugues": "o seguinte, próximo"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "61",
    "kanji": "&#24833;",
    "onyomi": "SHUU",
    "kunyomi": "ure(eru)/ ure(i)",
    "portugues": "perigo, pesar, lamento, estar ansioso"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "140",
    "kanji": "&#34219;",
    "onyomi": "KUN",
    "kunyomi": "kao(ru)",
    "portugues": "fragrante, perfumado, fumaça (cigs)"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "142",
    "kanji": "&#34442;",
    "onyomi": "BUN",
    "kunyomi": "ka",
    "portugues": "mosquito"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "141",
    "kanji": "&#33178;",
    "onyomi": "FU",
    "kunyomi": "hada",
    "portugues": "pele, corpo, grão, textura, disposição"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#20365;",
    "onyomi": "JI/ SHI",
    "kunyomi": "samurai/ habe(ru)",
    "portugues": "garçom, samurai, esperar sobre, servir"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "46",
    "kanji": "&#23724;",
    "onyomi": "KOU",
    "kunyomi": "misaki",
    "portugues": "cabo, ponta, promontorio"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "15",
    "kanji": "&#20957;",
    "onyomi": "GYOU",
    "kunyomi": "ko(ru)/ ko(rasu)/ kogo(rasu)/ kogo(raseru)/ kogo(ru)",
    "portugues": "congelar, geada, rígida, seja absorvida em"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "104",
    "kanji": "&#30123;",
    "onyomi": "EKI/ YAKU",
    "kunyomi": " ",
    "portugues": "epidemia"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "207",
    "kanji": "&#40723;",
    "onyomi": "KO",
    "kunyomi": "tsudzumi",
    "portugues": "tambor, batida, despertar, inspeção (militar)"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "61",
    "kanji": "&#24974;",
    "onyomi": "ZOU",
    "kunyomi": "niku(mu)/ niku(i)/ niku(rashii)/ niku(shimi)",
    "portugues": "odiar, detesta"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "130",
    "kanji": "&#32990;",
    "onyomi": "HOU",
    "kunyomi": " ",
    "portugues": "placenta, bolsa, estojo"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "124",
    "kanji": "&#32763;",
    "onyomi": "HON/ HAN",
    "kunyomi": "hirugae(ru)/ hirugae(su)",
    "portugues": "sacudidela, virar, onda, tumulto, mudar de idéia"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "167",
    "kanji": "&#37679;",
    "onyomi": "SAKU/ SHAKU",
    "kunyomi": " ",
    "portugues": "confundir, mistura, está em desordem"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "75",
    "kanji": "&#26530;",
    "onyomi": "SUU/ SHU",
    "kunyomi": "toboso/ karakuri",
    "portugues": "dobradiça, pivô, porta"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "2",
    "kanji": "&#24101;",
    "onyomi": "SUI",
    "kunyomi": " ",
    "portugues": "comandante, tropas líder, governador"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "32",
    "kanji": "&#22353;",
    "onyomi": "KOU",
    "kunyomi": " ",
    "portugues": "buraco, furo"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "30",
    "kanji": "&#21987;",
    "onyomi": "SHI",
    "kunyomi": " ",
    "portugues": "herdeiro, é bem-sucedido"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "164",
    "kanji": "&#37237;",
    "onyomi": "KOU",
    "kunyomi": " ",
    "portugues": "fermentação"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27832;",
    "onyomi": "FUTSU",
    "kunyomi": "wa(ku)/ wa(kasu)",
    "portugues": "borbulhar, ferver, agitação, barulho, criar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "145",
    "kanji": "&#35064;",
    "onyomi": "RA",
    "kunyomi": "hadaka",
    "portugues": "descoberto, nu, parcialmente vestido"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "104",
    "kanji": "&#30142;",
    "onyomi": "SHITSU",
    "kunyomi": " ",
    "portugues": "ligeiramente"
  },
  {
    "nivel": "6",
    "tracos": "13",
    "bushu": "140",
    "kanji": "&#33976;",
    "onyomi": "JOU/ SEI",
    "kunyomi": "mu(su)/ mu(reru)/ mu(rasu)",
    "portugues": "vapor, calor, quente, compressas, ficar mofado"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20523;",
    "onyomi": "RIN",
    "kunyomi": " ",
    "portugues": "ética, companheiro"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "130",
    "kanji": "&#32974;",
    "onyomi": "TAI",
    "kunyomi": " ",
    "portugues": "útero"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "64",
    "kanji": "&#25836;",
    "onyomi": "GI",
    "kunyomi": "maga(i)/ modo(ki)",
    "portugues": "imitar, alvo (uma arma), nomear, imita"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "46",
    "kanji": "&#23815;",
    "onyomi": "SUU",
    "kunyomi": "aga(meru)",
    "portugues": "adorar (divindade), respeitar, reverenciar"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "162",
    "kanji": "&#36883;",
    "onyomi": "TEI",
    "kunyomi": "kawa(ru)/ tagaini",
    "portugues": "em cadeia, em fila, enviar"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "162",
    "kanji": "&#36845;",
    "onyomi": "TETSU",
    "kunyomi": " ",
    "portugues": "transferir, alternar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "79",
    "kanji": "&#27579;",
    "onyomi": "KAKU/ KOKU/ BAI",
    "kunyomi": "kara/ gara",
    "portugues": "casca, concha de noz"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "8",
    "kanji": "&#35090;",
    "onyomi": "HOU",
    "kunyomi": "ho(meru)",
    "portugues": "elogio, enaltecer"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "94",
    "kanji": "&#29483;",
    "onyomi": "BYOU",
    "kunyomi": "neko",
    "portugues": "gato"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "30",
    "kanji": "&#21535;",
    "onyomi": "GIN",
    "kunyomi": " ",
    "portugues": "declamar, cantar, recital"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "66",
    "kanji": "&#25954;",
    "onyomi": "KAN",
    "kunyomi": "a(ete)/ a(enai)/ a(ezu)",
    "portugues": "ousar, frágil, lamentável, trágico, triste, franzino"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "61",
    "kanji": "&#24841;",
    "onyomi": "YU",
    "kunyomi": "tano(shii)/ tano(shimu)",
    "portugues": "prazer, feliz, júbilo"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "31",
    "kanji": "&#22234;",
    "onyomi": "SHUU",
    "kunyomi": "tora(wareru)",
    "portugues": "cativo, criminoso, prisão, pegar"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "2",
    "kanji": "&#24189;",
    "onyomi": "YUU",
    "kunyomi": " ",
    "portugues": "isolar, confina para um quarto"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "164",
    "kanji": "&#37226;",
    "onyomi": "RAKU",
    "kunyomi": " ",
    "portugues": "produtos lácteos, creme, caldo, suco de fruta"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "2",
    "kanji": "&#21083;",
    "onyomi": "GOU",
    "kunyomi": " ",
    "portugues": "robusto, vigor"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "156",
    "kanji": "&#36212;",
    "onyomi": "FU",
    "kunyomi": "omomu(ku)",
    "portugues": "continuar, obterm, tornar-se, tender"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "40",
    "kanji": "&#23490;",
    "onyomi": "JAKU/ SEKI",
    "kunyomi": "sabi/ sabi(shii)/ sabi(reru)/ sami(shii)",
    "portugues": "isolamento, calmamente, amadurecer, amadurecimento, morte de um padre"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "12",
    "kanji": "&#30406;",
    "onyomi": "BON",
    "kunyomi": " ",
    "portugues": "bacia, bandeja"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "85",
    "kanji": "&#28472;",
    "onyomi": "ZEN",
    "kunyomi": " ",
    "portugues": "firmemente, gradualmente avançando, finalmente, raramente"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "75",
    "kanji": "&#26719;",
    "onyomi": "SAN/ SEN",
    "kunyomi": "kakehashi",
    "portugues": "andaime, ripa, moldura, cais, ferrolho (porta)"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "167",
    "kanji": "&#37619;",
    "onyomi": "CHUU/ I/ SHU/ SHUU",
    "kunyomi": "i(ru)",
    "portugues": "calcular, cunhar moedas"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "30",
    "kanji": "&#22065;",
    "onyomi": "SHOKU",
    "kunyomi": "shoku(suru)/ tano(um)",
    "portugues": "confiar, solicitação, enviar uma mensagem"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "38",
    "kanji": "&#22900;",
    "onyomi": "DO",
    "kunyomi": "yatsu/ yakko",
    "portugues": "serva, escrava, dama de companhia"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "38",
    "kanji": "&#23072;",
    "onyomi": "SHIN",
    "kunyomi": " ",
    "portugues": "grávida, gravidez"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "85",
    "kanji": "&#28448;",
    "onyomi": "BAKU",
    "kunyomi": " ",
    "portugues": "vago, obscurecer, deserto, vasto"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "120",
    "kanji": "&#32094;",
    "onyomi": "KOU",
    "kunyomi": "shibo(ru)/ shi(meru)/ shi(maru)",
    "portugues": "estrangular, apertar, torcer"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "40",
    "kanji": "&#23472;",
    "onyomi": "SAI",
    "kunyomi": " ",
    "portugues": "supervisionar, administrador, regra"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "38",
    "kanji": "&#23186;",
    "onyomi": "BAI",
    "kunyomi": " ",
    "portugues": "mediador, ir entre"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "50",
    "kanji": "&#24070;",
    "onyomi": "HAN",
    "kunyomi": "ho",
    "portugues": "vela"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "9",
    "kanji": "&#20597;",
    "onyomi": "TEI",
    "kunyomi": " ",
    "portugues": "espião"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "61",
    "kanji": "&#24858;",
    "onyomi": "GU",
    "kunyomi": "oro(ka)",
    "portugues": "tolo, tolice, disparate, estúpidez"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "75",
    "kanji": "&#26847;",
    "onyomi": "TOU",
    "kunyomi": "mune/ muna-",
    "portugues": "trave horizontal, sulcar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "42",
    "kanji": "&#32918;",
    "onyomi": "SHOU",
    "kunyomi": "ayaka(ru)",
    "portugues": "semelhança"
  },
  {
    "nivel": "6",
    "tracos": "4",
    "bushu": "44",
    "kanji": "&#23610;",
    "onyomi": "SHAKU",
    "kunyomi": " ",
    "portugues": "shaku, pé Japonês, medida, escala, regra"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "119",
    "kanji": "&#31896;",
    "onyomi": "NEN",
    "kunyomi": "neba(ru)",
    "portugues": "grudento, aglutinado, gorduroso, perseverar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "162",
    "kanji": "&#36941;",
    "onyomi": "HEN",
    "kunyomi": "amane(ku)",
    "portugues": "em toda parte, tempos, amplamente,"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28113;",
    "onyomi": "SHUKU",
    "kunyomi": "shito(yaka)",
    "portugues": "gracioso, puro, suave"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "40",
    "kanji": "&#23452;",
    "onyomi": "GI",
    "kunyomi": "yoro(shii)/ yoro(shiku)",
    "portugues": "melhores cumprimentos, bons"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "8",
    "kanji": "&#34542;",
    "onyomi": "BAN",
    "kunyomi": "ebisu",
    "portugues": "bárbaro"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "32",
    "kanji": "&#22732;",
    "onyomi": "JOU",
    "kunyomi": "tsuchi",
    "portugues": "muito, terra, solo"
  },
  {
    "nivel": "8",
    "tracos": "20",
    "bushu": "164",
    "kanji": "&#37304;",
    "onyomi": "JOU",
    "kunyomi": "kamo(su)",
    "portugues": "fermentar, causa"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "149",
    "kanji": "&#35641;",
    "onyomi": "KIN",
    "kunyomi": "tsutsushi(mu)",
    "portugues": "discreto, reverentemente, humildemente"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "75",
    "kanji": "&#26429;",
    "onyomi": "KYUU",
    "kunyomi": "ku(chiru)",
    "portugues": "decair, apodrecer, permanecer recluso"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "72",
    "kanji": "&#26118;",
    "onyomi": "KON",
    "kunyomi": " ",
    "portugues": "descendentes, irmão mais velho"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "37",
    "kanji": "&#22868;",
    "onyomi": "HON",
    "kunyomi": " ",
    "portugues": "tumulto, correria"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "127",
    "kanji": "&#32791;",
    "onyomi": "MOU/ KOU/ KAU",
    "kunyomi": " ",
    "portugues": "decréscimo"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "140",
    "kanji": "&#24917;",
    "onyomi": "BO",
    "kunyomi": "shita(u)",
    "portugues": "consumir-se, sentir saudades, amar, adorar"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "78",
    "kanji": "&#27529;",
    "onyomi": "JUN",
    "kunyomi": " ",
    "portugues": "martírio, sair por pedir demissão"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "58",
    "kanji": "&#23563;",
    "onyomi": "JIN",
    "kunyomi": "tazu(neru)/ hiro",
    "portugues": "indagar, aprofundar, procurar"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "188",
    "kanji": "&#39620;",
    "onyomi": "ZUI",
    "kunyomi": " ",
    "portugues": "tutano, medula, miolo"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "63",
    "kanji": "&#25161;",
    "onyomi": "HI",
    "kunyomi": "tobira",
    "portugues": "porta frontal, página de título, página frontal"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "130",
    "kanji": "&#33180;",
    "onyomi": "MAKU",
    "kunyomi": " ",
    "portugues": "membrana"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "115",
    "kanji": "&#31292;",
    "onyomi": "KA",
    "kunyomi": "kase(gu)",
    "portugues": "salário, trabalhar, ganhar dinheiro"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27873;",
    "onyomi": "HOU",
    "kunyomi": "awa",
    "portugues": "bolhas, espuma"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "130",
    "kanji": "&#32908;",
    "onyomi": "KI",
    "kunyomi": "hada",
    "portugues": "textura, pele, corpo, granulação"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "44",
    "kanji": "&#23653;",
    "onyomi": "RI",
    "kunyomi": "ha(ku)",
    "portugues": "calçado, sapatos, botas, usar (sapatos, meias)"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "75",
    "kanji": "&#26842;",
    "onyomi": "HOU",
    "kunyomi": "tana/ -dana",
    "portugues": "prateleira, apoio, moldura, manto, grade"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "85",
    "kanji": "&#28404;",
    "onyomi": "TEKI",
    "kunyomi": "shizuku/ shitata(ru)",
    "portugues": "gota, gotejar"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "86",
    "kanji": "&#28810;",
    "onyomi": "SUI",
    "kunyomi": "ta(ku)/ -da(ki)",
    "portugues": "cozinhar, ferver"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "68",
    "kanji": "&#26007;",
    "onyomi": "TO/ TOU",
    "kunyomi": " ",
    "portugues": "concha grande,  concha p/ sake, medida de volume"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "109",
    "kanji": "&#30522;",
    "onyomi": "CHOU",
    "kunyomi": "naga(meru)",
    "portugues": "fitar, observar, olhar, ver, escrutinizar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "61",
    "kanji": "&#24736;",
    "onyomi": "YUU",
    "kunyomi": " ",
    "portugues": "permanência, tempo longo, distante, lazer"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "53",
    "kanji": "&#24265;",
    "onyomi": "REN",
    "kunyomi": " ",
    "portugues": "pechincha, razão, carga, suspeita, ponto, conta, pureza, preço baixo, honesto, barato, descansado, pacífica, satisfeita"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "85",
    "kanji": "&#27852;",
    "onyomi": "HITSU/ HI",
    "kunyomi": " ",
    "portugues": "Esvair-se, fluxo, ensopar, penetrar, ocultar"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "167",
    "kanji": "&#37676;",
    "onyomi": "REN",
    "kunyomi": "ne(ru)",
    "portugues": "tempera, refinar, broca, treinar, polir"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "85",
    "kanji": "&#28460;",
    "onyomi": "SHI",
    "kunyomi": "tsu(keru)/ tsu(karu)/ -dzu(ke)/ -dzuke",
    "portugues": "por em conserva, ensopar, umedecer, empapar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "85",
    "kanji": "&#28198;",
    "onyomi": "KA",
    "kunyomi": "uzu",
    "portugues": "redemoinho, turbilhão"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "9",
    "kanji": "&#20632;",
    "onyomi": "SAN",
    "kunyomi": "kasa",
    "portugues": "guarda-chuva"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20294;",
    "onyomi": "TAN",
    "kunyomi": "tada(shi)",
    "portugues": "entretanto, mas"
  },
  {
    "nivel": "3",
    "tracos": "5",
    "bushu": "108",
    "kanji": "&#30399;",
    "onyomi": "BEI&#12288;",
    "kunyomi": "sara",
    "portugues": "prato(tipo), porção, prato (objeto)"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "98",
    "kanji": "&#29942;",
    "onyomi": "BIN",
    "kunyomi": "kame",
    "portugues": "vaso de flores, garrafa, garrafinha, jarro, barril, cântaro"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "121",
    "kanji": "&#32566;",
    "onyomi": "KAN/ FU",
    "kunyomi": "kama",
    "portugues": "lata, pote, recipiente"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "75",
    "kanji": "&#27133;",
    "onyomi": "SOU",
    "kunyomi": "fune",
    "portugues": "barril, balde, tanque"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "85",
    "kanji": "&#28655;",
    "onyomi": "TAKU",
    "kunyomi": "susu(gu)/ yusu(gu)",
    "portugues": "lavanderia, lavar, verter em, enxáguar"
  },
  {
    "nivel": "6",
    "tracos": "10",
    "bushu": "1",
    "kanji": "&#34453;",
    "onyomi": "SAN/ TEN",
    "kunyomi": "kaiko/ ko",
    "portugues": "bicho-da-seda"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "32",
    "kanji": "&#22769;",
    "onyomi": "ICHI/ ITSU",
    "kunyomi": "hitotsu",
    "portugues": "um"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "1",
    "kanji": "&#24336;",
    "onyomi": "NI/ JI",
    "kunyomi": "futa(tsu)/ soe",
    "portugues": "II, dois, segundo"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "9",
    "kanji": "&#20282;",
    "onyomi": "SHI",
    "kunyomi": "ukaga(u)",
    "portugues": "retribuir visita, perguntar, indagar, perguntar, implorar"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "104",
    "kanji": "&#30294;",
    "onyomi": "HEKI",
    "kunyomi": "kuse/ kuse(ni)",
    "portugues": "maneirismo, hábito, vício, traço, falta, entortar"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "162",
    "kanji": "&#36983;",
    "onyomi": "SEN",
    "kunyomi": "utsu(ru)/ utsu(su)/ miyakogae",
    "portugues": "transição, mover, mudança"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "64",
    "kanji": "&#25220;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "extrato, seleção, resumo, cópia, espalhar em camada fina"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "32",
    "kanji": "&#22549;",
    "onyomi": "DA",
    "kunyomi": "da-/ o(chiru)/ kuzu(su)/ kuzu(reru)",
    "portugues": "degenerado, descender"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "50",
    "kanji": "&#24163;",
    "onyomi": "HEI",
    "kunyomi": "nusa",
    "portugues": "caixa, maus hábitos, prefixo p/ expressar humildade, presente, oferendas em roupas Shinto, corda, cortar papel"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "155",
    "kanji": "&#36198;",
    "onyomi": "SHA",
    "kunyomi": " ",
    "portugues": "absolvição, perdão"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "130",
    "kanji": "&#32938;",
    "onyomi": "BOU",
    "kunyomi": " ",
    "portugues": "obeso, gordura"
  },
  {
    "nivel": "6",
    "tracos": "14",
    "bushu": "112",
    "kanji": "&#30913;",
    "onyomi": "JI",
    "kunyomi": " ",
    "portugues": "imã, porcelana"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "116",
    "kanji": "&#31378;",
    "onyomi": "CHITSU",
    "kunyomi": " ",
    "portugues": "tampar, obstruir, colocar um batoque"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "180",
    "kanji": "&#38907;",
    "onyomi": "IN",
    "kunyomi": " ",
    "portugues": "rime, elegância, tom"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "30",
    "kanji": "&#21914;",
    "onyomi": "KAN",
    "kunyomi": "wame(ku)",
    "portugues": "gritar, choro, grito"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "75",
    "kanji": "&#27004;",
    "onyomi": "ROU",
    "kunyomi": "takadono",
    "portugues": "vigia, vigilância, alto edifício"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "154",
    "kanji": "&#36042;",
    "onyomi": "ZOKU",
    "kunyomi": " ",
    "portugues": "assaltante, rebelde, traidor, ladrão"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "40",
    "kanji": "&#23527;",
    "onyomi": "NEI",
    "kunyomi": "mushi(ro)",
    "portugues": "melhor, preferivelmente"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "164",
    "kanji": "&#37276;",
    "onyomi": "SHUU",
    "kunyomi": "miniku(i)/ shiko",
    "portugues": "sujo, feio, vergonha, má aparência"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "161",
    "kanji": "&#36785;",
    "onyomi": "JOKU",
    "kunyomi": "hazukashi(meru)",
    "portugues": "embaraçar, humilhar, envergonhar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "184",
    "kanji": "&#39165;",
    "onyomi": "HOU",
    "kunyomi": "a(kiru)/ a(kasu)/ a(ku)",
    "portugues": "saciado, cansado de, entediado, hátisfeito"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "184",
    "kanji": "&#39138;",
    "onyomi": "KI",
    "kunyomi": "u(eru)",
    "portugues": "faminto, morrer de fome"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "77",
    "kanji": "&#38604;",
    "onyomi": "SHI",
    "kunyomi": "me-/ mesu/ men",
    "portugues": "feminino, fêmea"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "57",
    "kanji": "&#24359;",
    "onyomi": "KO",
    "kunyomi": " ",
    "portugues": "arco"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "162",
    "kanji": "&#36880;",
    "onyomi": "CHIKU",
    "kunyomi": " ",
    "portugues": "perseguir, afastar, caçar, efetuar, atingir, comprometer"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "46",
    "kanji": "&#23777;",
    "onyomi": "KYOU/ KOU",
    "kunyomi": "hazama",
    "portugues": "garganta (montanha), ravina"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "18",
    "kanji": "&#21078;",
    "onyomi": "BOU",
    "kunyomi": " ",
    "portugues": "divida"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "9",
    "kanji": "&#20240;",
    "onyomi": "BATSU/ HATSU/ KA/ BOCHI",
    "kunyomi": "ki(ru)/ somu(ku)/ u(tsu)",
    "portugues": "derrotado, bater, ataque, punir"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "104",
    "kanji": "&#30196;",
    "onyomi": "CHI",
    "kunyomi": "shi(reru)/ oroka",
    "portugues": "tolo, estúpido"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "120",
    "kanji": "&#32283;",
    "onyomi": "BAKU",
    "kunyomi": "shiba(ru)",
    "portugues": "atar, prender, unir, amarrar, apertar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "149",
    "kanji": "&#35424;",
    "onyomi": "EI",
    "kunyomi": "yo(mu)/ uta(u)",
    "portugues": "recital, poema, canção, composição"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "154",
    "kanji": "&#36060;",
    "onyomi": "SHI",
    "kunyomi": "tamawa(ru)/ tama(u)/ tamo(u)",
    "portugues": "concessão, presente, vantagem, resultados"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "61",
    "kanji": "&#24724;",
    "onyomi": "KAI",
    "kunyomi": "ku(iru)/ ku(yamu)/ kuya(shii)",
    "portugues": "arrepender-se, lamentar"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "4",
    "kanji": "&#21329;",
    "onyomi": "HI",
    "kunyomi": "iya(shii)/ iya(shimu)/ iya(shimeru)",
    "portugues": "humilde, ordinário, vil, vulgar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "61",
    "kanji": "&#24908;",
    "onyomi": "KOU",
    "kunyomi": "awa(teru)/ awa(tadashii)",
    "portugues": "desconcertado, ser confundido, perder a cabeça"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "79",
    "kanji": "&#27572;",
    "onyomi": "OU",
    "kunyomi": "nagu(ru)",
    "portugues": "assalto, ataque, batida, bater"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "157",
    "kanji": "&#36339;",
    "onyomi": "CHOU",
    "kunyomi": "há(neru)/ to(bu)/ -to(bi)",
    "portugues": "pulo, saltar, pular, empurrão, galope, dólar, respingar, erupção, tranco"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "32",
    "kanji": "&#22602;",
    "onyomi": "KAI/ KE",
    "kunyomi": "katamari/ tsuchikure",
    "portugues": "grumo, montículo, reboco, coágulo, massa"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "64",
    "kanji": "&#25830;",
    "onyomi": "SATSU",
    "kunyomi": "su(ru)/ su(reru)/ -zu(re)/ kosu(ru)/ kosu(reru)",
    "portugues": "arranhar, esfregar, coçar, escovar, atritar, explorar"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "120",
    "kanji": "&#32341;",
    "onyomi": "ZEN",
    "kunyomi": "tsukuro(u)",
    "portugues": "cerzir, reparar, consertar, ajeitar, por em ordem, ajustar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "85",
    "kanji": "&#28167;",
    "onyomi": "KATSU",
    "kunyomi": "kawa(ku)",
    "portugues": "sede, seca, ressecar-se"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "61",
    "kanji": "&#24680;",
    "onyomi": "KON",
    "kunyomi": "ura(um)/ ura(meshii)",
    "portugues": "lamento, rancor, resentimento, malícia, ódio"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "140",
    "kanji": "&#33550;",
    "onyomi": "KEI/ KYOU",
    "kunyomi": "kuki",
    "portugues": "caule, talo"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "9",
    "kanji": "&#20398;",
    "onyomi": "BU",
    "kunyomi": "anado(ru)/ anazu(ru)",
    "portugues": "desdém, desprezo, desprezar"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "64",
    "kanji": "&#25662;",
    "onyomi": "SAKU",
    "kunyomi": "shibo(ru)",
    "portugues": "espremer"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "61",
    "kanji": "&#24764;",
    "onyomi": "TOU",
    "kunyomi": "ita(já)",
    "portugues": "lamento, sentir pesar"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "2",
    "kanji": "&#24340;",
    "onyomi": "CHOU",
    "kunyomi": "tomura(u)/ tobura(u)",
    "portugues": "condolencias, velório, funeral"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "112",
    "kanji": "&#30813;",
    "onyomi": "SHOU",
    "kunyomi": " ",
    "portugues": "nitrato, salitre"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "61",
    "kanji": "&#24816;",
    "onyomi": "DA",
    "kunyomi": " ",
    "portugues": "preguiçoso, ociosidade"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "77",
    "kanji": "&#32943;",
    "onyomi": "KOU",
    "kunyomi": "gaenji(ru)",
    "portugues": "acordo, consentir, concordar com"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "140",
    "kanji": "&#33419;",
    "onyomi": "U",
    "kunyomi": "imo",
    "portugues": "batata"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "184",
    "kanji": "&#39187;",
    "onyomi": "GA",
    "kunyomi": "u(eru)",
    "portugues": "Morrer de fome, com fome, sede"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20537;",
    "onyomi": "KEN",
    "kunyomi": "tsuma(shii)/ tsudzumayaka",
    "portugues": "frugal, economia, econômico"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "116",
    "kanji": "&#31363;",
    "onyomi": "SETSU",
    "kunyomi": "nusu(um)/ hiso(kani)",
    "portugues": "discrição, roubar, segredo, particular, aquietar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "75",
    "kanji": "&#26874;",
    "onyomi": "KAN",
    "kunyomi": " ",
    "portugues": "caixão fúnebre, caixa fechada"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "32",
    "kanji": "&#22707;",
    "onyomi": "FUN",
    "kunyomi": " ",
    "portugues": "túmulo, montículo"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "85",
    "kanji": "&#28422;",
    "onyomi": "SHITSU",
    "kunyomi": "urushi",
    "portugues": "verniz, envernizar"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "32",
    "kanji": "&#22718;",
    "onyomi": "KON",
    "kunyomi": " ",
    "portugues": "terra cultivada"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "38",
    "kanji": "&#23035;",
    "onyomi": "IN",
    "kunyomi": " ",
    "portugues": "matrimônio, casa"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "116",
    "kanji": "&#31407;",
    "onyomi": "YOU",
    "kunyomi": "kama",
    "portugues": "fornalha, forno"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "104",
    "kanji": "&#30168;",
    "onyomi": "TOU",
    "kunyomi": " ",
    "portugues": "varíola, catapora"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "4",
    "kanji": "&#21519;",
    "onyomi": "RI",
    "kunyomi": " ",
    "portugues": "oficial, um oficial"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "170",
    "kanji": "&#38506;",
    "onyomi": "BAI",
    "kunyomi": " ",
    "portugues": "cortesia, seguir, acompanhar, atender"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "32",
    "kanji": "&#22609;",
    "onyomi": "SO",
    "kunyomi": "deku",
    "portugues": "modelo, moldura"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "130",
    "kanji": "&#35588;",
    "onyomi": "TOU",
    "kunyomi": " ",
    "portugues": "mimeográfo, cópia"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "9",
    "kanji": "&#20754;",
    "onyomi": "JU",
    "kunyomi": " ",
    "portugues": "confucianista"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "64",
    "kanji": "&#25335;",
    "onyomi": "GOU",
    "kunyomi": " ",
    "portugues": "torturar, golpear, batida"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "4",
    "kanji": "&#26021;",
    "onyomi": "SEKI",
    "kunyomi": "shirizo(keru)",
    "portugues": "rejeitado, recuo, retirada, retroceder, repelir, empurrar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "38",
    "kanji": "&#23167;",
    "onyomi": "SEI",
    "kunyomi": "muko",
    "portugues": "noivo, genro"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "8",
    "kanji": "&#20139;",
    "onyomi": "KYOU/ KOU",
    "kunyomi": "u(keru)",
    "portugues": "receber, sofrer, atender (telefone), tomar, obter, pegar"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20515;",
    "onyomi": "HOU",
    "kunyomi": "nara(u)",
    "portugues": "emular, imitar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "170",
    "kanji": "&#38517;",
    "onyomi": "RYOU",
    "kunyomi": "misasagi",
    "portugues": "mausoleo, túmulo imperial"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "29",
    "kanji": "&#21460;",
    "onyomi": "SHUKU",
    "kunyomi": " ",
    "portugues": "tio, juventude"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "53",
    "kanji": "&#24248;",
    "onyomi": "YOU",
    "kunyomi": " ",
    "portugues": "lugar comum, comum, emprego"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "38",
    "kanji": "&#23265;",
    "onyomi": "CHAKU/ TEKI",
    "kunyomi": " ",
    "portugues": "esposa legítima, descendência direta (não-bastarda)"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "2",
    "kanji": "&#34935;",
    "onyomi": "CHUU",
    "kunyomi": " ",
    "portugues": "íntimo, coração, mente, interior"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "19",
    "kanji": "&#21189;",
    "onyomi": "CHOKU",
    "kunyomi": "imashi(meru)/ mikotonori",
    "portugues": "pedido imperial"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "149",
    "kanji": "&#35412;",
    "onyomi": "SHOU",
    "kunyomi": "mikotonori",
    "portugues": "decreto imperial"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "140",
    "kanji": "&#32365;",
    "onyomi": "KEN",
    "kunyomi": "mayu/ kinu",
    "portugues": "casulo"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "1",
    "kanji": "&#19993;",
    "onyomi": "HEI",
    "kunyomi": "hinoe",
    "portugues": "terceira classe, 3º, 3º signo do calendário Chinês"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "69",
    "kanji": "&#26020;",
    "onyomi": "KIN",
    "kunyomi": " ",
    "portugues": "machado, 1.32 lb, felino"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "40",
    "kanji": "&#23477;",
    "onyomi": "SHOU",
    "kunyomi": "yoi",
    "portugues": "pouco tempo, noite, noite antecipada"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "111",
    "kanji": "&#30703;",
    "onyomi": "KYOU",
    "kunyomi": "ta(meru)",
    "portugues": "retificar, endireitar, corrigir, reformar, curar, controlar, fingir, falsificar"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "27",
    "kanji": "&#21380;",
    "onyomi": "YAKU",
    "kunyomi": " ",
    "portugues": "infeliz, desgraça, sorte ruim, desaster"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "164",
    "kanji": "&#37196;",
    "onyomi": "SHAKU",
    "kunyomi": "ku(mu)",
    "portugues": "trabalhar em bares, servindo sake, o anfitrião, sucção (água), concha, balde, bomba"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "9",
    "kanji": "&#20472;",
    "onyomi": "HOU",
    "kunyomi": " ",
    "portugues": "estipêndio, salário"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "85",
    "kanji": "&#27946;",
    "onyomi": "KOU",
    "kunyomi": " ",
    "portugues": "dilúvio, enchente, vasto"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "170",
    "kanji": "&#38468;",
    "onyomi": "FU",
    "kunyomi": "tsu(keru)/ tsu(ku)",
    "portugues": "fixar, anexar, referir-se a"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "122",
    "kanji": "&#32631;",
    "onyomi": "HI",
    "kunyomi": "maka(ri-)/ ya(meru)",
    "portugues": "deixar, parada, sacar, ir"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "86",
    "kanji": "&#29033;",
    "onyomi": "HAN/ BON",
    "kunyomi": "wazura(u)/ wazura(wasu)",
    "portugues": "ansiedade, dificuldade, preocupação, dor, mal, aborrecer, chateação, irritante"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "32",
    "kanji": "&#22570;",
    "onyomi": "KAN/ TAN",
    "kunyomi": "ta(eru)/ tama(ru)/ ko(raeru)/ kota(eru)",
    "portugues": "opor-se, suportar, apoiar, resistir"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "85",
    "kanji": "&#28651;",
    "onyomi": "RAN",
    "kunyomi": "mida(rini)/ mida(rigamashii)",
    "portugues": "excessivo, inundação, espalhar por"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "149",
    "kanji": "&#35585;",
    "onyomi": "ETSU",
    "kunyomi": " ",
    "portugues": "platéia, audiência (com o rei)"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "40",
    "kanji": "&#23521;",
    "onyomi": "KA",
    "kunyomi": " ",
    "portugues": "viúva, minoria, poucos"
  },
  {
    "nivel": "8",
    "tracos": "15",
    "bushu": "162",
    "kanji": "&#36981;",
    "onyomi": "JUN",
    "kunyomi": " ",
    "portugues": "aceitar e executar, seguir, obedecer, aprender"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "118",
    "kanji": "&#31623;",
    "onyomi": "KA/ KO",
    "kunyomi": " ",
    "portugues": "sufixo para contagem de coisas em geral"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "162",
    "kanji": "&#36805;",
    "onyomi": "JIN",
    "kunyomi": " ",
    "portugues": "rápido, ligeiro"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "181",
    "kanji": "&#38930;",
    "onyomi": "HAN",
    "kunyomi": "waka(tsu)",
    "portugues": "partição, compreende"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "19",
    "kanji": "&#21182;",
    "onyomi": "GAI",
    "kunyomi": " ",
    "portugues": "censura, investigação criminal"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "1",
    "kanji": "&#29885;",
    "onyomi": "JI",
    "kunyomi": " ",
    "portugues": "selo  imperial"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "12",
    "kanji": "&#32705;",
    "onyomi": "OU",
    "kunyomi": "okina",
    "portugues": "velho venerável"
  },
  {
    "nivel": "5",
    "tracos": "5",
    "bushu": "2",
    "kanji": "&#26087;",
    "onyomi": "KYUU",
    "kunyomi": "furu(i)/ moto",
    "portugues": "tempos antigos, coisas antigas, amigo velho, ex-, anteriores"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "9",
    "kanji": "&#20399;",
    "onyomi": "KOU",
    "kunyomi": " ",
    "portugues": "marques, senhor, daimyo"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "167",
    "kanji": "&#37521;",
    "onyomi": "SEN",
    "kunyomi": " ",
    "portugues": "ferro-gusa"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "167",
    "kanji": "&#37656;",
    "onyomi": "SUI",
    "kunyomi": "tsumu/ omori",
    "portugues": "pêso, prumo, pêso p/ anzol"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "140",
    "kanji": "&#34218;",
    "onyomi": "SHIN",
    "kunyomi": "takigi/ maki",
    "portugues": "combustível, lenha, acender fogo"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "4",
    "kanji": "&#21249;",
    "onyomi": "-",
    "kunyomi": "monme/ me/ hyakume",
    "portugues": "monme, 3.75 gramas, (kokuji)"
  },
  {
    "nivel": "8",
    "tracos": "3",
    "bushu": "20",
    "kanji": "&#21242;",
    "onyomi": "SHAKU",
    "kunyomi": " ",
    "portugues": "concha, afundar"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "8",
    "kanji": "&#30045;",
    "onyomi": "BOU/ HO/ MO/ MU",
    "kunyomi": "se/ une",
    "portugues": "sulco"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "141",
    "kanji": "&#34398;",
    "onyomi": "GU",
    "kunyomi": "osore",
    "portugues": "mal-estar, medo, ansiedade, assunto"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "87",
    "kanji": "&#29237;",
    "onyomi": "SHAKU",
    "kunyomi": " ",
    "portugues": "barão, nobreza, posição na nobreza"
  },
  {
    "nivel": "8",
    "tracos": "16",
    "bushu": "171",
    "kanji": "&#38583;",
    "onyomi": "REI",
    "kunyomi": "shitaga(u)/ shimobe",
    "portugues": "escravo, servo, prisioneiro, criminosso, seguidor"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "30",
    "kanji": "&#22151;",
    "onyomi": "KAKU",
    "kunyomi": "odo(kasu)",
    "portugues": "ameaça, dignidade, majestade, ameaçar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "130",
    "kanji": "&#33081;",
    "onyomi": "CHOU",
    "kunyomi": "ha(reru)/ fuku(ramu)/ fuku(reru)",
    "portugues": "dilatar, dilatação, saliência, completa, intumescência"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "130",
    "kanji": "&#26389;",
    "onyomi": "CHIN",
    "kunyomi": " ",
    "portugues": "plural majestático (nós ao invés de eu), nós  do imperador"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "1",
    "kanji": "&#19988;",
    "onyomi": "SHO/ SO/ SHOU",
    "kunyomi": "ka(tsu)",
    "portugues": "outrossim, também, além disso"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "2",
    "kanji": "&#29978;",
    "onyomi": "JIN",
    "kunyomi": "hanaha(da)/ hanaha(dashii)",
    "portugues": "tremendamente, muito, grande, excessivamente"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "38",
    "kanji": "&#23244;",
    "onyomi": "KEN/ GEN",
    "kunyomi": "kira(u)/ kira(i)/ iya",
    "portugues": "desgostar, detestar, odiar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "142",
    "kanji": "&#34503;",
    "onyomi": "JÁ/ DA/ I/ YA",
    "kunyomi": "hebi",
    "portugues": "cobra, serpente, bebedor duro"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "142",
    "kanji": "&#34509;",
    "onyomi": "KEI",
    "kunyomi": "hotaru",
    "portugues": "pirilampo, vaga-lume"
  },
  {
    "nivel": "8",
    "tracos": "17",
    "bushu": "181",
    "kanji": "&#38971;",
    "onyomi": "HIN",
    "kunyomi": "shiki(rini)",
    "portugues": "repetidamente, recorrente"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "161",
    "kanji": "&#21767;",
    "onyomi": "SHIN",
    "kunyomi": "kuchibiru",
    "portugues": "lábios"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "75",
    "kanji": "&#26528;",
    "onyomi": "-",
    "kunyomi": "waku",
    "portugues": "moldura, estrutura, carretel, cilindro,  (kokuji)"
  },
  {
    "nivel": "8",
    "tracos": "14",
    "bushu": "162",
    "kanji": "&#36974;",
    "onyomi": "SHA",
    "kunyomi": "saegi(ru)",
    "portugues": "interceptar, interromper, obstruir"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "64",
    "kanji": "&#25407;",
    "onyomi": "SOU",
    "kunyomi": "sa(su)/ hasa(mu)",
    "portugues": "inserir, inserido, enxertar, usar (espada)"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "145",
    "kanji": "&#35167;",
    "onyomi": "KIN",
    "kunyomi": "eri",
    "portugues": "colarinho, pescoço, lapela"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "167",
    "kanji": "&#37474;",
    "onyomi": "HACHI/ HATSU",
    "kunyomi": " ",
    "portugues": "taça, balde de arroz, pote, coroa"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "75",
    "kanji": "&#26643;",
    "onyomi": "SEN",
    "kunyomi": " ",
    "portugues": "rolha, tampa, tampão, cortiça"
  },
  {
    "nivel": "8",
    "tracos": "9",
    "bushu": "64",
    "kanji": "&#25375;",
    "onyomi": "KYOU/ SHOU",
    "kunyomi": "hasa(um)/ hasa(maru)/ wakibasa(um)+C381/ sashihaum(um)",
    "portugues": "um pouco, entre"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "32",
    "kanji": "&#22592;",
    "onyomi": "HEI/ BEI",
    "kunyomi": " ",
    "portugues": "cerca, parede"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "64",
    "kanji": "&#25645;",
    "onyomi": "TOU",
    "kunyomi": " ",
    "portugues": "juntar, carregar (um veículo), viagem"
  },
  {
    "nivel": "8",
    "tracos": "6",
    "bushu": "8",
    "kanji": "&#22916;",
    "onyomi": "MOU/ BOU",
    "kunyomi": "mida(rini)",
    "portugues": "desilusão, desnecessariamente, sem autoridade, inconsequente"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "181",
    "kanji": "&#38929;",
    "onyomi": "GAN",
    "kunyomi": "kataku",
    "portugues": "tolo,teimoso, firmamente"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "130",
    "kanji": "&#32930;",
    "onyomi": "SHI",
    "kunyomi": " ",
    "portugues": "membros, braços & pernas"
  },
  {
    "nivel": "8",
    "tracos": "13",
    "bushu": "145",
    "kanji": "&#35088;",
    "onyomi": "KATSU",
    "kunyomi": " ",
    "portugues": "marrom, kimono felpudo"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "17",
    "kanji": "&#20985;",
    "onyomi": "OU",
    "kunyomi": "kubo(um)/ heko(um)/ boko",
    "portugues": "côncavo, concavidade, afundado"
  },
  {
    "nivel": "8",
    "tracos": "5",
    "bushu": "2",
    "kanji": "&#20984;",
    "onyomi": "TOTSU",
    "kunyomi": "deko",
    "portugues": "convexo, ímpar"
  },
  {
    "nivel": "8",
    "tracos": "7",
    "bushu": "64",
    "kanji": "&#25226;",
    "onyomi": "HA/ WA",
    "kunyomi": " ",
    "portugues": "agarre, pacote, punhado, sufixo para contagem de  pacotes"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25273;",
    "onyomi": "MATSU",
    "kunyomi": " ",
    "portugues": "esfregar, pintura, apagar"
  },
  {
    "nivel": "8",
    "tracos": "11",
    "bushu": "30",
    "kanji": "&#21917;",
    "onyomi": "KATSU",
    "kunyomi": " ",
    "portugues": "rouco, ralhar"
  },
  {
    "nivel": "8",
    "tracos": "19",
    "bushu": "140",
    "kanji": "&#34299;",
    "onyomi": "SOU",
    "kunyomi": "mo",
    "portugues": "algas, planta flutuante"
  },
  {
    "nivel": "8",
    "tracos": "10",
    "bushu": "162",
    "kanji": "&#36893;",
    "onyomi": "SEI",
    "kunyomi": "yu(ku)",
    "portugues": "partir, morrer"
  },
  {
    "nivel": "8",
    "tracos": "18",
    "bushu": "104",
    "kanji": "&#30290;",
    "onyomi": "YU",
    "kunyomi": "i(eru)/ iya(su)",
    "portugues": "restabelecimento, cura, saciar (sede), saciar vontade de vingança"
  },
  {
    "nivel": "8",
    "tracos": "8",
    "bushu": "64",
    "kanji": "&#25296;",
    "onyomi": "KAI",
    "kunyomi": " ",
    "portugues": "seqüestrar, falsificar"
  },
  {
    "nivel": "8",
    "tracos": "12",
    "bushu": "173",
    "kanji": "&#38640;",
    "onyomi": "FUN",
    "kunyomi": " ",
    "portugues": "atmosfera, nevoeiro"
  },
  {
    "nivel": "8",
    "tracos": "4",
    "bushu": "5",
    "kanji": "&#23663;",
    "onyomi": "TON",
    "kunyomi": " ",
    "portugues": "quarteis, estação de polícia, acampamento"
  },
  {
    "nivel": "6",
    "tracos": "8",
    "bushu": "12",
    "kanji": "&#20006;",
    "onyomi": "HEI/ HOU",
    "kunyomi": "na(mi)/ nara(beru)/ nara(bu)/ nara(bini)",
    "portugues": "fila, e, além disso, assim como, faz fila, classifica com, rival, igual"
  }
];
export default kanjiData;
