const environments = {
    production: "production",
    development: "development",
    test: "test"
}

const ENV = process.env.NODE_ENV || environments.development;

const JWT_SECRET = `^0?C7|Zdnsl8j_KCcKLqoeiOE9b8%bMrd%zyTgGMi-UBnm3Tl6IML0heEz!^&VPnHyqXCi#wFpKBadzJ|ZTyYLOrpo%-dQv+uu$jJG_lG7+!N8xm|-gEjZ+|bxPKh8H0iqY2M1D0c^grkxO=o5v#eQNU-57J7MnVcjBT3wFSC@+bMr_h&b&pj$!&xlwNnl3$zXt451DsR%HM_bAI6cFB2jt6TnU$xX1@CqVfsiRTOk+B$?!$Tw7rsb7AlBahq+pX*DNVorfiN72#luwPw&-8uYZWP=Ix@sQ1oMC|CEZo3oi5|40Tm=FxdYM@x7fDPXGTlBSsIyn3DKTyG5SVfK9Nq2OKJD^?6hcOlW8Zb6ZRO-|U&6l+_0qBfOIr5507yBQWYg?YJvh!Z#ZJ9C3NoQYUOtJHaSOAz0$q=UouZFVE8CI4Xa7%@&qCT@S^#ya9%yB59!EShN^r9uXys9Lu2^f-I|u&sPVlZhy+nfcfnCR|0&z#S7y#iHwem1g&-lqZoAttu7t9Tt$gqJzHClf0u$qu^g^9&Ob$VP7A6rN-@Tr=J8w@J3s6?Cc$ajiFUJTVv$IlTl4sNs#qNBlJbdMVoAAy7TgWn%FsK-%7I2eE=@nrPS!q4=JN9IXLIr%FW_%Td79hCS^B+gr8&tjiBPsFtVn7*wge|?-WRKywJ3tMie3SkTo=QpX7%&$odnPEYf2Q5@P_WF+s&x%_pur*A40ZyfS6ZHbLd*6OxtDewI$ih8n6Q2UNZ1Ak8EMduwMZXY#x=O8Iiu6LOv*qj*ftaBE88^c=RNK0&5SKEjDX?uI+TtsTJ2xv+!^PsNprezHu#6n0!tKIC8C$fd^!+6-Rn|0BrPUnb4PaG^-Nx_^eeRmTr4SP1EdW5su83HfYgxcLYlIr&Qv21TA$qzXO?*FQsq$oZd0M$A&4awSLHZW8MB4vZqu6!WBHlJrKc?A_M|@8e-W49Ugqv0$TgENOFlf3mvo9b^jlr8Gd75t=uFAmK7!&56@iqnjcbzg!dq0A7fvQEZHoUxUd6LVhXzBhjWtJWySLL#!3|UmBAp9*ka@TA9!TuXbqxP9iDj+R5#Br+ydREMVDSoNkP-ADFO3Wz3PR?5pLgS&ru0nMLHHS1RBn3EGMIQ#U*WL6OByjmAfePYMYP^5!!O+O0K9N&qUVxXpEoMvwe237m?l=xF_s3$ONKHwyn*PMlV|fpxXqp1o3QZ*+f@it&#m3IUNgyTZmhhuvVFTTH4eVJcnt=?@Uh&bBh=MaHjz2srfJwRxCtM+S6NeF!n$72lIid!%d|A6yT$&gQPa%V9_n@IgDqZx7tHeU$j%xSN-ane=!kqY3hEmL=1toX_^Wj41v$t&Uj@9xAAsh@m1nA!^U&dwLYP%xs3QOFr!4Kuvr?L-Z?K6yII1VkzcX53ZhJ&ES%j0#rWOUnT9adiXk4I*ax$0dtL=j%LbppT@mt^*^j?xjEOO!8%a+I&89JtCK9XlvG2P#_G%d$CEGd_Y+MdgbzPzKG-wFV=KRYoKol7K12thxzyJa!Tj*lHBH8SW-SvN!4gU+&T?3^C?Kp!H^likyvFjgZN*A%2SAy^|a1Bj8UwNRYy=1Uvp_58TvJ@dh^iM64g61XoOpig&c$mcq6?-maIU7IM^atNLw|sR18dyR+cg!lN|%W^iYxTSX3EuriQum|2^wuD=N1|06e?BQBF6uH=r-fyt55MW^mr+up@!QtG_Ih1jUN@_qpa#ZXew-2AOFzqWKu%C8|rL2M^*Lo!gaQbarbXBXuYvT^u40CZ+@#Lu6c?RsrAKr--Hc9ZqfDCwKk0dA6rBiGwf^-h1CCG94HWzj@hJPOt#$|yoCWj_IzsKr=iid4G2l_b^IzR3J-^ZP0$qO_Qase6zu4GZ^4DFTF_eH!smyCjXOhRNeT=iPbr7GkACAj7YXKZ|ii0Rb?VUEy9o?T@UPXY8-=Cj4ki1&%ElfYqZGdnA^z|utq=5Z-0ShK5C2y8XOTBNvlE*is-TydQn39oUdGN-NSC!8oKesm^htR*nWYz!Nw00qXBA?PMXqqYhuby@5EaW#Ip$|gSfK`
const config = {
    [environments.production]: {
        PORT: 80,
        MongoDB: {
            PORT: 27017,
            HOST: 'localhost', 
            DB:   'clase_valencia'
        },
        JWT_SECRET
    },
    [environments.development]: {
        PORT: 8080,
        MongoDB: {
            PORT: 27017,
            HOST: 'localhost', 
            DB:   'clase_valencia_dev'
        },
        JWT_SECRET
    },
    [environments.test]: {
        PORT: 8080,
        MongoDB: {
            PORT: 27017,
            HOST: 'localhost', 
            DB:   'clase_valencia_test'
        },
        JWT_SECRET
    }
}

const CONFIG = config[ENV];

if(!CONFIG) {
    throw new Error(`NODE_ENV=${ENV} is not a valid environment.`);
}

process.env = {
    ...process.env,
    ...CONFIG
};
