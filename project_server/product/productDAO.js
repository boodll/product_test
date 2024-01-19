const getPool = require('../common/pool')

//이곳에 필요한 sql 등록.. 
const sql = {
    product: 'SELECT * FROM product',
    // insert: 'INSERT INTO board (name, title, content) VALUES (?,?,?)',
    // board: 'SELECT * FROM board WHERE id = ?',
    // delete: 'DELETE FROM board WHERE id = ?',
    // update: 'UPDATE board SET title = ?, content = ? WHERE id = ?',
}

const productDAO = {
    product: async (callback) => {
        let conn = null
        try {
            conn = await getPool().getConnection()
            const [resp] = await conn.query(sql.product, [])
            console.log('000', resp)
            callback({ status: 200, message: 'OK', data: resp })
        } catch (error) {
            return { status: 500, message: '조회 실패', error: error }
        } finally {
            if (conn !== null) conn.release()
        }
    }
}
module.exports = productDAO