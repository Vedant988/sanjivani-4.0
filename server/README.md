# Team Sanjivani 4.0 Backend API

A production-ready Node.js backend API built with Express.js and MongoDB (Mongoose) for Team Sanjivani 4.0 website.

## Features

- ✅ RESTful API design
- ✅ MongoDB with Mongoose ODM
- ✅ Error handling middleware
- ✅ Request validation & sanitization
- ✅ JWT Authentication for admin routes
- ✅ Security middleware (Helmet, Rate limiting, CORS)
- ✅ Error monitoring (Sentry integration)
- ✅ Input validation & XSS protection
- ✅ Environment variable configuration
- ✅ Clean folder structure
- ✅ ES Modules (import/export)

## Security Features

### Authentication
- JWT-based admin authentication
- HttpOnly secure cookies for token storage
- Protected admin routes with middleware
- Rate limiting on auth endpoints (5 attempts per 15min)

### Security Middleware
- **Helmet**: Security headers (CSP, HSTS, etc.)
- **Rate Limiting**: 100 requests per 15min per IP
- **CORS**: Locked to production domains only
- **Input Validation**: Comprehensive validation with express-validator
- **XSS Protection**: Input sanitization middleware

### Monitoring
- **Sentry**: Error tracking and performance monitoring
- **Health Checks**: `/api/health`, `/api/health/ready`, `/api/health/live`
- **Structured Logging**: Request logging with timestamps

## Project Structure

```
server/
├── config/
│   └── database.js          # MongoDB connection configuration
├── controllers/
│   ├── productController.js # Product CRUD operations
│   ├── teamController.js    # Team member CRUD operations
│   ├── projectController.js # Project CRUD operations
│   ├── contactController.js # Contact form handling
│   └── bookingController.js  # Booking/enquiry handling
├── middleware/
│   ├── errorHandler.js      # Global error handling
│   └── notFound.js          # 404 handler
├── models/
│   ├── Product.js           # Product schema
│   ├── TeamMember.js        # Team member schema
│   ├── Project.js           # Project schema
│   ├── Contact.js           # Contact message schema
│   └── Booking.js           # Booking schema
├── routes/
│   ├── productRoutes.js     # Product routes
│   ├── teamRoutes.js        # Team routes
│   ├── projectRoutes.js     # Project routes
│   ├── contactRoutes.js     # Contact routes
│   └── bookingRoutes.js     # Booking routes
├── .env                     # Environment variables
├── .env.example            # Environment variables template
├── package.json            # Dependencies and scripts
├── server.js               # Main server file
└── README.md               # This file
```

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env` (already done)
   - Update MongoDB URI if needed
   - Adjust PORT and other settings as required

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:5000` (or the PORT specified in `.env`).

## API Endpoints

### Products
- `GET /api/products` - Get all products (with filtering: ?category=Planting&inStock=true&search=keyword)
- `GET /api/products/:id` - Get single product by ID or slug
- `POST /api/products` - Create new product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Team Members
- `GET /api/team` - Get all team members (?type=Lead&isActive=true)
- `GET /api/team/:id` - Get single team member
- `POST /api/team` - Create team member (Admin)
- `PUT /api/team/:id` - Update team member (Admin)
- `DELETE /api/team/:id` - Delete team member (Admin)

### Projects
- `GET /api/projects` - Get all projects (?status=Current&year=2024)
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (Admin)
- `PUT /api/projects/:id` - Update project (Admin)
- `DELETE /api/projects/:id` - Delete project (Admin)

### Contact Messages
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (Admin, ?status=new&page=1&limit=20)
- `GET /api/contact/:id` - Get single message (Admin)
- `PUT /api/contact/:id` - Update message status (Admin)
- `DELETE /api/contact/:id` - Delete message (Admin)

### Bookings/Enquiries
- `POST /api/bookings` - Submit booking/enquiry
- `GET /api/bookings` - Get all bookings (Admin, ?status=pending&type=engineer)
- `GET /api/bookings/:id` - Get single booking (Admin)
- `PUT /api/bookings/:id` - Update booking status (Admin)
- `DELETE /api/bookings/:id` - Delete booking (Admin)

### Health Check
- `GET /api/health` - Server health check

## Response Format

All API responses follow this consistent format:

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Optional success message"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message"
}
```

## Database Models

### Product
- name, category, tagline, description
- features (array), specifications (array of objects)
- price, image, images, inStock, stockQuantity
- slug (auto-generated), timestamps

### TeamMember
- name, role, type (Faculty/Mentor/Lead/Member)
- department, email, phone, linkedin
- photo, bio, displayOrder, isActive
- timestamps

### Project
- title, year, status (Current/Completed/Upcoming)
- description, achievements (array), images (array)
- competition, location, features, technologies
- captain, viceCaptain, displayOrder
- timestamps

### Contact
- name, email, phone, subject, message
- status (new/read/replied/archived)
- repliedAt, replyMessage, ipAddress
- timestamps

### Booking
- name, email, phone, organization
- type (engineer/product_enquiry/consultation/other)
- department, preferredDate, timeSlot, purpose
- productId (reference), productName
- status (pending/confirmed/completed/cancelled)
- adminNotes, confirmedAt, confirmedBy
- ipAddress, timestamps

## Environment Variables

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/sanjivani_prod?retryWrites=true&w=majority

# Server
PORT=5000
NODE_ENV=production

# CORS (Production domains only)
FRONTEND_URL=https://yourdomain.com
ADMIN_URL=https://admin.yourdomain.com

# JWT Authentication
JWT_SECRET=your-super-secure-jwt-secret-change-this-in-production
JWT_EXPIRE=30d

# Admin Credentials
ADMIN_EMAIL=admin@sanjivani.com
ADMIN_PASSWORD=change-this-password-immediately

# Error Monitoring
SENTRY_DSN=https://your-sentry-dsn-here
```

## Deployment

### Prerequisites
1. **MongoDB Atlas**: Set up production database cluster
2. **Domain/SSL**: Configure production domain with HTTPS
3. **Secrets Management**: Use environment variables or secret manager
4. **Sentry Account**: Set up error monitoring
5. **CI/CD**: Configure automated deployment pipeline

### Production Checklist
- [ ] Change database name from 'test' to 'sanjivani_prod'
- [ ] Set NODE_ENV=production
- [ ] Configure production CORS origins
- [ ] Set secure JWT secret (32+ characters)
- [ ] Change admin credentials
- [ ] Set up Sentry DSN
- [ ] Enable HTTPS with HSTS
- [ ] Configure rate limiting
- [ ] Set up monitoring and alerts
- [ ] Test backup/restore procedures

### Health Checks
- `GET /api/health` - Basic health check
- `GET /api/health/ready` - Readiness probe (checks DB)
- `GET /api/health/live` - Liveness probe

## Security Notes

- Admin routes are protected with JWT authentication
- All input is validated and sanitized
- Rate limiting prevents abuse
- CORS is locked to production domains
- Sensitive data is never logged
- HttpOnly cookies prevent XSS attacks

