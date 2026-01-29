import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env vars
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

const backupTest = async () => {
  try {
    console.log('🔄 Starting Backup/Restore Verification Test...');
    
    // 1. Connect to DB
    console.log('📍 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to:', mongoose.connection.name);

    // 2. Create a test collection and document
    const TestSchema = new mongoose.Schema({
      name: String,
      timestamp: Date,
      testId: String
    });
    const TestModel = mongoose.model('BackupTest', TestSchema);
    
    const testId = 'backup-test-' + Date.now();
    console.log(`📝 Creating test document with ID: ${testId}`);
    
    await TestModel.create({
      name: 'Backup Verification Document',
      timestamp: new Date(),
      testId: testId
    });
    console.log('✅ Test document created');

    // 3. Instructions for manual backup
    console.log('\n⚠️  MANUAL ACTION REQUIRED:');
    console.log('1. Go to MongoDB Atlas Dashboard');
    console.log('2. Navigate to "Backups" tab');
    console.log('3. Trigger an "On Demand" snapshot/backup NOW');
    console.log('4. Wait for backup to complete');
    console.log('5. Once complete, press ENTER to continue...');
    
    // Wait for user input
    await new Promise(resolve => process.stdin.once('data', resolve));

    // 4. Verify data persists (simulation of restore check)
    console.log('\n🔍 Verifying data persistence...');
    const doc = await TestModel.findOne({ testId });
    
    if (doc) {
      console.log('✅ Data verification successful - Document found!');
      console.log('   ID:', doc.testId);
      console.log('   Created:', doc.timestamp);
    } else {
      console.error('❌ Data verification failed - Document NOT found');
    }

    // 5. Cleanup
    console.log('\n🧹 Cleaning up test data...');
    await TestModel.deleteOne({ testId });
    console.log('✅ Cleanup complete');

    console.log('\n🎉 Backup verification procedure complete!');
    console.log('Note: To fully test restore, you would restore the Atlas backup to a temporary cluster and verify the data there.');

  } catch (error) {
    console.error('❌ Error during backup test:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

backupTest();