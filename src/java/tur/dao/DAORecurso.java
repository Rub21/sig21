package tur.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import tur.bean.BGeometry;
import tur.bean.BImagen;
import tur.bean.BRecurso;
import tur.bean.BRecurso_Transporte;
import tur.bean.BTransporte;

/**
 *
 * @author ruben
 */
public class DAORecurso {

    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    Connection conni = null;
    PreparedStatement pstmti = null;
    ResultSet rsi = null;
    Connection connt = null;
    PreparedStatement pstmtt = null;
    ResultSet rst = null;

    // Utilities util = new Utilities();
    public DAORecurso(Connection conn) {
        this.conn = conn;
        this.conni = conn;
        this.connt = conn;
    }

    public void registrarrecurso(BRecurso bRecurso) {
        try {


            /*
             * insert_recurso(idproducto character(10),
             nombre character(100),
             clase character(50),
             estado boolean,
             idrecurso varchar(10) ,   
             categoria character(50),
             tipo character(100),
             descripcion TEXT,
             historia TEXT,
             fecha character(100),
             corredor character(50),
             distancia character(100),
             costo_de_ingreso character(30),
             horario_de_atencion character(100),
             temperatura character(30),
             altitud character(30),  
             como_llegar TEXT,          
             lat numeric,
             lon numeric)
             */
            String sql = "SELECT insert_recurso('" + bRecurso.getIdproducto() + "',"
                    + "'" + bRecurso.getNombre() + "',"
                    + "'" + bRecurso.getClase() + "',"
                    + bRecurso.isEstado() + ","
                    + "'" + bRecurso.getIdrecurso() + "',"
                    + "'" + bRecurso.getCategoria() + "',"
                    + "'" + bRecurso.getTipo() + "',"
                    + "'" + bRecurso.getDescripcion() + "',"
                    + "'" + bRecurso.getHistoria() + "',"
                    + "'" + bRecurso.getFecha() + "',"
                    + "'" + bRecurso.getCorredor() + "',"
                    + "'" + bRecurso.getDistancia() + "',"
                    + "'" + bRecurso.getTipo_precio_ing() + "',"
                    + "'" + bRecurso.getHorario_atencion() + "',"
                    + "'" + bRecurso.getTemperatura() + "',"
                    + "'" + bRecurso.getAltitud() + "',"
                    + "'" + bRecurso.getVideo() + "',"
                    + "'" + bRecurso.getComo_llegar() + "',"
                    + bRecurso.getGeometry().getLatitud() + ","
                    + bRecurso.getGeometry().getLongitud() + ""
                    + ");";


            String sql_img = "";
            for (int i = 0; i < bRecurso.getImagenes().size(); i++) {

                sql_img += "INSERT INTO imagen(url, idproducto) "
                        + "VALUES ('" + bRecurso.getImagenes().get(i).getUrl()
                        /*  + "','" + bRecurso.getImagenes().get(i).getTitulo()
                         + "','" + bRecurso.getImagenes().get(i).getDescripcion()*/
                        + "', '" + bRecurso.getImagenes().get(i).getIdproducto() + "');";
            }

            String sql_transporte = "";
            for (int i = 0; i < bRecurso.getTransporte().size(); i++) {

                sql_transporte += " INSERT INTO recurso_transporte(idrecurso, idtransporte)"
                        + "  VALUES ('" + bRecurso.getIdrecurso() + "', '" + bRecurso.getTransporte().get(i).getIdtransporte() + "');";
            }
            sql = sql + sql_img + sql_transporte;
            System.out.println("SQL" + sql);

            pstmt = conn.prepareStatement(sql);
            //pstmt.executeUpdate();
            pstmt.executeQuery();
            //conn.commit();
        } catch (SQLException ex) {
            Logger.getLogger(DAORecurso.class.getName()).log(Level.SEVERE, null, ex);
        }


    }

