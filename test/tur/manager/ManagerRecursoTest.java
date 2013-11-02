package tur.manager;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import static org.junit.Assert.*;
import tur.bean.BRecurso;
import tur.bean.BGeometry;
import tur.bean.BImagen;
import tur.datasource.BDConnecion;

public class ManagerRecursoTest {

    public ManagerRecursoTest() {
    }

    @BeforeClass
    public static void setUpClass() {
    }

    @AfterClass
    public static void tearDownClass() {
    }

    @Before
    public void setUp() {
    }

    @After
    public void tearDown() {
    }

    @Test
    public void testListarrecurso() {
        List<BRecurso> listRecurso = new LinkedList<BRecurso>();
        BRecurso bRecurso = new BRecurso();
        /*
         //Producto
         bRecurso.setIdproducto("32p");
         bRecurso.setNombre("Bosque de Piedras de Huaraca");
         bRecurso.setClase("Recurso Turístico");
         bRecurso.setEstado(true);

         bRecurso.setIdrecurso("32pr");
         bRecurso.setCategoria("Paisaje Natural");
         bRecurso.setTipo("Bosque de Piedra");
         bRecurso.setDescripcion("Es una enorme bosque pétreo de unos 30km2, aquí se encuentra cientos de formaciones rocosas de caprichosas formas, que han sido talladas probablemente por acción del viento y las lluvias ,además en la zona se ubica la laguna Ustanaqcha, distante a unos 2 Km desde una comunidad próxima, ideal para realizar una pesca deportiva de trucha , todo matizado por plantas nativas (tasta, tumbo silvestre, tankar, kiswar, muña, ichu entre otros).Al inicio del Bosque de piedras se ubica la pequeña comunidad de Huaraca, que aun conserva sus costumbres tradicionales y forma de vida, incluso, aprovecha algunas formas pétreas para acondicionar sus viviendas, esta comunidad se dedica a la crianza de llamas y alpacas. En cuanto a Fauna silvestre encontramos especies como viscacha, zorro andino, zorrillo, puma andino, cóndor aguilucho, cernícalo china linda, Huallata y picaflores. La zona es perfecta para realizar camiatas y realizar fotografías, incluso acampar, para lo cual se recomienda una carpa adecuada para el clima frio y ropa de abrigo.");
         bRecurso.setCorredor("Corredor Nazca-Chanka-Inca");
         //bRecurso.setFecha(null);
         bRecurso.setDistancia("61km al suroeste de la ciudad de Ayacucho");
         bRecurso.setTipo_precio_ing("Libre");
         bRecurso.setHorario_atencion("Recomendable Lunes - Domingo de 7.00 am a 18.00pm");
         // bRecurso.setTemperatura(null);
         bRecurso.setAltitud("Ubicado entre 3820 y 4550msnm");
         bRecurso.setVideo("http://www.youtube.com/watch?v=4T4bs7Ax40c");
         bRecurso.setComo_llegar("Se debe tomar una desvió en la carretera Libertadores en el sector , en el sector Jutumpapa (18 L 560867 8525369)distante a 55.8km desde Ayacucho, desde ali son 5,2km por una carretera afirmada. Es recomendable contra los servicios de una agencia de turismo.");
         //Geometry
         BGeometry bGeometry = new BGeometry();
         bGeometry.setLatitud(-13.28202);
         bGeometry.setLongitud(-74.36857);
         bGeometry.setCoordinates();
         bRecurso.setGeometry(bGeometry);
         //Imagen
         ArrayList<BImagen> list_imagen = new ArrayList<BImagen>();
         String id = "32p";
         BImagen bImagen1 = new BImagen();
         bImagen1.setUrl("huaraca1130903100021.JPG");

         bImagen1.setIdproducto(id);
         list_imagen.add(bImagen1);

         BImagen bImagen2 = new BImagen();
         bImagen2.setUrl("huaraca2130903100021.JPG");
         bImagen2.setIdproducto(id);
         list_imagen.add(bImagen2);

         BImagen bImagen3 = new BImagen();
         bImagen3.setUrl("huaraca2130903100021.jpg");
         bImagen3.setIdproducto(id);
         list_imagen.add(bImagen3);
         bRecurso.setImagenes(list_imagen);

         BImagen bImagen4 = new BImagen();
         bImagen4.setUrl("huaraca4130903100021.JPG");
         bImagen4.setIdproducto(id);
         list_imagen.add(bImagen4);

         bRecurso.setImagenes(list_imagen);
         //Array Recurso
         listRecurso.add(bRecurso);
         */
        /**
         * ************************************************
         */

        //Producto
        bRecurso.setIdproducto("32p");
        bRecurso.setNombre("Pampa de Ayacucho");
        bRecurso.setClase("Recurso Turístico");
        bRecurso.setEstado(true);

        bRecurso.setIdrecurso("32pr");
        bRecurso.setCategoria("Sitios Historicos");
        bRecurso.setTipo("Santuario Histórico");
        bRecurso.setDescripcion("En Pampa de Ayacucho encontramos el obelisco blanco, con una altura de 44 metros, que constituye los años transcurridos desde el último movimiento indígena de Túpac Amaru II en 1780 hasta la Batalla Final en 1824; la forma piramidal representa las regiones naturales del Perú: Costa, sierra y selva y las irregularidades, los cortes en los diferentes niveles, representan las diversas conspiraciones, motines y levantamientos que se sucedieron en el Perú por su independencia. También a un lado de las pampas alquilan caballos para pasear hacia el bosque Usqu Willka, el precio es de S/.3.00 por persona.");
        bRecurso.setHistoria("En estas pampas se libró el 9 de diciembre de 1824 la gloriosa Batalla de Ayacucho, con la que se selló la independencia del Perú y de toda América. Su icono es el gran obelisco blanco que se yergue victorioso y que representa la identidad y orgullo de la Región de Humanga, por ser el símbolo de la integración y el triunfo de los países de América, el obelisco también simboliza a los peruanos y americanos que derramaron su sangre a través de siglos para lograr su independencia.");
        bRecurso.setCorredor("Corredor Wari-Chanka-Inca");
        //bRecurso.setFecha(null);
        bRecurso.setDistancia("A 31km de la ciudad de Ayacucho, y a 1,5 km al noreste de Quinua");
        bRecurso.setTipo_precio_ing("Libre");
        bRecurso.setHorario_atencion("Lunes a Domingo 07 a 17h.");
        bRecurso.setTemperatura("Max 24 °C, Min 17°C");
        bRecurso.setAltitud("3387msnm");
        bRecurso.setVideo("http://www.youtube.com/watch?v=MVeMv25iUvA");
        bRecurso.setComo_llegar("Se puede llegar con las combis que se dirigen hacia el pueblo de Quinua, ,a partir del pueblo de Quinua recomendamos realizar la ruta caminando.");
        //Geometry
        BGeometry bGeometry = new BGeometry();
        bGeometry.setLatitud(-13.03312);
        bGeometry.setLongitud(-74.12004);
        bGeometry.setCoordinates();
        bRecurso.setGeometry(bGeometry);
        //Imagen
        ArrayList<BImagen> list_imagen = new ArrayList<BImagen>();
        String id = "32p";
        BImagen bImagen1 = new BImagen();
        bImagen1.setUrl("pampayac1131023082728.JPG");

        bImagen1.setIdproducto(id);
        list_imagen.add(bImagen1);

        BImagen bImagen2 = new BImagen();
        bImagen2.setUrl("pampayac2131023082728.JPG");
        bImagen2.setIdproducto(id);
        list_imagen.add(bImagen2);

        BImagen bImagen3 = new BImagen();
        bImagen3.setUrl("pampayac3131023082728.jpg");
        bImagen3.setIdproducto(id);
        list_imagen.add(bImagen3);
        bRecurso.setImagenes(list_imagen);

        BImagen bImagen4 = new BImagen();
        bImagen4.setUrl("pampayac4131023082728.JPG");
        bImagen4.setIdproducto(id);
        list_imagen.add(bImagen4);

        BImagen bImagen5 = new BImagen();
        bImagen5.setUrl("pampayac5131023082728.JPG");
        bImagen5.setIdproducto(id);
        list_imagen.add(bImagen5);

        bRecurso.setImagenes(list_imagen);
        //Array Recurso
        listRecurso.add(bRecurso);

        /**
         * ***********************************************
         */
        BDConnecion conexion = new BDConnecion();
        conexion.getConnection();

        ManagerRecurso instance = null;
        instance = new ManagerRecurso(conexion);

        List expResult = listRecurso;
        List result = instance.listarrecurso();

        // assertEquals(expResult.size(), result.size());
        // for (int i = 0; i < expResult.size() && expResult.size() == result.size(); i++) {
        for (int i = 0; i < 1; i++) {
            BRecurso b_expResult = (BRecurso) expResult.get(i);
            BRecurso b_result = (BRecurso) result.get(i);
            assertEquals(b_expResult.getIdproducto(), b_result.getIdproducto());
            assertEquals(b_expResult.getNombre(), b_result.getNombre());
            assertEquals(b_expResult.getClase(), b_result.getClase());
            assertEquals(b_expResult.isEstado(), b_result.isEstado());
            assertEquals(b_expResult.getIdrecurso(), b_result.getIdrecurso());
            assertEquals(b_expResult.getCategoria(), b_result.getCategoria());
            assertEquals(b_expResult.getTipo(), b_result.getTipo());
            assertEquals(b_expResult.getDescripcion(), b_result.getDescripcion());
            assertEquals(b_expResult.getCorredor(), b_result.getCorredor());
            assertEquals(b_expResult.getDistancia(), b_result.getDistancia());
            assertEquals(b_expResult.getTipo_precio_ing(), b_result.getTipo_precio_ing());
            assertEquals(b_expResult.getHorario_atencion(), b_result.getHorario_atencion());
            assertEquals(b_expResult.getAltitud(), b_result.getAltitud());
            assertEquals(b_expResult.getVideo(), b_result.getVideo());
            assertEquals(b_expResult.getComo_llegar(), b_result.getComo_llegar());
            BGeometry geo_expResult = b_expResult.getGeometry();
            BGeometry geo_result = b_result.getGeometry();
            //Geometry
            assertEquals(geo_expResult.getCoordinates()[0], geo_result.getCoordinates()[0], 1e-8);//double1 double 2, and delta
            assertEquals(geo_expResult.getCoordinates()[1], geo_result.getCoordinates()[1], 1e-8);
            //Imagen
            for (int j = 0;
                    j < b_expResult.getImagenes()
                    .size() && (b_expResult.getImagenes().size() == b_result.getImagenes().size()); j++) {
                assertEquals(b_expResult.getImagenes().get(j).getIdproducto(), b_result.getImagenes().get(j).getIdproducto());
            }
        }
    }
}
