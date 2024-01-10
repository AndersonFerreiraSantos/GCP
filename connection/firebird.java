import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class ExemploConexaoFirebird {
    public static void main(String[] args) {
        String url = "jdbc:firebirdsql:/localhost:3050/seu_banco_de_dados.fdb";
        String user = "user";
        String password = "HatunaMatata";

        try {
            Class.forName("org.firebirdsql.jdbc.FBDriver");

            Connection conn = DriverManager.getConnection(url, user, password);

            Statement stmt = conn.createStatement();

            ResultSet rs = stmt.executeQuery("SELECT * FROM table");

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                System.out.println("ID: " + id + ", name: " + name);
            }

            rs.close();
            stmt.close();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
