import { Text, View, Image } from "react-native";
import styles from "./styles";
import { ScrollView } from "react-native-web";
import { Feather } from "@expo/vector-icons"

export default function SobreNos() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.quemsomos}>
                    <Text style={styles.text}>Quem Somos</Text>
                </View>
                <Text style={styles.minitexto}>Sobre Nossa Empresa</Text>
                <View style={styles.texto}>
                    <Text style={styles.valores}>Conheça a <Text style={styles.title1}>B&B Delivery</Text>, sua nova maneira de saborear suas refeições favoritas com praticidade e conveniência.
                        Nosso aplicativo revoluciona a forma como você pede comida, oferecendo uma ampla variedade de restaurantes e pratos diretamente na palma da sua mão.
                        Com uma interface intuitiva e fácil de usar, você pode navegar pelos menus, fazer pedidos personalizados e acompanhar o status da entrega em tempo real.
                    </Text>
                </View>

                <Text style={styles.minitexto}>Nossos Valores</Text>
                <View style={styles.texto}>
                    <Text style={styles.titulo}>Excelência no Atendimento ao Cliente</Text>
                    <Text style={styles.valores}>Priorizamos a excelência no atendimento ao cliente, garantindo que cada interação seja marcada pela cortesia, eficiência e respeito.</Text>
                    <Text style={styles.titulo}>Compromisso com a Qualidade</Text>
                    <Text style={styles.valores}>Comprometemo-nos com a qualidade, trabalhando em estreita colaboração com nossos restaurantes parceiros para garantir que cada refeição entregue atenda aos mais altos padrões.</Text>
                    <Text style={styles.titulo}>Práticas Sustentáveis</Text>
                    <Text style={styles.valores}>Estamos empenhados em práticas sustentáveis, buscando constantemente maneiras de reduzir nosso impacto ambiental e contribuir para um mundo mais saudável.</Text>
                </View>
                <Text style={styles.minitexto}>Sobre Nossa <Text style={styles.title1}>Equipe</Text></Text>
                <View style={styles.text}>
                    <View style={styles.equipe}>
                            <View style={styles.imagem}>
                                <Image source={require("../../../assets/nicolly.jpg")} style={{ borderRadius: 100, margin: 10, width: 200, height: 200, marginLeft: 80, marginTop: 30  }} />
                            </View>
                            <View style={styles.viewnome}>
                                <Text style={styles.name}> Nicolly Isabeli</Text>
                            </View>
                            <View style={styles.icons}>
                                <a href="https://github.com/santnii?igsh=MWtwMGJlM2JlcnB2cQ=="> <Feather name="instagram" size={30} color="#D20000" /></a>
                                <a href="http://github.com/santnii"><Feather name="github" size={30} color="#D20000" /></a>
                            </View>
                            <View style={styles.desc}>
                                <Text style={styles.textdesc}>Tem 17 anos, é uma aluna do Senai Valinhos no curso de Desenvolvimento de Sistemas, onde exerce várias atividades diárias. 
                                É uma desenvolvedora e designer, que exerce sua função com excelência na B&B Delivery.</Text>
                            </View>
                    </View>

                    <View style={styles.equipe}>
                        <View style={styles.imagem}>
                            <Image source={require("../../../assets/isa.jpg")} style={{ borderRadius: 100, margin: 10, width: 200, height: 200, marginLeft: 80, marginTop: 50 }} />
                        </View>
                        <View style={styles.viewnome1}>
                            <Text style={styles.name}> Isabela Alcântara</Text>
                        </View>
                        <View style={styles.icons}>
                            <a href="http://www.instagram.com/_alcantaraa_?igsh=MWtwMGJlM2JlcnB2cQ=="> <Feather name="instagram" size={30} color="#D20000" /></a>
                            <a href="http://github.com/Belaalcantara"><Feather name="github" size={30} color="#D20000" /></a>
                        </View>
                        <View style={styles.desc}>
                                <Text style={styles.textdesc}>Tem 18 anos, é uma aluna do Senai Valinhos no curso de Desenvolvimento de Sistemas, onde exerce várias atividades diárias. 
                                É uma desenvolvedora de front end, que exerce sua função com excelência na B&B Delivery.</Text>
                            </View>
                    </View>

                    <View style={styles.equipe}>
                            <View style={styles.imagem}>
                                <Image source={require("../../../assets/ana.jpg")} style={{ borderRadius: 100, margin: 10, width: 200, height: 200, marginLeft: 80, marginTop: 50  }} />
                            </View>
                            <View style={styles.viewnome}>
                                <Text style={styles.name}>Ana Júlia Pontes</Text>
                            </View>
                            <View style={styles.icons}>
                                <a href="http://www.instagram.com/anajupontess_?igsh=MWtwMGJlM2JlcnB2cQ=="> <Feather name="instagram" size={30} color="#D20000" /></a>
                                <a href="http://github.com/aninha306"><Feather name="github" size={30} color="#D20000" /></a>
                            </View>
                            <View style={styles.desc}>
                                <Text style={styles.textdesc}>Tem 17 anos, é uma aluna do Senai Valinhos no curso de Desenvolvimento de Sistemas, onde exerce várias atividades diárias. 
                                É uma desenvolvedora de front end, que exerce sua função com excelência na B&B Delivery.</Text>
                            </View>
                    </View>

                    <View style={styles.equipe}>
                            <View style={styles.imagem}>
                                <Image source={require("../../../assets/manu.jpg")} style={{ borderRadius: 100, margin: 10, width: 200, height: 200, marginLeft: 80, marginTop: 50  }} />
                            </View>
                            <View style={styles.viewnome}>
                                <Text style={styles.name}>Manuela Queiroz</Text>
                            </View>
                            <View style={styles.icons}>
                                <a href="http://www.instagram.com/manuumqm?igsh=MWtwMGJlM2JlcnB2cQ=="> <Feather name="instagram" size={30} color="#D20000" /></a>
                                <a href="http://github.com/manuumqm"><Feather name="github" size={30} color="#D20000" /></a>
                            </View>
                            <View style={styles.desc}>
                                <Text style={styles.textdesc}>Tem 17 anos, é uma aluna do Senai Valinhos no curso de Desenvolvimento de Sistemas, onde exerce várias atividades diárias. 
                                É uma desenvolvedora de front end, que exerce sua função com excelência na B&B Delivery.</Text>
                            </View>
                    </View>

                    <View style={styles.equipe}>
                            <View style={styles.imagem}>
                                <Image source={require("../../../assets/pedro.jpg")} style={{ borderRadius: 100, margin: 10, width: 200, height: 200, marginLeft: 80, marginTop: 50  }} />
                            </View>
                            <View style={styles.viewnome}>
                                <Text style={styles.name}>Pedro Monteiro</Text>
                            </View>
                            <View style={styles.icons}>
                                <a href="http://www.instagram.com/monteiropedro__?igsh=MWtwMGJlM2JlcnB2cQ=="> <Feather name="instagram" size={30} color="#D20000" /></a>
                                <a href="http://github.com/pedromonteir01"><Feather name="github" size={30} color="#D20000" /></a>
                            </View>
                            <View style={styles.desc}>
                                <Text style={styles.textdesc}>Tem 17 anos, é um aluno do Senai Valinhos no curso de Desenvolvimento de Sistemas, onde exerce várias atividades diárias. 
                                É um desenvolvedor de back end, que exerce sua função com excelência na B&B Delivery.</Text>
                            </View>
                    </View>

                    <View style={styles.equipe}>
                            <View style={styles.imagem}>
                                <Image source={require("../../../assets/miotto.jpg")} style={{ borderRadius: 100, margin: 10, width: 200, height: 200, marginLeft: 80, marginTop: 50  }} />
                            </View>
                            <View style={styles.viewnome2}>
                                <Text style={styles.name}>Felipe Miotto</Text>
                            </View>
                            <View style={styles.icons}>
                                <a href="http://www.instagram.com/_alcantaraa_?igsh=MWtwMGJlM2JlcnB2cQ=="> <Feather name="instagram" size={30} color="#D20000"/></a>
                                <a href="http://github.com/miottofelipee"><Feather name="github" size={30} color="#D20000" /></a>
                            </View>
                            <View style={styles.desc}>
                                <Text style={styles.textdesc}>Tem 17 anos, é um aluno do Senai Valinhos no curso de Desenvolvimento de Sistemas, onde exerce várias atividades diárias. 
                                É um desenvolvedor de back end, que exerce sua função com excelência na B&B Delivery.</Text>
                            </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}