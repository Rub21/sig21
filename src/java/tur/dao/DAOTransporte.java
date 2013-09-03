/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
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
import tur.bean.BTransporte;

/**
 *
 * @author ruben
 */
public class DAOTransporte {

    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    //imagen
    Connection conni = null;
    PreparedStatement pstmti = null;
    ResultSet rsi = null;
    //destino
    Connection connd = null;
    PreparedStatement pstmtd = null;
    ResultSet rsd = null;

    public DAOTransporte(Connection conn) {
        this.conn = conn;
        this.conni = conn;
        this.connd = conn;

    }

    public void registrartransporte(BTransporte bTransporte) {
        try {
            String sql = "SELECT insert_transporte('" + bTransporte.getIdproducto() + "',"
                    + " '" + bTransporte.getNombre() + "',"
                    + " '" + bTransporte.getClase() + "', "
                    + bTransporte.isEstado() + ", "
                    + "'" + bTransporte.getIdtransporte() + "' ,"
                    + " '" + bTransporte.getDescripcion() + "', "
                    + " '" + bTransporte.getTipo() + "', "
                    + "'" + bTransporte.getDireccion() + "', "
                    + "'" + bTransporte.getTelefono() + "',"
                    + "'" + bTransporte.getSitio_web() + "',"
                    + "'" + bTransporte.getHorario_atencion() + "',"
                    + "'" + bTransporte.getHorario_salida() + "',"
                    + "'" + bTransporte.getDestinos() + "',"
                    + bTransporte.getGeometry().getLatitud() + ", "
                    + bTransporte.getGeometry().getLongitud() + ");";

            String sql_img = "";
            for (int i = 0; i < bTransporte.getImagenes().size(); i++) {
                sql_img += "INSERT INTO imagen(url, idproducto) "
                        + "VALUES ('" + bTransporte.getImagenes().get(i).getUrl()
                        + "', '" + bTransporte.getImagenes().get(i).getIdproducto() + "');";
            }
            sql = sql + sql_img;
            System.out.println("SQL===========: " + sql);
            pstmt = conn.prepareStatement(sql);
            pstmt.executeUpdate();
            /*pstmt.executeQuery();
             conn.commit();*/
        } catch (SQLException ex) {
            System.out.println("erorr en sql" + ex.toString());
            Logger.getLogger(DAOHotel.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public List listarTransporte() {

        List list = new LinkedList();

        try {

            String sql = "SELECT idproducto, nombre, clase, estado, idtransporte, descripcion, tipo, \n"
                    + "       direccion, telefono, sitio_web, horario_atencion, horario_salida, \n"
                    + "       destinos, lat, lon\n"
                    + "  FROM select_transporte;";
            //System.out.println("--:" + sql);
            pstmt = conn.prepareStatement(sql);
            rs = pstmt.executeQuery();
            while (rs.next()) {

                BTransporte bTransporte = new BTransporte();
                BGeometry bGeometry = new BGeometry();
                //Producto                
                bTransporte.setIdproducto(rs.getString("idproducto"));
                bTransporte.setNombre(rs.getString("nombre"));
                bTransporte.setClase(rs.getString("clase"));
                bTransporte.setEstado(rs.getBoolean("estado"));
                //Transporte
                bTransporte.setIdtransporte(rs.getString("idtransporte"));
                bTransporte.setDescripcion(rs.getString("descripcion"));
                bTransporte.setTipo(rs.getString("tipo"));
                bTransporte.setDireccion(rs.getString("direccion"));
                bTransporte.setTelefono(rs.getString("telefono"));
                bTransporte.setSitio_web(rs.getString("sitio_web"));
                bTransporte.setHorario_atencion(rs.getString("horario_atencion"));
                bTransporte.setHorario_salida(rs.getString("horario_salida"));
                bTransporte.setDestinos(rs.getString("destinos"));
                //Geometry
                bGeometry.setLatitud(rs.getDouble("lat"));
                bGeometry.setLongitud(rs.getDouble("lon"));
                bGeometry.setIdproducto(rs.getString("idproducto"));
                bGeometry.setCoordinates();
                bTransporte.setGeometry(bGeometry);
                //Imagen
                bTransporte.setImagenes(listarimagen(bTransporte.getIdproducto()));
                list.add(bTransporte);
            }
            pstmt.close();
            rs.close();
        } catch (SQLException ex) {
            System.out.println("Error en Listar Transporte: " + ex);
        }
        return list;
    }

    public ArrayList<BImagen> listarimagen(String id) {
        ArrayList<BImagen> list = new ArrayList<BImagen>();
        try {
            String sql = "SELECT url,  idproducto  FROM imagen where idproducto='" + id + "';";   
            pstmti = conni.prepareStatement(sql);
            rsi = pstmti.executeQuery();
            while (rsi.next()) {
                BImagen bImagen = new BImagen();
                bImagen.setUrl(rsi.getString("url"));
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
}
