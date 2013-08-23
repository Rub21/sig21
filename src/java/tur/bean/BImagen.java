/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package tur.bean;

/**
 *
 * @author ruben
 */
public class BImagen {

    //private String id;
    private String url;
    private String idproducto;

    public String getIdproducto() {
        return idproducto.trim().replaceAll(" +", " ");
    }

    public void setIdproducto(String idproducto) {
        this.idproducto = idproducto;
    }

    public String getUrl() {
        return url.trim().replaceAll(" +", " ");
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
