export interface ICar {
    id?: number;
    city?: string;
    state?: string;
    year?: string;
    brand?: string;
    model?: string;
    version?: string;
    price?: number;
    mileage?: number;
    image?: string;
    certificate?: boolean;
    promoted?: boolean
}
/* 
    Lo ideal sería que estos parámetros no sean opcionales, pero para eso necesitaría tener el modelo de la entidad.
    En este caso, solamente infiero que el modelo de la entidad es el mismo que el de la respuesta.
*/
