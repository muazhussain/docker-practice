import { Controller, Get, Param, Post, Patch, Delete, Req, Res } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Controller('student')
export class ProxyController {
    @Get(':roll')
    async getStudent(@Param('roll') roll, @Req() req, @Res() res) {
        return createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true,
            pathRewrite: {
                '^/student': '/student',
            },
        })(req, res);
    }

    @Post()
    async addStudent(@Req() req, @Res() res) {
        console.log('Post');
        const x = await createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true,
            pathRewrite: {
                '^/student': '/student',
            },
        })(req, res);
        console.log(x);
        return x;
    }

    @Patch(':roll')
    async updateStudent(@Param('roll') roll, @Req() req, @Res() res) {
        return createProxyMiddleware({
            target: 'http://localhost:3001',
            pathRewrite: {
                '^/student': '/student',
            },
        })(req, res);
    }

    @Delete(':roll')
    async deleteStudent(@Param('roll') roll, @Req() req, @Res() res) {
        return createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true,
            pathRewrite: {
                '^/student': '/student',
            },
        })(req, res);
    }
}
