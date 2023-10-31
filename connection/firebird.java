import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class ExemploConexaoFirebird {
    public static void main(String[] args) {
        // Configurações de conexão com o banco de dados Firebird
        String url = "jdbc:firebirdsql:/localhost:3050/seu_banco_de_dados.fdb";
        String usuario = "seu_usuario";
        String senha = "sua_senha";

        try {
            // Carrega o driver JDBC do Firebird
            Class.forName("org.firebirdsql.jdbc.FBDriver");

            // Estabelece a conexão com o banco de dados
            Connection conn = DriverManager.getConnection(url, usuario, senha);

            // Cria uma instrução SQL
            Statement stmt = conn.createStatement();

            // Executa uma consulta
            ResultSet rs = stmt.executeQuery("SELECT * FROM sua_tabela");

            // Processa o resultado
            while (rs.next()) {
                int id = rs.getInt("id");
                String nome = rs.getString("nome");
                // Faça algo com os dados
                System.out.println("ID: " + id + ", Nome: " + nome);
            }

            // Fecha os recursos
            rs.close();
            stmt.close();
            conn.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