    public List listarrecurso() {
        List list = new LinkedList();

        try {

            String sql = "SELECT idproducto, nombre, clase, estado, idrecurso, categoria, tipo, \n"
                    + "       descripcion, historia, fecha, corredor, distancia, costo_de_ingreso, \n"
                    + "       horario_de_atencion, temperatura, altitud, video, como_llegar, \n"
                    + "       lat, lon\n"
                    + "  FROM select_recurso;";
            //System.out.println("--:" + sql);
            pstmt = conn.prepareStatement(sql);
            rs = pstmt.executeQuery();
            while (rs.next()) {
                BRecurso bRecurso = new BRecurso();
                BGeometry bGeometry = new BGeometry();
                BTransporte bTransporte = new BTransporte();

                //Producto                
                bRecurso.setIdproducto(rs.getString("idproducto"));
                bRecurso.setNombre(rs.getString("nombre"));
                bRecurso.setClase(rs.getString("clase"));
                bRecurso.setEstado(rs.getBoolean("estado"));

                //Recurso
                bRecurso.setIdrecurso(rs.getString("idrecurso"));
                bRecurso.setCategoria(rs.getString("categoria"));
                bRecurso.setTipo(rs.getString("tipo"));
                bRecurso.setDescripcion(rs.getString("descripcion"));
                bRecurso.setHistoria(rs.getString("historia"));
                bRecurso.setFecha(rs.getString("fecha"));
                bRecurso.setCorredor(rs.getString("corredor"));
                bRecurso.setDistancia(rs.getString("distancia"));
                bRecurso.setTipo_precio_ing(rs.getString("costo_de_ingreso"));
                bRecurso.setHorario_atencion(rs.getString("horario_de_atencion"));
                bRecurso.setTemperatura(rs.getString("temperatura"));
                bRecurso.setAltitud(rs.getString("altitud"));
                bRecurso.setVideo(rs.getString("video"));
                bRecurso.setComo_llegar(rs.getString("como_llegar"));


                //Geometry
                bGeometry.setLatitud(rs.getDouble("lat"));
                bGeometry.setLongitud(rs.getDouble("lon"));
                bGeometry.setIdproducto(rs.getString("idproducto"));
                bGeometry.setCoordinates();
                bRecurso.setGeometry(bGeometry);


                //transporte
                bRecurso.setTransporte(listartransporte(bRecurso.getIdrecurso()));

                //Imagen
                bRecurso.setImagenes(listarimagen(bRecurso.getIdproducto()));
                list.add(bRecurso);
            }


            pstmt.close();
            rs.close();
        } catch (SQLException ex) {
            System.out.println("Error en Listar Recurso: " + ex);
        }
        return list;
    }

    public ArrayList<BImagen> listarimagen(String id) {

        ArrayList<BImagen> list = new ArrayList<BImagen>();

        try {

            String sql = "SELECT url,idproducto  FROM imagen where idproducto='" + id + "';";
            System.out.println("-----------SQL IMAGEN-----" + sql);
            pstmti = conni.prepareStatement(sql);
            rsi = pstmti.executeQuery();

            while (rsi.next()) {
                BImagen bImagen = new BImagen();
                bImagen.setUrl(rsi.getString("url"));
                /* bImagen.setTitulo(rsi.getString("titulo"));
                 bImagen.setDescripcion(rsi.getString("decripcion"));*/
                bImagen.setIdproducto(rsi.getString("idproducto"));
                list.add(bImagen);
            }
            pstmti.close();
            rsi.close();

        } catch (SQLException ex) {
            System.out.println("Error en Listar Imagen: " + ex);
        }
        return list;

    }

    private ArrayList<BRecurso_Transporte> listartransporte(String id) {

        ArrayList<BRecurso_Transporte> list = new ArrayList<BRecurso_Transporte>();

        try {

            String sql = "SELECT idtransporte FROM recurso_transporte where idrecurso ='" + id + "';";

            System.out.println("-----------SQL IMAGEN-----" + sql);
            pstmtt = connt.prepareStatement(sql);
            rst = pstmtt.executeQuery();

            while (rst.next()) {
                BRecurso_Transporte bRecurso_Transporte = new BRecurso_Transporte();
                bRecurso_Transporte.setIdtransporte(rst.getString("idtransporte"));
                list.add(bRecurso_Transporte);
            }
            pstmtt.close();
            rst.close();

        } catch (SQLException ex) {
            System.out.println("Error en Listar Imagen: " + ex);
        }
        return list;

    }
}
