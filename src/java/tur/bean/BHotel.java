/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tur.bean;

import java.util.ArrayList;

/**
 *
 * @author ruben
 */
public class BHotel extends BProducto {

    private String idhotel;
    private String categoria;
    private String descripcion;
    private String direccion;
    private String telefono;
    private String sitio_web;
    private String correo_elec;
    private String tipo_precio_hab;
    private String formas_pago;
    private BGeometry geometry;
    private ArrayList<BServiciosAdicional> bServiciosAdicional;
    private ArrayList<BImagen> imagenes;

    public String getIdhotel() {
        return idhotel.trim().replaceAll(" +", " ");
    }

    public void setIdhotel(String idhotel) {
        this.idhotel = idhotel;
    }

    public String getCategoria() {
        return categoria.trim().replaceAll(" +", " ");
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getDescripcion() {
        return descripcion.trim().replaceAll(" +", " ");
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getDireccion() {
        return direccion.trim().replaceAll(" +", " ");
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono.trim().replaceAll(" +", " ");
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getSitio_web() {
        return sitio_web.trim().replaceAll(" +", " ");
    }

    public void setSitio_web(String sitio_web) {
        this.sitio_web = sitio_web;
    }

    public String getCorreo_elec() {
        return correo_elec.trim().replaceAll(" +", " ");
    }

    public void setCorreo_elec(String correo_elec) {
        this.correo_elec = correo_elec;
    }

    public String getTipo_precio_hab() {
        return tipo_precio_hab.trim().replaceAll(" +", " ");
    }

    public void setTipo_precio_hab(String tipo_precio_hab) {
        this.tipo_precio_hab = tipo_precio_hab;
    }

    public String getFormas_pago() {
        return formas_pago.trim().replaceAll(" +", " ");
    }

    public void setFormas_pago(String formas_pago) {
        this.formas_pago = formas_pago;
    }

    public BGeometry getGeometry() {
        return geometry;
    }

    public void setGeometry(BGeometry geometry) {
        this.geometry = geometry;
    }

    public ArrayList<BServiciosAdicional> getbServiciosAdicional() {
        return bServiciosAdicional;
    }

    public void setbServiciosAdicional(ArrayList<BServiciosAdicional> bServiciosAdicional) {
        this.bServiciosAdicional = bServiciosAdicional;
    }

    public ArrayList<BImagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(ArrayList<BImagen> imagenes) {
        this.imagenes = imagenes;
    }

    public void print() {

        System.out.println("idhotel :" + getIdhotel());
        System.out.println("categoria :" + getCategoria());
        System.out.println("direccion :" + getDireccion());
        System.out.println("telefono :" + getTelefono());
        System.out.println("sitio_web :" + getSitio_web());
        System.out.println("Correo Electronico :" + getCorreo_elec());
        System.out.println("precio_hab :" + getTipo_precio_hab());
        System.out.println("formas de Pago :" + getFormas_pago());
        System.out.println("Latitud :" + getGeometry().getLatitud());
        System.out.println("Longitud :" + getGeometry().getLongitud());
        System.out.println("Servico Adicional:" + getbServiciosAdicional().size());
        System.out.println("Imagenes" + getImagenes().size());

    }
}
