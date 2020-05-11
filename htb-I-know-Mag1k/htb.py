import binascii
import urllib.parse
import base64

iknowmag1k = "RGsT1ajC8r%2FbC7hIlR0zwvjHmyCDpKRMuN%2BnJOMTAFL1pPoeKW3VKw%3D%3D"
iknowmag1k = urllib.parse.unquote(iknowmag1k)
iknowmag1k_hex = binascii.b2a_hex(binascii.a2b_base64(iknowmag1k))

iknowmag1k_iv = iknowmag1k_hex[:16]
iknowmag1k_block_1 = iknowmag1k_hex[16:16*2]
iknowmag1k_block_2 = iknowmag1k_hex[16*2:16*3]
iknowmag1k_block_3 = iknowmag1k_hex[16*3:16*4]
iknowmag1k_block_4 = iknowmag1k_hex[16*4:16*5]

print(iknowmag1k_iv)
print(iknowmag1k_block_1)

change_iv = b'0'*16
print(urllib.parse.quote(base64.b64encode(change_iv+iknowmag1k_block_1)))
print(urllib.parse.quote(binascii.b2a_base64(change_iv+iknowmag1k_block_1)))
