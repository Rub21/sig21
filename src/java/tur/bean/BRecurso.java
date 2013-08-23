package tur.bean;

import java.util.ArrayList;

public class BRecurso extends BProducto {
    /* Definido
     private String id;
     private String nombre;
     private String clase;
     private boolean  estado;
     */

    private String idrecurso;
    private String categoria;
    private String tipo;
    private String descripcion;
    private String historia;
    private String corredor;
    private String fecha;
    
    private String distancia;
    private String costo_de_ingreso;
    private String horario_de_atencion;
    private String temperatura;
    private String altitud;
    
   private String video;
    private String como_llegar;
    private ArrayList<BRecurso_Transporte> transporte;
    private BGeometry geometry;
    private ArrayList<BImagen> imagenes;

    public String getVideo() {
        return video.trim().replaceAll(" +", " ");
    }

    public void setVideo(String video) {
        this.video = video;
    }

    
    public String getFecha() {
        return fecha.trim().replaceAll(" +", " ");
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    
    public String getIdrecurso() {
        return idrecurso.trim().replaceAll(" +", " ");
    }

    public void setIdrecurso(String idrecurso) {
        this.idrecurso = idrecurso;
    }

    public String getCategoria() {
        return categoria.trim().replaceAll(" +", " ");
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getTipo() {
        return tipo.trim().replaceAll(" +", " ");
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDescripcion() {
        return descripcion.trim().replaceAll(" +", " ");
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getHistoria() {
        return historia.trim().replaceAll(" +", " ");
    }

    public void setHistoria(String historia) {
        this.historia = historia;
    }

    public String getCorredor() {
        return corredor.trim().replaceAll(" +", " ");
    }

    public void setCorredor(String corredor) {
        this.corredor = corredor;
    }

    public String getDistancia() {
        return distancia.trim().replaceAll(" +", " ");
    }

    public void setDistancia(String distancia) {
        this.distancia = distancia;
    }

    public String getCosto_de_ingreso() {
        return costo_de_ingreso.trim().replaceAll(" +", " ");
    }

    public void setCosto_de_ingreso(String costo_de_ingreso) {
        this.costo_de_ingreso = costo_de_ingreso;
    }

    public String getHorario_de_atencion() {
        return horario_de_atencion.trim().replaceAll(" +", " ");
    }

    public void setHorario_de_atencion(String horario_de_atencion) {
        this.horario_de_atencion = horario_de_atencion;
    }

    public String getTemperatura() {
        return temperatura.trim().replaceAll(" +", " ");
    }

    public void setTemperatura(String temperatura) {
        this.temperatura = temperatura;
    }

    public String getAltitud() {
        return altitud.trim().replaceAll(" +", " ");
    }

    public void setAltitud(String altitud) {
        this.altitud = altitud;
    }

    public String getComo_llegar() {
        return como_llegar.trim().replaceAll(" +", " ");
    }

    public void setComo_llegar(String como_llegar) {
        this.como_llegar = como_llegar;
    }

    public ArrayList<BRecurso_Transporte> getTransporte() {
        return transporte;
    }

    public void setTransporte(ArrayList<BRecurso_Transporte> transporte) {
        this.transporte = transporte;
    }

    public BGeometry getGeometry() {
        return geometry;
    }

    public void setGeometry(BGeometry geometry) {
        this.geometry = geometry;
    }

    public ArrayList<BImagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(ArrayList<BImagen> imagenes) {
        this.imagenes = imagenes;
    }

    public void print() {
        System.out.println(" idrecurso : " + getIdrecurso());
        System.out.println(" categoria : " + getCategoria());
        System.out.println(" tipo : " + getTipo());
        System.out.println(" descripcion : " + getDescripcion());
        System.out.println(" historia : " + getHistoria());
        System.out.println(" corredor : " + getCorredor());
        System.out.println(" distancia : " + getDistancia());
        System.out.println(" costo_de_ingreso : " + getCosto_de_ingreso());
        System.out.println(" horario_de_atencion : " + getHorario_de_atencion());
        System.out.println(" temperatura : " + getTemperatura());
        System.out.println(" altitud :" + getAltitud());
        System.out.println(" como_llegar : " + getComo_llegar());
        System.out.println(" transporte : " + getTransporte().size());
        System.out.println(" geometry : " + getGeometry().getCoordinates());
        System.out.println("  imagenes : " + getImagenes().size());



    }
}
